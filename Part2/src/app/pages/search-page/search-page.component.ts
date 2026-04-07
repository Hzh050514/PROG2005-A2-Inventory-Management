/**
 * PROG2005 移动系统编程
 * 第二部分：Angular库存管理系统
 * 搜索页面组件
 * 作者：霍子衡
 * 学号：24832232
 * GitHub用户名：Hzh050514
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';
import { Product, ProductCategory, StockStatus, HotStatus, ProductFilter } from '../../models/product.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: Product[] = [];
  allProducts: Product[] = [];
  isSearching = false;

  // 枚举需要在模板中使用
  readonly HotStatus = HotStatus;
  readonly StockStatus = StockStatus;

  // 筛选选项
  categories = this.inventoryService.getCategoryOptions();
  stockStatuses = this.inventoryService.getStockStatusOptions();
  hotStatuses = this.inventoryService.getHotStatusOptions();

  constructor(
    private inventoryService: InventoryService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.createSearchForm();
  }

  ngOnInit(): void {
    this.allProducts = this.inventoryService.getAllProducts();
    this.searchResults = [...this.allProducts];
  }

  private createSearchForm(): FormGroup {
    return this.fb.group({
      name: [''],
      category: [''],
      minPrice: [''],
      maxPrice: [''],
      stockStatus: [''],
      isHot: ['']
    });
  }

  onSearch(): void {
    this.isSearching = true;
    
    const filter: ProductFilter = {
      name: this.searchForm.get('name')?.value?.trim(),
      category: this.searchForm.get('category')?.value,
      minPrice: this.parseNumber(this.searchForm.get('minPrice')?.value),
      maxPrice: this.parseNumber(this.searchForm.get('maxPrice')?.value),
      stockStatus: this.searchForm.get('stockStatus')?.value,
      isHot: this.searchForm.get('isHot')?.value
    };

    // 应用筛选
    this.searchResults = this.inventoryService.filterProducts(filter);
    this.isSearching = false;
  }

  onReset(): void {
    this.searchForm.reset();
    this.searchResults = [...this.allProducts];
  }

  private parseNumber(value: string): number | undefined {
    const num = parseFloat(value);
    return isNaN(num) ? undefined : num;
  }

  get totalResults(): number {
    return this.searchResults.length;
  }

  get hasFilters(): boolean {
    const values = this.searchForm.value;
    return Object.values(values).some(value => value !== '' && value !== null && value !== undefined);
  }

  getAveragePrice(): number {
    if (this.searchResults.length === 0) return 0;
    const total = this.searchResults.reduce((sum, product) => sum + product.price, 0);
    return total / this.searchResults.length;
  }

  getHotCount(): number {
    return this.searchResults.filter(p => p.isHot === HotStatus.YES).length;
  }

  getInStockCount(): number {
    return this.searchResults.filter(p => p.stockStatus === StockStatus.IN_STOCK).length;
  }
}