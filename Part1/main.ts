/**
 * PROG2005 移动系统编程
 * 第一部分：基础TypeScript库存管理系统
 * 主应用程序文件
 * 作者：霍子衡
 * 学号：24832232
 * GitHub用户名：Hzh050514
 */

import { InventoryManager, getInitialProducts, Product, ProductCategory, StockStatus, HotStatus } from './types.js';

// 初始化库存管理器
const inventoryManager = new InventoryManager(getInitialProducts());

// DOM元素引用
const elements = {
    // 表单元素
    addForm: document.getElementById('add-form') as HTMLFormElement,
    updateForm: document.getElementById('update-form') as HTMLFormElement,
    deleteBtn: document.getElementById('delete-btn') as HTMLButtonElement,
    searchBtn: document.getElementById('search-btn') as HTMLButtonElement,
    showAllBtn: document.getElementById('show-all-btn') as HTMLButtonElement,
    showHotBtn: document.getElementById('show-hot-btn') as HTMLButtonElement,
    resetBtn: document.getElementById('reset-btn') as HTMLButtonElement,
    testBtn: document.getElementById('test-btn') as HTMLButtonElement,
    
    // 输入字段
    productId: document.getElementById('product-id') as HTMLInputElement,
    productName: document.getElementById('product-name') as HTMLInputElement,
    productCategory: document.getElementById('product-category') as HTMLSelectElement,
    productQuantity: document.getElementById('product-quantity') as HTMLInputElement,
    productPrice: document.getElementById('product-price') as HTMLInputElement,
    productSupplier: document.getElementById('product-supplier') as HTMLInputElement,
    productStatus: document.getElementById('product-status') as HTMLSelectElement,
    productHot: document.getElementById('product-hot') as HTMLSelectElement,
    productNotes: document.getElementById('product-notes') as HTMLTextAreaElement,
    
    updateName: document.getElementById('update-name') as HTMLInputElement,
    updateField: document.getElementById('update-field') as HTMLSelectElement,
    updateValue: document.getElementById('update-value') as HTMLInputElement,
    deleteName: document.getElementById('delete-name') as HTMLInputElement,
    searchName: document.getElementById('search-name') as HTMLInputElement,
    
    // 结果显示容器
    resultsContainer: document.getElementById('results-container') as HTMLDivElement,
    messageArea: document.getElementById('message-area') as HTMLDivElement
};

// 事件监听器设置
function setupEventListeners(): void {
    // 添加商品表单提交
    elements.addForm.addEventListener('submit', handleAddProduct);
    
    // 更新商品表单提交
    elements.updateForm.addEventListener('submit', handleUpdateProduct);
    
    // 删除按钮点击
    elements.deleteBtn.addEventListener('click', handleDeleteProduct);
    
    // 搜索按钮点击
    elements.searchBtn.addEventListener('click', handleSearchProduct);
    
    // 显示所有商品按钮
    elements.showAllBtn.addEventListener('click', () => {
        displayProducts(inventoryManager.getAllProducts(), 'All Products');
    });
    
    // 显示热门商品按钮
    elements.showHotBtn.addEventListener('click', () => {
        displayProducts(inventoryManager.getHotProducts(), 'Hot Products');
    });
    
    // 重置数据按钮
    elements.resetBtn.addEventListener('click', handleResetData);
    
    // 测试按钮
    elements.testBtn.addEventListener('click', () => {
        console.log('Test button clicked - JavaScript is working');
        showMessage('JavaScript is working! System ready.', 'success');
        
        // 测试显示所有产品
        const products = inventoryManager.getAllProducts();
        console.log(`Total products: ${products.length}`);
        displayProducts(products, 'Test: All Products');
    });
}

// 处理添加商品
function handleAddProduct(event: Event): void {
    event.preventDefault();
    
    // 创建新商品对象
    const newProduct: Product = {
        id: elements.productId.value.trim(),
        name: elements.productName.value.trim(),
        category: elements.productCategory.value as ProductCategory,
        quantity: parseInt(elements.productQuantity.value) || 0,
        price: parseFloat(elements.productPrice.value) || 0,
        supplier: elements.productSupplier.value.trim(),
        stockStatus: elements.productStatus.value as StockStatus,
        isHot: elements.productHot.value as HotStatus,
        notes: elements.productNotes.value.trim()
    };
    
    // 添加商品
    const success = inventoryManager.addProduct(newProduct);
    
    if (success) {
        // 清空表单
        elements.addForm.reset();
        // 显示所有商品
        displayProducts(inventoryManager.getAllProducts(), 'Product List After Adding');
    }
}

