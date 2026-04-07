/**
 * PROG2005 移动系统编程
 * 第二部分：Angular库存管理系统
 * 商品数据模型
 * 作者：霍子衡
 * 学号：24832232
 * GitHub用户名：Hzh050514
 */

// Product Category Enum
export enum ProductCategory {
  ELECTRONICS = 'Electronics',
  FURNITURE = 'Furniture',
  CLOTHING = 'Clothing',
  TOOLS = 'Tools',
  OTHER = 'Other'
}

// Stock Status Enum
export enum StockStatus {
  IN_STOCK = 'In Stock',
  OUT_OF_STOCK = 'Out of Stock',
  LOW_STOCK = 'Low Stock'
}

// Hot Status Enum
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

// 商品表单接口（用于添加/编辑）
export interface ProductForm {
  id: string;
  name: string;
  category: ProductCategory;
  quantity: number;
  price: number;
  supplier: string;
  stockStatus: StockStatus;
  isHot: HotStatus;
  notes: string;
}

// 搜索过滤器接口
export interface ProductFilter {
  name?: string;
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  stockStatus?: StockStatus;
  isHot?: HotStatus;
}