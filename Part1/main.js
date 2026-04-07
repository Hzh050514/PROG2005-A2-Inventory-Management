/**
 * PROG2005 Mobile Systems Programming
 * Part 1: Basic TypeScript Inventory Management System
 * Main application file (JavaScript version)
 * Author: 霍子衡
 * Student ID: 24832232
 * GitHub username: Hzh050514
 */

// Product category enum
const ProductCategory = {
  ELECTRONICS: 'Electronics',
  FURNITURE: 'Furniture',
  CLOTHING: 'Clothing',
  TOOLS: 'Tools',
  OTHER: 'Other'
};

// Stock status enum
const StockStatus = {
  IN_STOCK: 'In Stock',
  OUT_OF_STOCK: 'Out of Stock',
  LOW_STOCK: 'Low Stock'
};

// Hot status enum
const HotStatus = {
  YES: 'Yes',
  NO: 'No'
};

// Product class
class Product {
  constructor(id, name, category, quantity, price, supplier, stockStatus, isHot, notes = '') {
    this.id = id;
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
    this.supplier = supplier;
    this.stockStatus = stockStatus;
    this.isHot = isHot;
    this.notes = notes;
  }
}

// Inventory manager class
class InventoryManager {
  constructor(initialProducts = []) {
    this.products = [];
    this.usedIds = new Set();
    
    if (initialProducts) {
      initialProducts.forEach(product => this.addProduct(product));
    }
  }

  // Validate product ID uniqueness
  isIdUnique(id) {
    return !this.usedIds.has(id);
  }

