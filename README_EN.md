# PROG2005 Mobile Systems Programming - Assessment 2

## Project Information
- **Student Name**: Zihuo Huo (霍子衡)
- **Student ID**: 24832232
- **GitHub Username**: Hzh050514
- **Course**: PROG2005 Mobile Systems Programming
- **Assessment**: 2 - Inventory Management System

## Project Overview
This project is a complete inventory management system divided into two parts:
1. **Part 1**: Basic TypeScript-based inventory management system
2. **Part 2**: Multi-page Angular-based inventory management application

Both parts implement the same core functionality but use different technology stacks, demonstrating the evolution from basic TypeScript to modern frontend frameworks.

## Project Structure

```
PROG2005-A2-Assessment/
├── Part1/                    # Part 1: Basic TypeScript Application
│   ├── index.html           # Main HTML file
│   ├── main.ts             # TypeScript main application
│   ├── types.ts            # TypeScript type definitions
│   ├── styles.css          # CSS styles file
│   ├── tsconfig.json       # TypeScript configuration
│   └── README_EN.md        # Part 1 documentation (English)
├── Part2/                    # Part 2: Angular Application
│   ├── angular.json        # Angular project configuration
│   ├── package.json        # Dependency management
│   ├── tsconfig.json       # TypeScript configuration
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/ # Reusable components
│   │   │   ├── pages/      # Page components
│   │   │   ├── services/   # Services
│   │   │   ├── models/     # Data models
│   │   │   ├── app.module.ts
│   │   │   └── app.component.*
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.scss
│   └── README_EN.md        # Part 2 documentation (English)
├── images/                  # Project image resources
├── .gitignore              # Git ignore file
├── README_EN.md            # This document (English)
├── README.md               # Chinese documentation
├── GenAI报告.md            # Chinese GenAI report
└── GenAI_Report_EN.md      # English GenAI report
```

## Features

### Core Features
- ✅ Add, edit, delete inventory products
- ✅ Search products by name
- ✅ Display all products and hot products
- ✅ Complete data validation
- ✅ Responsive design (mobile device support)

### Part 1 Features (TypeScript)
- Pure TypeScript implementation, no framework dependencies
- Strongly-typed data models
- Client-side data storage (session level)
- Interactive message prompts
- Modular code structure

### Part 2 Features (Angular)
- Multi-page application (minimum 5 pages)
- Component-based architecture
- Reactive forms and validation
- Routing navigation
- Service layer abstraction
- Modern UI/UX design

## Running Instructions

### Part 1 Execution
1. Navigate to Part1 directory
2. Use a local server (e.g., Python):
   ```bash
   python -m http.server 8000
   ```
3. Access `http://localhost:8000/Part1/`

### Part 2 Execution
1. Navigate to Part2 directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm start
   ```
4. Access `http://localhost:4200/`

## Technical Requirements

### Part 1
- TypeScript 5.2+
- Modern browser (ES6+ support)
- Local HTTP server

### Part 2
- Node.js 18+
- Angular 17+
- TypeScript 5.2+

## Data Model

### Product Fields
1. **Product ID**: Unique identifier (only allowed to be entered and saved once)
2. **Product Name**: Product name
3. **Category**: Electronics, Furniture, Clothing, Tools, Other
4. **Quantity**: Stock quantity (cannot be negative)
5. **Price**: Product price (cannot be negative)
6. **Supplier Name**: Supplier information
7. **Stock Status**: In Stock, Out of Stock
8. **Hot Status**: Yes/No
9. **Product Notes**: Optional notes

## Design Principles

### User-Centered Design
- Intuitive operation flow
- Clear visual feedback
- Error-tolerant design
- Mobile-first responsive design

### Code Quality
- Clear type definitions
- Modular code structure
- Adequate code comments
- Error handling mechanisms

### Security
- Client-side data validation
- Uniqueness constraints
- User confirmation mechanisms
- Privacy protection design

## Assessment Requirements Fulfillment

### Part 1 Requirements
- ✅ Develop basic inventory management system using TypeScript
- ✅ Run continuously while browser is open
- ✅ Implement add, edit, delete, search functionality
- ✅ Display all products and hot products
- ✅ Responsive design
- ✅ Interactive elements (using innerHTML)
- ✅ CSS styles to enhance user experience
- ✅ Structured data model
- ✅ TypeScript type declarations
- ✅ Clear code structure and adequate comments
- ✅ Data validation functionality

### Part 2 Requirements
- ✅ Multi-page Angular application (5 pages)
- ✅ Home page: displays application purpose
- ✅ Inventory management page: add, edit, delete
- ✅ Search page: with filtering options
- ✅ Privacy and security analysis page
- ✅ Help page: FAQ and troubleshooting guide
- ✅ At least one module and one component (actually multiple)
- ✅ User-friendly, responsive, functional
- ✅ All inputs validated
- ✅ Modular code, clear comments

## GitHub Repository
- **GitHub Username**: Hzh050514
- **Repository Requirements**: Contains complete project files and documentation
- **Commit History**: Shows work progress
- **Link Includes**: GitHub account and accessibility

## Academic Integrity Statement

I confirm that I have used GenAI tools to complete this assessment. According to the assessment brief and parameters set by the unit assessor, I have used GitHub Copilot and ChatGPT for coding problem troubleshooting and code syntax checking.

## License
This project is for PROG2005 course assignment, for educational purposes only.

---

**Author**: Zihuo Huo (霍子衡)  
**Student ID**: 24832232  
**Date**: April 2026  
**Version**: 1.0.0