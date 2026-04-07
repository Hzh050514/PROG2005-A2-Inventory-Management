# PROG2005 Assessment 2 - Verification Guide
## Inventory Management System Testing and Validation Guide

**Student**: Zihuo Huo (霍子衡)  
**Student ID**: 24832232  
**GitHub**: Hzh050514  

---

## 📋 Verification Checklist

### ✅ **1. Functional Verification Checklist**

#### **Part 1 (TypeScript)**
- [ ] **Basic Functions**
  - Add, edit, delete inventory items
  - Search by product name
  - Display all items
  - Display hot items
- [ ] **Type Safety**
  - TypeScript interface definitions correct
  - Parameter and return value types correct
  - Data validation functions complete
- [ ] **User Experience**
  - Responsive design (mobile and desktop)
  - Use innerHTML instead of alert()
  - Aesthetic CSS styling

#### **Part 2 (Angular)**
- [ ] **Page Structure (Minimum 5 Pages)**
  - Home page (application purpose description)
  - Inventory management page (add, edit, delete)
  - Search page (with filtering options)
  - Privacy and security analysis page
  - Help page (FAQ and troubleshooting)
- [ ] **Technical Features**
  - Angular components modular
  - Services properly injected
  - Routing configuration complete
  - Form validation complete

### ✅ **2. Technical Verification Steps**

#### **Step 1: Build Verification**
```bash
# In Part2 directory
cd Part2
npm run build
```
**Expected Result**: Successful compilation, no errors

#### **Step 2: Development Server Verification**
```bash
# In Part2 directory
npm start
```
**Expected Result**:
- Service starts at http://localhost:4200
- All pages accessible
- No JavaScript errors in console

#### **Step 3: GitHub Progress Verification**
Ensure your GitHub repository contains:
- Complete commit history
- Clear commit messages
- Chronological commits
- Clear project structure

### ✅ **3. Testing Each Page Functionality**

#### **Home Page (/home)**
- [ ] Clear application description
- [ ] Navigation menu works properly
- [ ] Good responsive design

#### **Inventory Management Page (/inventory)**
- [ ] Add new product functionality
- [ ] Edit existing product functionality
- [ ] Delete product (with confirmation)
- [ ] Display all products list
- [ ] Complete form validation

#### **Search Page (/search)**
- [ ] Search by name functionality
- [ ] Filter hot products
- [ ] Filter stock status
- [ ] Search results correctly displayed

#### **Privacy & Security Page (/privacy-security)**
- [ ] Complete security analysis content
- [ ] Clear privacy requirements explanation
- [ ] Correct use of professional terminology

#### **Help Page (/help)**
- [ ] Complete FAQ content
- [ ] Clear troubleshooting guide
- [ ] Contact information or resource links

### ✅ **4. Mobile Compatibility Testing**

#### **Responsive Design Check**
- [ ] Proper display on narrow screens (mobile devices)
- [ ] Proper display on wide screens (desktop)
- [ ] Navigation menu collapsible on small screens
- [ ] Form elements usable on small screens

#### **Touch Interaction Testing**
- [ ] Button size suitable for touch
- [ ] Form input fields easy to operate
- [ ] Normal scrolling behavior

### ✅ **5. Code Quality Inspection**

#### **TypeScript Code**
- [ ] Complete type definitions
- [ ] Correct interface usage
- [ ] No abuse of any type
- [ ] Clear code comments

#### **Angular Code**
- [ ] Component modularity
- [ ] Correct service injection
- [ ] Complete routing configuration
- [ ] Correct template syntax

### ✅ **6. Security and Privacy Verification**

#### **Frontend Security**
- [ ] Complete input validation
- [ ] Appropriate error handling
- [ ] No XSS vulnerabilities (using Angular data binding)
- [ ] Proper session data management

#### **Privacy Requirements**
- [ ] Complete privacy policy page content
- [ ] Compliance with mobile app privacy standards
- [ ] Clear data collection and usage explanation

### 🔧 **7. Troubleshooting Guide**

#### **Common Issues and Solutions**