// 处理更新商品
function handleUpdateProduct(event: Event): void {
    event.preventDefault();
    
    const productName = elements.updateName.value.trim();
    const field = elements.updateField.value;
    const value = elements.updateValue.value.trim();
    
    if (!productName || !value) {
        showMessage('Product name and new value cannot be empty', 'error');
        return;
      }
    
    // 创建更新对象
    const updateData: Partial<Product> = {};
    
    switch (field) {
        case 'quantity':
            updateData.quantity = parseInt(value);
            if (isNaN(updateData.quantity)) {
                showMessage('Quantity must be a valid number', 'error');
                return;
            }
            break;
            
        case 'price':
            updateData.price = parseFloat(value);
            if (isNaN(updateData.price)) {
                showMessage('Price must be a valid number', 'error');
                return;
            }
            break;
            
        case 'supplier':
            updateData.supplier = value;
            break;
            
        case 'stockStatus':
            if (value !== StockStatus.IN_STOCK && value !== StockStatus.OUT_OF_STOCK) {
              showMessage(`Stock status must be "${StockStatus.IN_STOCK}" or "${StockStatus.OUT_OF_STOCK}"`, 'error');
              return;
            }
            updateData.stockStatus = value as StockStatus;
            break;
            
        case 'isHot':
            if (value !== HotStatus.YES && value !== HotStatus.NO) {
              showMessage(`Hot status must be "${HotStatus.YES}" or "${HotStatus.NO}"`, 'error');
              return;
            }
            updateData.isHot = value as HotStatus;
            break;
            
        case 'notes':
            updateData.notes = value;
            break;
            
        default:
            showMessage('Invalid update field', 'error');
            return;
    }
    
    // 更新商品
    const success = inventoryManager.updateProductByName(productName, updateData);
    
    if (success) {
        elements.updateForm.reset();
        displayProducts(inventoryManager.getAllProducts(), 'Product List After Updating');
    }
}

// 处理删除商品
function handleDeleteProduct(): void {
    const productName = elements.deleteName.value.trim();
    
    if (!productName) {
        showMessage('Please enter product name to delete', 'error');
        return;
    }
    
    const success = inventoryManager.deleteProductByName(productName);
    
    if (success) {
        elements.deleteName.value = '';
        displayProducts(inventoryManager.getAllProducts(), 'Product List After Deleting');
    }
}

// 处理搜索商品
function handleSearchProduct(): void {
    const productName = elements.searchName.value.trim();
    
    if (!productName) {
        showMessage('Please enter product name to search', 'error');
        return;
    }
    
    const product = inventoryManager.searchProductByName(productName);
    
    if (product) {
        displayProducts([product], `Search Results: ${productName}`);
    } else {
        showMessage(`No product found containing "${productName}"`, 'info');
        elements.resultsContainer.innerHTML = `
            <div class="no-results">
                <p>No product found containing "${productName}"</p>
            </div>
        `;
    }
}

// 处理重置数据
function handleResetData(): void {
    const confirmed = confirm('Are you sure you want to reset all data? This will restore to initial sample data.');
    
    if (confirmed) {
        // 重新初始化库存管理器
        const newManager = new InventoryManager(getInitialProducts());
        Object.assign(inventoryManager, newManager);
        
        showMessage('Data has been reset to initial sample data', 'success');
        displayProducts(inventoryManager.getAllProducts(), 'Product List After Reset');
    }
}

// 显示产品列表
function displayProducts(products: Product[], title: string = 'Product List'): void {
    if (products.length === 0) {
        elements.resultsContainer.innerHTML = `
            <div class="no-results">
                <p>No product data available</p>
            </div>
        `;
        return;
    }
    
    // 创建商品卡片HTML
    const productsHtml = products.map(product => `
        <div class="product-card ${product.isHot === HotStatus.YES ? 'hot-product' : ''}">
            <div class="product-header">
                <h3>${product.name}</h3>
                <span class="product-id">ID: ${product.id}</span>
            </div>
            
            <div class="product-details">
                <div class="detail-row">
                    <span class="detail-label">Category:</span>
                    <span class="detail-value">${product.category}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Quantity:</span>
                    <span class="detail-value">${product.quantity}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Price:</span>
                    <span class="detail-value">¥${product.price.toFixed(2)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Supplier:</span>
                    <span class="detail-value">${product.supplier}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Stock Status:</span>
                    <span class="detail-value status-${product.stockStatus === StockStatus.IN_STOCK ? 'in-stock' : 'out-of-stock'}">
                        ${product.stockStatus}
                    </span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Hot Product:</span>
                    <span class="detail-value ${product.isHot === HotStatus.YES ? 'hot-tag' : ''}">
                        ${product.isHot}
                    </span>
                </div>
                ${product.notes ? `
                <div class="detail-row">
                    <span class="detail-label">Notes:</span>
                    <span class="detail-value">${product.notes}</span>
                </div>` : ''}
            </div>
            
            ${product.isHot === HotStatus.YES ? 
                '<div class="hot-badge">🔥 Hot Product</div>' : ''}
        </div>
    `).join('');
    
    elements.resultsContainer.innerHTML = `
        <div class="results-header">
            <h3>${title} (Total: ${products.length} products)</h3>
        </div>
        <div class="products-grid">
            ${productsHtml}
        </div>
    `;
}

// 显示消息
function showMessage(message: string, type: 'error' | 'success' | 'info'): void {
    const className = type === 'error' ? 'error-message' : 
                     type === 'success' ? 'success-message' : 'info-message';
    
    elements.messageArea.innerHTML = `<div class="${className}">${message}</div>`;
    
    // 3秒后清除消息
    setTimeout(() => {
        elements.messageArea.innerHTML = '';
    }, 3000);
}

// 初始化应用程序
function initApp(): void {
    // 设置事件监听器
    setupEventListeners();
    
    // 初始显示所有商品
    displayProducts(inventoryManager.getAllProducts(), 'Initial Product List');
    
    // 显示欢迎消息
    showMessage('Inventory Management System started! Welcome.', 'success');
    
    console.log('Inventory Management System initialization completed');
    console.log('Student: 霍子衡 | ID: 24832232 | GitHub: Hzh050514');
}

// 当DOM加载完成后初始化应用
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}