/**
 * PROG2005 移动系统编程
 * 第二部分：Angular库存管理系统
 * 库存管理页面组件
 * 作者：霍子衡
 * 学号：24832232
 * GitHub用户名：Hzh050514
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';
import { Product, ProductCategory, StockStatus, HotStatus } from '../../models/product.model';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent implements OnInit {
  products: Product[] = [];
  productForm: FormGroup;
  isEditing = false;
  currentProductId: string | null = null;
  message: { type: 'success' | 'error' | 'info', text: string } | null = null;

  // 枚举需要在模板中使用
  readonly HotStatus = HotStatus;
  readonly StockStatus = StockStatus;

  // 下拉选项
  categories = this.inventoryService.getCategoryOptions();
  stockStatuses = this.inventoryService.getStockStatusOptions();
  hotStatuses = this.inventoryService.getHotStatusOptions();

  constructor(
    private inventoryService: InventoryService,
    private fb: FormBuilder
  ) {
    this.productForm = this.createProductForm();
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  private createProductForm(): FormGroup {
    return this.fb.group({
      id: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9\-_]+$/)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      category: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      supplier: ['', Validators.required],
      stockStatus: ['', Validators.required],
      isHot: [HotStatus.NO, Validators.required],
      notes: ['']
    });
  }

  loadProducts(): void {
    this.products = this.inventoryService.getAllProducts();
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.showMessage('Please fill in all required fields', 'error');
      return;
    }

    const productData: Product = this.productForm.value;

    if (this.isEditing && this.currentProductId) {
      this.inventoryService.updateProduct(this.currentProductId, productData).subscribe({
        next: (response) => {
          if (response.success) {
            this.showMessage(response.message, 'success');
            this.resetForm();
            this.loadProducts();
          } else {
            this.showMessage(response.message, 'error');
          }
        },
        error: (error) => {
          this.showMessage('Update failed, please try again later', 'error');
          console.error('Update error:', error);
        }
      });
    } else {
      this.inventoryService.addProduct(productData).subscribe({
        next: (response) => {
          if (response.success) {
            this.showMessage(response.message, 'success');
            this.resetForm();
            this.loadProducts();
          } else {
            this.showMessage(response.message, 'error');
          }
        },
        error: (error) => {
          this.showMessage('Add failed, please try again later', 'error');
          console.error('Add error:', error);
        }
      });
    }
  }

  onEdit(product: Product): void {
    this.isEditing = true;
    this.currentProductId = product.id;
    this.productForm.patchValue(product);
    this.scrollToForm();
  }

  onDelete(productId: string): void {
    if (confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
      this.inventoryService.deleteProduct(productId).subscribe({
        next: (response) => {
          if (response.success) {
            this.showMessage(response.message, 'success');
            this.loadProducts();
          } else {
            this.showMessage(response.message, 'error');
          }
        },
        error: (error) => {
          this.showMessage('Delete failed, please try again later', 'error');
          console.error('Delete error:', error);
        }
      });
    }
  }

  onReset(): void {
    if (confirm('Are you sure you want to reset all data? This will restore to initial sample data.')) {
      this.inventoryService.resetData();
      this.showMessage('Data has been reset to initial sample data', 'success');
      this.loadProducts();
      this.resetForm();
    }
  }

  resetForm(): void {
    this.productForm.reset({
      id: '',
      name: '',
      category: '',
      quantity: 0,
      price: 0,
      supplier: '',
      stockStatus: '',
      isHot: HotStatus.NO,
      notes: ''
    });
    this.isEditing = false;
    this.currentProductId = null;
  }

  showMessage(text: string, type: 'success' | 'error' | 'info'): void {
    this.message = { type, text };
    setTimeout(() => {
      this.message = null;
    }, 3000);
  }

  private scrollToForm(): void {
    const formElement = document.querySelector('.product-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getHotProducts(): Product[] {
    return this.products.filter(p => p.isHot === HotStatus.YES);
  }

  get totalValue(): number {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  get totalQuantity(): number {
    return this.products.reduce((total, product) => total + product.quantity, 0);
  }
}