**Issue 1: npm start fails**
- Check if node_modules is complete: `rm -rf node_modules && npm install`
- Check Angular CLI version: `ng version`
- Check TypeScript version: `tsc --version`

**Issue 2: Compilation errors**
- Check TypeScript type errors
- Check if import statements are correct
- Ensure all components are declared

**Issue 3: Pages not displaying**
- Check routing configuration
- Confirm components are correctly imported into modules
- Check browser console errors

**Issue 4: GitHub submission issues**
- Ensure all files are added to git
- Use clear commit messages
- Commit regularly to show work progress

### 📁 **8. Submission Preparation Checklist**

#### **File Structure Check**
```
Part1/
  ├── index.html
  ├── main.ts
  ├── types.ts
  ├── styles.css
  └── README_EN.md

Part2/
  ├── src/
  ├── angular.json
  ├── package.json
  ├── tsconfig.json
  └── README_EN.md
```

#### **Documentation Check**
- [ ] Complete code comments
- [ ] Clear commit history
- [ ] GenAI report (if used)
- [ ] Academic integrity statement

### 🎯 **Verification Results Record Table**

| Verification Item | Status | Notes |
|-------------------|--------|-------|
| Part1 TypeScript | ⬜ Not Verified | |
| Part2 Angular Build | ⬜ Not Verified | |
| 5 Page Functionality | ⬜ Not Verified | |
| Responsive Design | ⬜ Not Verified | |
| GitHub Commit History | ⬜ Not Verified | |
| Code Quality | ⬜ Not Verified | |

### 💡 **Recommended Operation Order**

1. **First verify Part1**: Open Part1 HTML file in browser for testing
2. **Verify Part2 build**: Run `npm run build` to check compilation errors
3. **Start development server**: Run `npm start` to test all pages
4. **Test mobile devices**: Use browser developer tools to simulate mobile devices
5. **Check GitHub**: Ensure all changes are committed with clear history
6. **Prepare submission package**: Package both parts as ZIP file

### 🔧 **PowerShell Execution Policy Issues**

If you encounter PowerShell execution policy issues preventing npm commands:
1. Open PowerShell as Administrator
2. Run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
3. Try `npm start` again

Alternatively, you can:
1. Open Command Prompt (cmd) instead of PowerShell
2. Navigate to Part2 directory
3. Run commands normally

### 📊 **Assessment Criteria Alignment**

#### **High Distinction (85-100%) Requirements**
- [ ] Exceptional understanding of mobile architecture demonstrated
- [ ] Advanced components integrated efficiently
- [ ] Innovative use of Angular and TypeScript
- [ ] All critical functions and requirements implemented
- [ ] Code progress clearly demonstrated via GitHub

#### **Distinction (75-84%) Requirements**
- [ ] Deep insights into mobile architecture
- [ ] Relevant connections between architectural choices
- [ ] Effective use of Angular framework and TypeScript
- [ ] Most core functions implemented correctly
- [ ] Code progress clearly shown on GitHub

#### **Credit (65-74%) Requirements**
- [ ] Solid understanding of mobile architecture
- [ ] Clear correlation between structural components
- [ ] Basic functional Angular and TypeScript application
- [ ] Key functions operating correctly with few missing functions

### 🚀 **Quick Start Commands**

#### For Part 1 Verification:
```bash
# Navigate to Part1
cd Part1

# Use Python server
python -m http.server 8000

# Access at: http://localhost:8000
```

#### For Part 2 Verification:
```bash
# Navigate to Part2
cd Part2

# Install dependencies (if not done)
npm install

# Build for verification
npm run build

# Start development server
npm start

# Access at: http://localhost:4200
```

### 📝 **Submission Checklist**

**Before submitting, ensure:**
- [ ] All source code files have header comments with author and module
- [ ] Code structure is clear with adequate comments
- [ ] Each module is in separate subdirectory (Part1, Part2)
- [ ] GitHub link is included and accessible
- [ ] ZIP file contains all required files
- [ ] GenAI report included (if applicable)
- [ ] Academic integrity statement included

---

**Last Updated**: April 7, 2026  
**Version**: 1.0.0  
**Status**: Ready for Verification