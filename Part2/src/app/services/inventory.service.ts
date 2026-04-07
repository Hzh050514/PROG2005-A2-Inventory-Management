/**
 * PROG2005 移动系统编程
 * 第二部分：Angular库存管理系统
 * 库存管理服务
 * 作者：霍子衡
 * 学号：24832232
 * GitHub用户名：Hzh050514
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product, ProductCategory, StockStatus, HotStatus, ProductFilter } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private products: Product[] = [];
  private productsSubject = new BehaviorSubject<Product[]>([]);
  private usedIds: Set<string> = new Set();

  constructor() {
    this.loadInitialData();
  }

  // 获取所有商品的可观察对象
  get products$(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  // 加载初始数据
  private loadInitialData(): void {
    const initialProducts: Product[] = [
      {
        id: 'P001',
        name: 'Smartphone',
        category: ProductCategory.ELECTRONICS,
        quantity: 50,
        price: 2999,
        supplier: 'Apple Inc.',
        stockStatus: StockStatus.IN_STOCK,
        isHot: HotStatus.YES,
        notes: 'Latest iPhone model'
      },
      {
        id: 'P002',
        name: 'Office Chair',
        category: ProductCategory.FURNITURE,
        quantity: 20,
        price: 899,
        supplier: 'IKEA',
        stockStatus: StockStatus.IN_STOCK,
        isHot: HotStatus.NO,
        notes: 'Ergonomic design'
      },
      {
        id: 'P003',
        name: 'T-Shirt',
        category: ProductCategory.CLOTHING,
        quantity: 100,
        price: 89,
        supplier: 'Uniqlo',
        stockStatus: StockStatus.IN_STOCK,
        isHot: HotStatus.YES,
        notes: '100% cotton material'
      },
      {
        id: 'P004',
        name: 'Electric Drill',
        category: ProductCategory.TOOLS,
        quantity: 15,
        price: 499,
        supplier: 'Bosch Tools',
        stockStatus: StockStatus.LOW_STOCK,
        isHot: HotStatus.NO,
        notes: 'Professional grade tool'
      },
      {
        id: 'P005',
        name: 'Coffee Machine',
        category: ProductCategory.OTHER,
        quantity: 0,
        price: 1299,
        supplier: 'DeLonghi',
        stockStatus: StockStatus.OUT_OF_STOCK,
        isHot: HotStatus.YES,
        notes: 'Fully automatic coffee machine'
      }
    ];

    initialProducts.forEach(product => {
      this.products.push(product);
      this.usedIds.add(product.id);
    });

    this.productsSubject.next([...this.products]);
  }

  // Validate product
  validateProduct(product: Product): string[] {
    const errors: string[] = [];

    if (!product.id.trim()) {
      errors.push('Product ID cannot be empty');
    } else if (!this.isIdUnique(product.id)) {
      errors.push(`Product ID "${product.id}" already exists`);
    }

    if (!product.name.trim()) {
      errors.push('Product name cannot be empty');
    }

    if (product.quantity < 0) {
      errors.push('Quantity cannot be negative');
    }

    if (product.price < 0) {
      errors.push('Price cannot be negative');
    }

    if (!product.supplier.trim()) {
      errors.push('Supplier name cannot be empty');
    }

    return errors;
  }

  // 检查ID是否唯一
  private isIdUnique(id: string): boolean {
    return !this.usedIds.has(id);
  }

  // 添加商品
  addProduct(product: Product): Observable<{ success: boolean; message: string }> {
    const errors = this.validateProduct(product);
    
    if (errors.length > 0) {
      return of({
        success: false,
        message: `Cannot add product: ${errors.join(', ')}`
      });
    }

    this.products.push(product);
    this.usedIds.add(product.id);
    this.productsSubject.next([...this.products]);

    return of({
      success: true,
      message: `Product "${product.name}" added successfully`
    });
  }

  // 更新商品
  updateProduct(id: string, updates: Partial<Product>): Observable<{ success: boolean; message: string }> {
    const index = this.products.findIndex(p => p.id === id);
    
    if (index === -1) {
      return of({
        success: false,
        message: 'Product not found'
      });
    }

    // Check if ID is being changed (not allowed)
    if (updates.id && updates.id !== id) {
      return of({
        success: false,
        message: 'Changing product ID is not allowed'
      });
    }

    const updatedProduct = { ...this.products[index], ...updates };
    const errors = this.validateProduct(updatedProduct);
    
    if (errors.length > 0) {
      return of({
        success: false,
        message: `Cannot update product: ${errors.join(', ')}`
      });
    }

    this.products[index] = updatedProduct;
    this.productsSubject.next([...this.products]);

    return of({
      success: true,
      message: `Product "${updatedProduct.name}" updated successfully`
    });
  }

  // 删除商品
  deleteProduct(id: string): Observable<{ success: boolean; message: string }> {
    const index = this.products.findIndex(p => p.id === id);
    
    if (index === -1) {
      return of({
        success: false,
        message: 'Product not found'
      });
    }

    const product = this.products[index];
    this.products.splice(index, 1);
    this.usedIds.delete(id);
    this.productsSubject.next([...this.products]);

    return of({
      success: true,
      message: `Product "${product.name}" deleted successfully`
    });
  }

  // 根据ID获取商品
  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  // 根据名称搜索商品
  searchProductsByName(name: string): Product[] {
    if (!name.trim()) {
      return [...this.products];
    }
    
    const searchTerm = name.toLowerCase();
    return this.products.filter(p => 
      p.name.toLowerCase().includes(searchTerm)
    );
  }

  // 获取热门商品
  getHotProducts(): Product[] {
    return this.products.filter(p => p.isHot === HotStatus.YES);
  }

  // 获取所有商品
  getAllProducts(): Product[] {
    return [...this.products];
  }

  // 筛选商品
  filterProducts(filter: ProductFilter): Product[] {
    return this.products.filter(product => {
      if (filter.name && !product.name.toLowerCase().includes(filter.name.toLowerCase())) {
        return false;
      }
      
      if (filter.category && product.category !== filter.category) {
        return false;
      }
      
      if (filter.minPrice && product.price < filter.minPrice) {
        return false;
      }
      
      if (filter.maxPrice && product.price > filter.maxPrice) {
        return false;
      }
      
      if (filter.stockStatus && product.stockStatus !== filter.stockStatus) {
        return false;
      }
      
      if (filter.isHot && product.isHot !== filter.isHot) {
        return false;
      }
      
      return true;
    });
  }

  // 重置数据
  resetData(): void {
    this.products = [];
    this.usedIds.clear();
    this.loadInitialData();
  }

  // 获取分类选项
  getCategoryOptions(): { value: ProductCategory; label: string }[] {
    return Object.values(ProductCategory).map(category => ({
      value: category,
      label: category
    }));
  }

  // 获取库存状态选项
  getStockStatusOptions(): { value: StockStatus; label: string }[] {
    return Object.values(StockStatus).map(status => ({
      value: status,
      label: status
    }));
  }

  // 获取热销状态选项
  getHotStatusOptions(): { value: HotStatus; label: string }[] {
    return Object.values(HotStatus).map(status => ({
      value: status,
      label: status
    }));
  }
}