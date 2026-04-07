/**
 * PROG2005 移动系统编程
 * 第一部分：基础TypeScript库存管理系统
 * 作者：霍子衡
 * 学号：24832232
 * GitHub用户名：Hzh050514
 */

// 商品分类枚举
export enum ProductCategory {
  ELECTRONICS = 'Electronics',
  FURNITURE = 'Furniture',
  CLOTHING = 'Clothing',
  TOOLS = 'Tools',
  OTHER = 'Other'
}

// 库存状态枚举
export enum StockStatus {
  IN_STOCK = 'In Stock',
  OUT_OF_STOCK = 'Out of Stock',
  LOW_STOCK = 'Low Stock'
}

// 热销状态枚举
export enum HotStatus {
  YES = 'Yes',
  NO = 'No'
}

// 商品接口定义
export interface Product {
  id: string;           // 商品ID（唯一标识）
  name: string;         // 商品名称
  category: ProductCategory; // 分类
  quantity: number;     // 数量
  price: number;        // 价格
  supplier: string;     // 供应商名称
  stockStatus: StockStatus; // 库存状态
  isHot: HotStatus;     // 热销情况
  notes: string;        // 商品备注（可选）
}

// 库存管理类
export class InventoryManager {
  private products: Product[] = [];
  private usedIds: Set<string> = new Set();

  constructor(initialProducts?: Product[]) {
    if (initialProducts) {
      initialProducts.forEach(product => this.addProduct(product));
    }
  }

  // 验证商品ID是否唯一
  private isIdUnique(id: string): boolean {
    return !this.usedIds.has(id);
  }

  // 验证商品数据
  private validateProduct(product: Product): string[] {
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

  // 添加商品
  addProduct(product: Product): boolean {
    const errors = this.validateProduct(product);
    if (errors.length > 0) {
      this.displayError(`Cannot add product: ${errors.join(', ')}`);
      return false;
    }

    this.products.push(product);
    this.usedIds.add(product.id);
    this.displaySuccess(`Product "${product.name}" added successfully`);
    return true;
  }

  // 更新商品（通过商品名称）
  updateProductByName(name: string, updatedProduct: Partial<Product>): boolean {
    const index = this.products.findIndex(p => p.name === name);
    if (index === -1) {
      this.displayError(`Product with name "${name}" not found`);
      return false;
    }

    const currentProduct = this.products[index];
    const mergedProduct = { ...currentProduct, ...updatedProduct };

    // 检查ID是否被更改（不允许）
    if (updatedProduct.id && updatedProduct.id !== currentProduct.id) {
      this.displayError('Changing product ID is not allowed');
      return false;
    }

    // 验证更新后的数据
    const errors = this.validateProduct(mergedProduct as Product);
    if (errors.length > 0) {
      this.displayError(`Cannot update product: ${errors.join(', ')}`);
      return false;
    }

    this.products[index] = mergedProduct as Product;
    this.displaySuccess(`Product "${name}" updated successfully`);
    return true;
  }

  // 删除商品（通过商品名称）
  deleteProductByName(name: string): boolean {
    const index = this.products.findIndex(p => p.name === name);
    if (index === -1) {
      this.displayError(`Product with name "${name}" not found`);
      return false;
    }

    const product = this.products[index];
    const confirmed = confirm(`Are you sure you want to delete product "${name}"?`);
    if (!confirmed) {
      this.displayInfo('Delete operation cancelled');
      return false;
    }

    this.products.splice(index, 1);
    this.usedIds.delete(product.id);
    this.displaySuccess(`Product "${name}" deleted successfully`);
    return true;
  }

  // 通过名称搜索商品
  searchProductByName(name: string): Product | undefined {
    return this.products.find(p => 
      p.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // 获取所有商品
  getAllProducts(): Product[] {
    return [...this.products];
  }

  // 获取所有热门商品
  getHotProducts(): Product[] {
    return this.products.filter(p => p.isHot === HotStatus.YES);
  }

  // 显示错误信息
  private displayError(message: string): void {
    this.showMessage(message, 'error');
  }

  // 显示成功信息
  private displaySuccess(message: string): void {
    this.showMessage(message, 'success');
  }

  // 显示信息
  private displayInfo(message: string): void {
    this.showMessage(message, 'info');
  }

  // 显示消息（使用innerHTML）
  private showMessage(message: string, type: 'error' | 'success' | 'info'): void {
    const messageDiv = document.getElementById('message-area');
    if (messageDiv) {
      const className = type === 'error' ? 'error-message' : 
                       type === 'success' ? 'success-message' : 'info-message';
      messageDiv.innerHTML = `<div class="${className}">${message}</div>`;
      
      // 3秒后清除消息
      setTimeout(() => {
        messageDiv.innerHTML = '';
      }, 3000);
    }
  }
}

// 初始化一些示例数据
export function getInitialProducts(): Product[] {
  return [
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
}