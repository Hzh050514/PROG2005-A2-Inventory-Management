# PROG2005 移动系统编程 - 第二部分：Angular库存管理系统

## 项目信息
- **学生姓名**: 霍子衡
- **学号**: 24832232
- **GitHub用户名**: Hzh050514
- **课程**: PROG2005 移动系统编程
- **作业**: 评估2 - 第二部分

## 项目描述
这是一个基于Angular 17的多页面库存管理系统，作为第一部分的扩展和重构。应用程序包含五个主要页面，提供完整的库存管理功能，无需服务器端交互。

## 功能特性

### 页面结构
1. **首页**: 系统概览和功能介绍
2. **库存管理页面**: 添加、编辑、删除库存商品
3. **搜索页面**: 高级搜索和筛选功能
4. **隐私与安全页面**: 安全分析和要求说明
5. **帮助页面**: 常见问题解答和故障排除指南

### 核心功能
- ✅ 添加、编辑、删除库存商品
- ✅ 高级搜索和筛选
- ✅ 响应式设计（完美适配移动设备）
- ✅ 完整的数据验证
- ✅ 用户友好的界面设计
- ✅ 实时数据更新
- ✅ 热销商品标记和筛选

## 技术栈
- **Angular 17**: 现代化的前端框架
- **TypeScript 5.2**: 强类型JavaScript超集
- **RxJS**: 响应式编程库
- **SCSS**: 现代化的样式系统
- **Angular Forms**: 响应式表单和验证
- **Angular Router**: 客户端路由

## 项目结构

```
Part2/
├── angular.json          # Angular项目配置
├── package.json         # 依赖管理
├── tsconfig.json       # TypeScript配置
├── src/
│   ├── app/
│   │   ├── components/  # 可重用组件
│   │   │   └── navbar/ # 导航栏组件
│   │   ├── pages/       # 页面组件
│   │   │   ├── home-page/           # 首页
│   │   │   ├── inventory-page/      # 库存管理页面
│   │   │   ├── search-page/         # 搜索页面
│   │   │   ├── privacy-security-page/ # 隐私安全页面
│   │   │   └── help-page/           # 帮助页面
│   │   ├── services/    # 服务
│   │   │   └── inventory.service.ts # 库存管理服务
│   │   ├── models/      # 数据模型
│   │   │   └── product.model.ts    # 商品数据模型
│   │   ├── app.module.ts           # 主模块
│   │   ├── app.component.ts        # 主组件
│   │   ├── app.component.html      # 主模板
│   │   └── app.component.scss      # 主样式
│   ├── index.html      # 入口HTML文件
│   ├── main.ts        # 入口TypeScript文件
│   └── styles.scss    # 全局样式
└── README.md          # 项目文档
```

## 运行方法

### 前提条件
- Node.js 18+ 
- npm 9+

### 安装步骤
1. 进入项目目录:
   ```bash
   cd Part2
   ```

2. 安装依赖:
   ```bash
   npm install
   ```

3. 启动开发服务器:
   ```bash
   npm start
   ```

4. 在浏览器中访问:
   ```
   http://localhost:4200
   ```

### 构建生产版本
```bash
npm run build
```

构建的文件将位于 `dist/inventory-management-system/` 目录中。

## 数据模型

### 商品接口
```typescript
interface Product {
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
```

### 枚举类型
- `ProductCategory`: 电子产品、家具、服装、工具、其他
- `StockStatus`: 有货、缺货
- `HotStatus`: 是、否

## 组件说明

### 主组件 (AppComponent)
- 应用程序的根组件
- 包含导航栏和路由出口
- 显示页脚信息

### 导航栏组件 (NavbarComponent)
- 响应式导航菜单
- 五个主要页面的导航链接
- 移动设备友好的菜单切换

### 页面组件
1. **HomePageComponent**: 系统概览、功能展示、技术栈介绍
2. **InventoryPageComponent**: 完整的库存管理功能（添加、编辑、删除）
3. **SearchPageComponent**: 高级搜索和筛选功能
4. **PrivacySecurityPageComponent**: 隐私与安全分析
5. **HelpPageComponent**: 常见问题解答和故障排除

### 服务
- **InventoryService**: 库存数据管理、验证、筛选功能

## 设计特点

### 响应式设计
- 移动优先的设计方法
- 自适应网格布局
- 触摸友好的交互元素
- 媒体查询支持各种屏幕尺寸

### 用户体验
- 直观的导航结构
- 清晰的视觉反馈
- 友好的错误提示
- 加载状态指示

### 代码质量
- 组件化架构
- 服务层抽象
- 类型安全的代码
- 充分的代码注释

## 数据验证

### 客户端验证
- 商品ID唯一性验证
- 必填字段验证
- 数值范围验证（不能为负数）
- 类型验证（数值字段不接受字母输入）

### 表单验证
- 使用Angular响应式表单
- 实时验证反馈
- 自定义验证规则
- 错误消息显示

## 隐私与安全考虑

### 数据安全
- 客户端数据存储（不持久化）
- 会话级别的数据生命周期
- 输入验证和清理
- 唯一性约束

### 用户保护
- 删除操作确认机制
- 友好的错误处理
- 不收集个人信息
- 透明的数据使用

## 评估要求满足情况

### 页面数量要求
- ✅ 首页：显示应用程序用途
- ✅ 库存管理页面：添加、编辑、删除
- ✅ 搜索页面：带筛选选项
- ✅ 隐私与安全页面：安全分析
- ✅ 帮助页面：FAQ及故障排除指南

### 功能要求
- ✅ 添加、编辑、更新库存项目详情
- ✅ 通过项目名称显示确认提示后删除项目
- ✅ 基于项目名称的检索功能
- ✅ 显示数据库中的所有条目
- ✅ 显示数据库中所有热门项目
- ✅ 专门页面用于呈现隐私与安全要求

### 代码结构要求
- ✅ 代码模块化、注释清晰且结构合理
- ✅ 至少包含一个模块和一个组件（实际多个）
- ✅ 用户友好性、响应性、功能性
- ✅ 对所有输入进行验证

## 学术诚信声明

本人确认已使用GenAI工具完成本次评估。根据评估简报及单元评估员制定的参数要求，本人使用了GitHub Copilot和ChatGPT以实现编码问题的故障排除和代码语法检查。

## 许可证
本项目为PROG2005课程作业，仅用于教育目的。

---

**作者**: 霍子衡  
**学号**: 24832232  
**日期**: 2026年4月  
**版本**: 1.0.0