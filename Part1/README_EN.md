# PROG2005 Mobile Systems Programming - Part 1: Basic TypeScript Inventory Management System

## Project Information
- **Student Name**: Zihuo Huo (霍子衡)
- **Student ID**: 24832232
- **GitHub Username**: Hzh050514
- **Course**: PROG2005 Mobile Systems Programming
- **Assessment**: 2 - Part 1

## Project Description
This is a TypeScript-based inventory management system for managing a simple database of various items. The application runs continuously while the browser is open, with no data persistence required after browser closure.

## Features

### Data Management
- **Add Product**: Support for adding new inventory products
- **Edit Product**: Update product information by product name
- **Delete Product**: Delete products by name (confirmation required)
- **Search Product**: Search functionality based on product name
- **View All Products**: Display all items in the database
- **View Hot Products**: Display all hot items in the database

### Data Validation
- Product ID uniqueness validation
- Required field validation
- Numeric range validation (quantity, price cannot be negative)
- Type validation (numeric fields do not accept alphabetic input)

### User Experience
- Responsive design, mobile device support
- Interactive message prompts (using innerHTML)
- Intuitive user interface
- Clear error messages
- Real-time data updates

## Technology Stack
- **TypeScript**: Strongly-typed JavaScript superset
- **HTML5**: Semantic markup
- **CSS3**: Modern styling and responsive design
- **Native DOM API**: No framework usage

## Data Structure

### Product Fields
1. **Product ID**: Unique identifier (only allowed to be entered and saved once)
2. **Product Name**: Product name
3. **Category**: Electronics, Furniture, Clothing, Tools, Other
4. **Quantity**: Stock quantity
5. **Price**: Product price
6. **Supplier Name**: Supplier information
7. **Stock Status**: In Stock, Low Stock, Out of Stock
8. **Hot Status**: Yes, No
9. **Product Notes**: Optional notes

### Type Definitions
Using TypeScript interfaces and enums to ensure data integrity:
- `Product`: Product interface
- `ProductCategory`: Category enum
- `StockStatus`: Stock status enum
- `HotStatus`: Hot status enum

## Project Structure

```
Part1/
├── index.html          # Main HTML file
├── main.ts            # TypeScript main application file
├── types.ts           # TypeScript type definitions
├── styles.css         # CSS styles file
├── tsconfig.json      # TypeScript configuration file
└── README_EN.md       # Project documentation (English)
```

## Running Instructions

### Method 1: Using Local Server
1. Install TypeScript compiler: `npm install -g typescript`
2. Compile TypeScript: `tsc`
3. Start local server (e.g., using Python):
   ```bash
   python -m http.server 8000
   ```
4. Access in browser: `http://localhost:8000/Part1/`

### Method 2: Direct File Opening
Since the application uses TypeScript modules, TypeScript needs to be compiled to JavaScript or run on a server that supports ES modules.

### Method 3: Using Live Server Extension (VS Code)
1. Install Live Server extension
2. Right-click on `index.html` file
3. Select "Open with Live Server"

## Initial Data
The system preloads 5 sample products:
1. Smartphone (Electronics, Hot)
2. Office Chair (Furniture)
3. T-shirt (Clothing, Hot)
4. Electric Drill (Tools, Out of Stock)
5. Coffee Machine (Other, Out of Stock, Hot)

## Design Principles

### User-Centered Design
- Intuitive operation flow
- Clear visual hierarchy
- Timely user feedback
- Error-tolerant design

### Responsive Design
- Mobile-first design approach
- Flexible grid layout
- Adaptive font sizes
- Touch-friendly interaction elements

### Code Quality
- Clear TypeScript type definitions
- Modular code structure
- Adequate code comments
- Error handling mechanisms

## Technical Implementation Details

### TypeScript Features
- Interfaces and type definitions
- Classes and methods
- Enum types
- Generic arrays
- Module import/export

### DOM Manipulation
- Use `addEventListener` for event binding
- Use `innerHTML` to display messages
- Form data validation
- Dynamic content updates

### Data Management
- Use arrays to store product data
- Use Set to track unique IDs
- Data validation and sanitization
- State management

## Testing Methods

### Functional Testing
1. Add new product and verify
2. Update existing product information
3. Delete product (test confirmation mechanism)
4. Search functionality testing
5. Data validation testing

### Responsive Testing
1. Test layout on different screen sizes
2. Test touch interactions
3. Test form validation

### Error Handling Testing
1. Test duplicate ID handling
2. Test invalid data input
3. Test null value handling

## Submission Requirements
- All source code files contain header comments
- Clear code structure with adequate comments
- Organized into separate subdirectories by module
- Include GitHub repository link

## License
This project is for PROG2005 course assignment, for educational purposes only.

---

**Author**: Zihuo Huo (霍子衡)  
**Date**: April 2026  
**Version**: 1.0.0