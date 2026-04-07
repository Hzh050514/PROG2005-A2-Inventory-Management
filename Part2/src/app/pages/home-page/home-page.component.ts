/**
 * PROG2005 移动系统编程
 * 第二部分：Angular库存管理系统
 * 主页组件
 * 作者：霍子衡
 * 学号：24832232
 * GitHub用户名：Hzh050514
 */

import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Product, HotStatus, StockStatus } from '../../models/product.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  totalProducts = 0;
  hotProductsCount = 0;
  inStockCount = 0;
  recentProducts: Product[] = [];

  // 枚举需要在模板中使用
  readonly HotStatus = HotStatus;
  readonly StockStatus = StockStatus;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    const allProducts = this.inventoryService.getAllProducts();
    this.totalProducts = allProducts.length;
    
    this.hotProductsCount = allProducts.filter(p => p.isHot === HotStatus.YES).length;
    this.inStockCount = allProducts.filter(p => p.stockStatus === StockStatus.IN_STOCK).length;
    
    // Show the latest 5 products
    this.recentProducts = allProducts.slice(0, 5);
    
    // Update statistics cards
    this.stats = [
      { label: 'Total Products', value: this.totalProducts, icon: 'fas fa-box', color: '#3498db' },
      { label: 'Hot Products', value: this.hotProductsCount, icon: 'fas fa-fire', color: '#e74c3c' },
      { label: 'In Stock', value: this.inStockCount, icon: 'fas fa-check-circle', color: '#2ecc71' },
      { label: 'Categories', value: '5', icon: 'fas fa-tags', color: '#f39c12' }
    ];
  }

  // Feature cards
  features = [
    {
      icon: 'fas fa-plus-circle',
      title: 'Add Product',
      description: 'Easily add new inventory products with complete data validation',
      color: '#3498db'
    },
    {
      icon: 'fas fa-edit',
      title: 'Edit Product',
      description: 'Quickly update product information by product name',
      color: '#f39c12'
    },
    {
      icon: 'fas fa-trash-alt',
      title: 'Delete Product',
      description: 'Securely delete products with confirmation required',
      color: '#e74c3c'
    },
    {
      icon: 'fas fa-search',
      title: 'Search Products',
      description: 'Support for name search and advanced filtering',
      color: '#2ecc71'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Inventory Analysis',
      description: 'Real-time view of stock status and hot products',
      color: '#9b59b6'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Perfect adaptation to various mobile devices and screen sizes',
      color: '#1abc9c'
    }
  ];

  // Statistics cards - initialized as empty array, updated in loadDashboardData
  stats: { label: string; value: any; icon: string; color: string }[] = [];

  // Edit product method
  onEditProduct(productId: string): void {
    // In a real application, this would navigate to the edit page
    // For now, just show a message
    alert(`Will edit product ID: ${productId}\n\nIn a real application, this would navigate to the inventory management page for editing.`);
  }
}