# PROG2005 Mobile Systems Programming - Part 2: Angular Inventory Management System

## Project Information
- **Student Name**: Zihuo Huo (霍子衡)
- **Student ID**: 24832232
- **GitHub Username**: Hzh050514
- **Course**: PROG2005 Mobile Systems Programming
- **Assessment**: 2 - Part 2

## Project Description
This is a multi-page inventory management system based on Angular 17, serving as an extension and refactoring of Part 1. The application includes five main pages providing complete inventory management functionality without server-side interaction.

## Features

### Page Structure
1. **Home Page**: System overview and feature introduction
2. **Inventory Management Page**: Add, edit, delete inventory products
3. **Search Page**: Advanced search and filtering functionality
4. **Privacy & Security Page**: Security analysis and requirements explanation
5. **Help Page**: Frequently Asked Questions and troubleshooting guide

### Core Features
- ✅ Add, edit, delete inventory products
- ✅ Advanced search and filtering
- ✅ Responsive design (perfectly adapts to mobile devices)
- ✅ Complete data validation
- ✅ User-friendly interface design
- ✅ Real-time data updates
- ✅ Hot product marking and filtering

## Technology Stack
- **Angular 17**: Modern frontend framework
- **TypeScript 5.2**: Strongly-typed JavaScript superset
- **RxJS**: Reactive programming library
- **SCSS**: Modern styling system
- **Angular Forms**: Reactive forms and validation
- **Angular Router**: Client-side routing

## Project Structure

```
Part2/
├── angular.json          # Angular project configuration
├── package.json         # Dependency management
├── tsconfig.json       # TypeScript configuration
├── src/
│   ├── app/
│   │   ├── components/  # Reusable components
│   │   │   └── navbar/ # Navigation bar component
│   │   ├── pages/       # Page components
│   │   │   ├── home-page/           # Home page
│   │   │   ├── inventory-page/      # Inventory management page
│   │   │   ├── search-page/         # Search page
│   │   │   ├── privacy-security-page/ # Privacy & security page
│   │   │   └── help-page/           # Help page
│   │   ├── services/    # Services
│   │   │   └── inventory.service.ts # Inventory management service
│   │   ├── models/      # Data models
│   │   │   └── product.model.ts    # Product data model
│   │   ├── app.module.ts           # Main module
│   │   ├── app.component.ts        # Main component
│   │   ├── app.component.html      # Main template
│   │   └── app.component.scss      # Main styles
│   ├── index.html      # Entry HTML file
│   ├── main.ts        # Entry TypeScript file
│   └── styles.scss    # Global styles
└── README_EN.md        # Project documentation (English)
```

## Running Instructions

### Prerequisites
- Node.js 18+
- npm 9+

### Installation Steps
1. Navigate to project directory:
   ```bash
   cd Part2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm start
   ```

4. Access in browser:
   ```
   http://localhost:4200
   ```

### Build Production Version
```bash
npm run build
```

Built files will be located in the `dist/inventory-management-system/` directory.

## Data Model

### Product Interface
```typescript
interface Product {
  id: string;           // Product ID (unique identifier)
  name: string;         // Product name
  category: ProductCategory; // Category
  quantity: number;     // Quantity
  price: number;        // Price
  supplier: string;     // Supplier name
  stockStatus: StockStatus; // Stock status
  isHot: HotStatus;     // Hot status
  notes: string;        // Product notes (optional)
}
```

### Enum Types
- `ProductCategory`: Electronics, Furniture, Clothing, Tools, Other
- `StockStatus`: In Stock, Out of Stock
- `HotStatus`: Yes, No

## Component Description

### Main Component (AppComponent)
- Root component of the application
- Contains navigation bar and router outlet
- Displays footer information

### Navigation Bar Component (NavbarComponent)
- Responsive navigation menu
- Navigation links to five main pages
- Mobile-friendly menu toggle

### Page Components
1. **HomePageComponent**: System overview, feature showcase, technology stack introduction
2. **InventoryPageComponent**: Complete inventory management functionality (add, edit, delete)
3. **SearchPageComponent**: Advanced search and filtering functionality
4. **PrivacySecurityPageComponent**: Privacy and security analysis
5. **HelpPageComponent**: Frequently Asked Questions and troubleshooting

### Services
- **InventoryService**: Inventory data management, validation, filtering functionality

## Design Features

### Responsive Design
- Mobile-first design approach
- Adaptive grid layout
- Touch-friendly interaction elements
- Media queries support various screen sizes

### User Experience
- Intuitive navigation structure
- Clear visual feedback
- Friendly error messages
- Loading state indicators

### Code Quality
- Component-based architecture
- Service layer abstraction
- Type-safe code
- Adequate code comments

## Data Validation

### Client-Side Validation
- Product ID uniqueness validation
- Required field validation
- Numeric range validation (cannot be negative)
- Type validation (numeric fields do not accept alphabetic input)

### Form Validation
- Use Angular reactive forms
- Real-time validation feedback
- Custom validation rules
- Error message display

## Privacy and Security Considerations

### Data Security
- Client-side data storage (no persistence)
- Session-level data lifecycle
- Input validation and sanitization
- Uniqueness constraints

### User Protection
- Delete operation confirmation mechanism
- Friendly error handling
- No personal information collection
- Transparent data usage

## Assessment Requirements Fulfillment

### Page Quantity Requirements
- ✅ Home page: displays application purpose
- ✅ Inventory management page: add, edit, delete
- ✅ Search page: with filtering options
- ✅ Privacy & security page: security analysis
- ✅ Help page: FAQ and troubleshooting guide

### Functional Requirements
- ✅ Add, edit, update inventory item details
- ✅ Delete items after confirmation by item name
- ✅ Search functionality based on item name
- ✅ Display all items in the database
- ✅ Display all hot items in the database
- ✅ Dedicated page for privacy and security requirements

### Code Structure Requirements
- ✅ Modular code, clear comments, and reasonable structure
- ✅ At least one module and one component (actually multiple)
- ✅ User-friendly, responsive, functional
- ✅ All inputs validated

## Academic Integrity Statement

I confirm that I have used GenAI tools to complete this assessment. According to the assessment brief and parameters set by the unit assessor, I have used GitHub Copilot and ChatGPT for coding problem troubleshooting and code syntax checking.

## License
This project is for PROG2005 course assignment, for educational purposes only.

---

**Author**: Zihuo Huo (霍子衡)  
**Student ID**: 24832232  
**Date**: April 2026  
**Version**: 1.0.0