  // Validate product data
  validateProduct(product) {
    const errors = [];

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

  // Add product
  addProduct(product) {
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

  // Update product by name
  updateProductByName(name, updatedProduct) {
    const index = this.products.findIndex(p => p.name === name);
    if (index === -1) {
      this.displayError(`Product with name "${name}" not found`);
      return false;
    }

    const currentProduct = this.products[index];
    const mergedProduct = { ...currentProduct, ...updatedProduct };

    // Check if ID is being changed (not allowed)
    if (updatedProduct.id && updatedProduct.id !== currentProduct.id) {
      this.displayError('Changing product ID is not allowed');
      return false;
    }

    // Validate updated data
    const errors = this.validateProduct(mergedProduct);
    if (errors.length > 0) {
      this.displayError(`Cannot update product: ${errors.join(', ')}`);
      return false;
    }

    this.products[index] = mergedProduct;
    this.displaySuccess(`Product "${name}" updated successfully`);
    return true;
  }

  // Delete product by name
  deleteProductByName(name) {
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

  // Search product by name
  searchProductByName(name) {
    return this.products.find(p => 
      p.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Get all products
  getAllProducts() {
    return [...this.products];
  }

  // Get all hot products
  getHotProducts() {
    return this.products.filter(p => p.isHot === HotStatus.YES);
  }

  // Display error message
  displayError(message) {
    this.showMessage(message, 'error');
  }

  // Display success message
  displaySuccess(message) {
    this.showMessage(message, 'success');
  }

  // Display info message
  displayInfo(message) {
    this.showMessage(message, 'info');
  }

  // Show message (using innerHTML)
  showMessage(message, type) {
    const messageDiv = document.getElementById('message-area');
    if (messageDiv) {
      const className = type === 'error' ? 'error-message' : 
                       type === 'success' ? 'success-message' : 'info-message';
      messageDiv.innerHTML = `<div class="${className}">${message}</div>`;
      
      // Clear message after 3 seconds
      setTimeout(() => {
        messageDiv.innerHTML = '';
      }, 3000);
    }
  }
}

// Get initial sample products
function getInitialProducts() {
  return [
    new Product('P001', 'Smartphone', ProductCategory.ELECTRONICS, 50, 2999, 'Apple Inc.', StockStatus.IN_STOCK, HotStatus.YES, 'Latest iPhone model'),
    new Product('P002', 'Office Chair', ProductCategory.FURNITURE, 20, 899, 'IKEA', StockStatus.IN_STOCK, HotStatus.NO, 'Ergonomic design'),
    new Product('P003', 'T-Shirt', ProductCategory.CLOTHING, 100, 89, 'Uniqlo', StockStatus.IN_STOCK, HotStatus.YES, '100% cotton material'),
    new Product('P004', 'Electric Drill', ProductCategory.TOOLS, 15, 499, 'Bosch Tools', StockStatus.LOW_STOCK, HotStatus.NO, 'Professional grade tool'),
    new Product('P005', 'Coffee Machine', ProductCategory.OTHER, 0, 1299, 'DeLonghi', StockStatus.OUT_OF_STOCK, HotStatus.YES, 'Fully automatic coffee machine')
  ];
}

// Initialize inventory manager
const inventoryManager = new InventoryManager(getInitialProducts());

// DOM element references
const elements = {
    // Form elements
    addForm: document.getElementById('add-form'),
    updateForm: document.getElementById('update-form'),
    deleteBtn: document.getElementById('delete-btn'),
    searchBtn: document.getElementById('search-btn'),
    showAllBtn: document.getElementById('show-all-btn'),
    showHotBtn: document.getElementById('show-hot-btn'),
    resetBtn: document.getElementById('reset-btn'),
    testBtn: document.getElementById('test-btn'),
    
    // Input fields
    productId: document.getElementById('product-id'),
    productName: document.getElementById('product-name'),
    productCategory: document.getElementById('product-category'),
    productQuantity: document.getElementById('product-quantity'),
    productPrice: document.getElementById('product-price'),
    productSupplier: document.getElementById('product-supplier'),
    productStatus: document.getElementById('product-status'),
    productHot: document.getElementById('product-hot'),
    productNotes: document.getElementById('product-notes'),
    
    updateName: document.getElementById('update-name'),
    updateField: document.getElementById('update-field'),
    updateValue: document.getElementById('update-value'),
    deleteName: document.getElementById('delete-name'),
    searchName: document.getElementById('search-name'),
    
    // Result display containers
    resultsContainer: document.getElementById('results-container'),
    messageArea: document.getElementById('message-area')
};

// Event listener setup
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Add product form submit
    if (elements.addForm) {
        elements.addForm.addEventListener('submit', handleAddProduct);
        console.log('Add form event listener added');
    }
    
    // Update product form submit
    if (elements.updateForm) {
        elements.updateForm.addEventListener('submit', handleUpdateProduct);
    }
    
    // Delete button click
    if (elements.deleteBtn) {
        elements.deleteBtn.addEventListener('click', handleDeleteProduct);
    }
    
    // Search button click
    if (elements.searchBtn) {
        elements.searchBtn.addEventListener('click', handleSearchProduct);
    }
    
    // Show all products button
    if (elements.showAllBtn) {
        elements.showAllBtn.addEventListener('click', () => {
            displayProducts(inventoryManager.getAllProducts(), 'All Products');
        });
    }
    
    // Show hot products button
    if (elements.showHotBtn) {
        elements.showHotBtn.addEventListener('click', () => {
            displayProducts(inventoryManager.getHotProducts(), 'Hot Products');
        });
    }
    
    // Reset data button
    if (elements.resetBtn) {
        elements.resetBtn.addEventListener('click', handleResetData);
    }
    
    // Test button
    if (elements.testBtn) {
        elements.testBtn.addEventListener('click', () => {
            console.log('Test button clicked - JavaScript is working');
            showMessage('JavaScript is working! System ready.', 'success');
            
            // Test display all products
            const products = inventoryManager.getAllProducts();
            console.log(`Total products: ${products.length}`);
            displayProducts(products, 'Test: All Products');
        });
    }
    
    console.log('Event listeners setup completed');
}

// Handle add product
function handleAddProduct(event) {
    event.preventDefault();
    console.log('Add product form submitted');
    
    // Create new product object
    const newProduct = new Product(
        elements.productId.value.trim(),
        elements.productName.value.trim(),
        elements.productCategory.value,
        parseInt(elements.productQuantity.value) || 0,
        parseFloat(elements.productPrice.value) || 0,
        elements.productSupplier.value.trim(),
        elements.productStatus.value,
        elements.productHot.value,
        elements.productNotes.value.trim()
    );
    
    console.log('New product:', newProduct);
    
    // Add product
    const success = inventoryManager.addProduct(newProduct);
    
    if (success) {
        // Clear form
        elements.addForm.reset();
        // Show all products
        displayProducts(inventoryManager.getAllProducts(), 'Product List After Adding');
    }
}

// Handle update product
function handleUpdateProduct(event) {
    event.preventDefault();
    
    const productName = elements.updateName.value.trim();
    const field = elements.updateField.value;
    const value = elements.updateValue.value.trim();
    
    if (!productName || !value) {
        showMessage('Product name and new value cannot be empty', 'error');
        return;
    }
    
    // Create update object
    const updateData = {};
    
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
            if (value !== StockStatus.IN_STOCK && value !== StockStatus.OUT_OF_STOCK && value !== StockStatus.LOW_STOCK) {
                showMessage(`Stock status must be "${StockStatus.IN_STOCK}", "${StockStatus.LOW_STOCK}" or "${StockStatus.OUT_OF_STOCK}"`, 'error');
                return;
            }
            updateData.stockStatus = value;
            break;
            
        case 'isHot':
            if (value !== HotStatus.YES && value !== HotStatus.NO) {
                showMessage(`Hot status must be "${HotStatus.YES}" or "${HotStatus.NO}"`, 'error');
                return;
            }
            updateData.isHot = value;
            break;
            
        case 'notes':
            updateData.notes = value;
            break;
            
        default:
            showMessage('Invalid update field', 'error');
            return;
    }
    
    // Update product
    const success = inventoryManager.updateProductByName(productName, updateData);
    
    if (success) {
        elements.updateForm.reset();
        displayProducts(inventoryManager.getAllProducts(), 'Product List After Updating');
    }
}

// Handle delete product
function handleDeleteProduct() {
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

// Handle search product
function handleSearchProduct() {
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

// Handle reset data
function handleResetData() {
    const confirmed = confirm('Are you sure you want to reset all data? This will restore to initial sample data.');
    
    if (confirmed) {
        // Reinitialize inventory manager
        const newManager = new InventoryManager(getInitialProducts());
        Object.assign(inventoryManager, newManager);
        
        showMessage('Data has been reset to initial sample data', 'success');
        displayProducts(inventoryManager.getAllProducts(), 'Product List After Reset');
    }
}

// Display products list
function displayProducts(products, title = 'Product List') {
    console.log('Displaying products:', products.length, 'products');
    
    if (products.length === 0) {
        elements.resultsContainer.innerHTML = `
            <div class="no-results">
                <p>No product data available</p>
            </div>
        `;
        return;
    }
    
    // Create product cards HTML
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
    
    console.log('Products displayed successfully');
}

// Show message
function showMessage(message, type) {
    const className = type === 'error' ? 'error-message' : 
                     type === 'success' ? 'success-message' : 'info-message';
    
    elements.messageArea.innerHTML = `<div class="${className}">${message}</div>`;
    
    // Clear message after 3 seconds
    setTimeout(() => {
        elements.messageArea.innerHTML = '';
    }, 3000);
}

// Initialize application
function initApp() {
    console.log('initApp called');
    
    // Check DOM elements
    console.log('Checking DOM elements:');
    console.log('addForm:', elements.addForm);
    console.log('resultsContainer:', elements.resultsContainer);
    console.log('messageArea:', elements.messageArea);
    
    // Setup event listeners
    setupEventListeners();
    
    // Initial display of all products
    displayProducts(inventoryManager.getAllProducts(), 'Initial Product List');
    
    // Show welcome message
    showMessage('Inventory Management System started! Welcome.', 'success');
    
    console.log('Inventory Management System initialization completed');
    console.log('Student: 霍子衡 | ID: 24832232 | GitHub: Hzh050514');
}

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}