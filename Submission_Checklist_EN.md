# PROG2005 Assessment 2 - Submission Checklist

**Student**: Zihuo Huo (霍子衡)  
**Student ID**: 24832232  
**GitHub**: Hzh050514  
**Due Date**: March 30, 2026 23:59 AEST/AEDT  

---

## 📁 **PART 1: Basic TypeScript Application**

### ✅ **Technical Requirements**
- [ ] TypeScript application for inventory management
- [ ] Runs continuously while browser is open
- [ ] No data persistence required after browser closure
- [ ] Can start from hardcoded data or empty structure
- [ ] Proper use of TypeScript with correct parameter/return value types

### ✅ **Data Fields**
- [ ] Product ID (unique identifier, only allowed once per product)
- [ ] Product Name
- [ ] Category (Electronics, Furniture, Clothing, Tools, Other)
- [ ] Quantity
- [ ] Price
- [ ] Supplier Name
- [ ] Stock Status (In Stock, Out of Stock)
- [ ] Hot Status (Yes/No)
- [ ] Product Notes (optional, all other fields mandatory)

### ✅ **Features**
- [ ] Add, edit and update item details (update by item name)
- [ ] Delete items after confirmation by item name
- [ ] Search functionality based on item name
- [ ] Display all items in database
- [ ] Display all hot items in database
- [ ] Responsive design for narrow and wide mobile screens
- [ ] Interactive elements (using innerHTML, not alert())
- [ ] CSS styling to enhance user experience

### ✅ **Requirements**
- [ ] Structured data model (TypeScript object/interface array)
- [ ] Focus on TypeScript functionality, minimize HTML form elements
- [ ] Parameters and return values use TypeScript type declarations
- [ ] Clear, clean code with comments
- [ ] Submitted in separate folder to avoid penalties
- [ ] Data validation when performing operations on record data

### ✅ **File Structure Check**
```
Part1/
├── index.html           # Main HTML file
├── main.ts             # TypeScript main application
├── types.ts            # TypeScript type definitions
├── styles.css          # CSS styles
├── tsconfig.json       # TypeScript configuration
└── README_EN.md        # English documentation
```

### ✅ **Code Quality Check**
- [ ] All source files have header comments with author and module
- [ ] Code structure is clear with adequate comments
- [ ] TypeScript type safety maintained
- [ ] No use of `any` type unless absolutely necessary
- [ ] Error handling implemented

---

## 📁 **PART 2: Angular Application**

### ✅ **Technical Requirements**
- [ ] Extension or refactoring of TypeScript app to multi-page Angular app
- [ ] Efficient inventory management functionality

### ✅ **Page Requirements (Minimum 5 Pages)**
- [ ] Home page displaying application purpose
- [ ] Page for adding, editing, and deleting inventory items
- [ ] Item search page with filtering options
- [ ] Privacy and security analysis page explaining key security considerations
- [ ] Help page with FAQs and troubleshooting guide

### ✅ **Features**
- [ ] Add, edit and update inventory item details (update by item name)
- [ ] Delete items after confirmation by item name
- [ ] Search functionality based on item name
- [ ] Display all items in database
- [ ] Display all hot items in database
- [ ] Dedicated page for presenting privacy and security requirements

### ✅ **Code Structure Requirements**
- [ ] Code is modular, clearly commented, and reasonably structured
- [ ] Submitted separately to ensure clarity and proper structure

### ✅ **Requirements**
- [ ] Angular app must contain at least one module and one component
- [ ] Create additional components to achieve required functionality
- [ ] App must be user-friendly, responsive, functional
- [ ] All inputs validated (e.g., numeric fields don't accept letters)

### ✅ **File Structure Check**
```
Part2/
├── angular.json          # Angular project configuration
├── package.json         # Dependency management
├── tsconfig.json       # TypeScript configuration
├── src/
│   ├── app/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components (5+ pages)
│   │   ├── services/    # Services
│   │   ├── models/      # Data models
│   │   ├── app.module.ts
│   │   └── app.component.*
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
└── README_EN.md        # English documentation
```

### ✅ **Angular Specific Checks**
- [ ] At least 5 page components created
- [ ] Routing configured for all pages
- [ ] Services for data management
- [ ] Reactive forms with validation
- [ ] Component communication established
- [ ] Responsive CSS/SCSS implemented

---

## 🔗 **GitHub Repository Requirements**

### ✅ **Repository Management**
- [ ] GitHub repository created for both project modules
- [ ] Complete project files and documentation stored
- [ ] Regular code commits to demonstrate work progress
- [ ] Detailed descriptions of code changes in each commit
- [ ] Failure to show work progress results in automatic failure

### ✅ **Submission Link**
- [ ] GitHub link included in submission
- [ ] GitHub account accessible
- [ ] Repository protected from other students viewing
- [ ] Assessor can be invited as collaborator if needed

### ✅ **Commit History Check**
- [ ] Initial commit with project structure
- [ ] Regular commits showing development progress
- [ ] Final commit with completed application
- [ ] Clear commit messages describing changes

---

## 📄 **GenAI Report (Optional)**

### ✅ **If GenAI Used**
- [ ] 2-3 paragraph Word document included
- [ ] Describes how GenAI was used in assessment
- [ ] Demonstrates compliance with permitted use guidelines
- [ ] Discusses how GenAI helped solve problems or improve app
- [ ] GenAI_Report_EN.md file included

### ✅ **GenAI Usage Guidelines Compliance**
**Permitted Uses (Level 2):**
- [ ] Problem formulation research
- [ ] Brainstorming ideas or concepts
- [ ] Checking grammar, polishing, editing tone or clarity
- [ ] Troubleshooting coding problems

**Prohibited Uses:**
- [ ] NOT used to generate any part of report
- [ ] NOT used to generate assessment code
- [ ] NOT used to generate any part of assessment content

---

## 📋 **Submission Materials**

### ✅ **Required Files**
- [ ] ZIP file containing both Part 1 and Part 2
- [ ] All source code files
- [ ] All documentation files
- [ ] GenAI report if applicable

### ✅ **File Organization**
```
PROG2005-A2-Assessment.zip/
├── Part1/
│   ├── index.html
│   ├── main.ts
│   ├── types.ts
│   ├── styles.css
│   ├── tsconfig.json
│   └── README_EN.md
├── Part2/
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/ (full directory)
│   └── README_EN.md
├── GenAI_Report_EN.md (if applicable)
├── Verification_Guide_EN.md
└── Submission_Checklist_EN.md
```

### ✅ **Submission Platform**
- [ ] ZIP file uploaded to designated submission link on unit site
- [ ] If file size exceeds limit, email ZIP with OneDrive link
- [ ] Ensure clear and well-commented source code structure

---

## 🏆 **Assessment Criteria Alignment**

### **High Distinction (85-100%) Requirements**
- [ ] Exceptional understanding of mobile architecture demonstrated
- [ ] Advanced components integrated efficiently
- [ ] Innovative use of Angular and TypeScript
- [ ] All critical functions and requirements implemented without defects
- [ ] Code progress clearly demonstrated via GitHub
- [ ] Excellent user feedback mechanisms
- [ ] Comprehensive privacy and security analysis
- [ ] Clear and well-structured reflection on GenAI use

### **Distinction (75-84%) Requirements**
- [ ] Deep insights into mobile architecture
- [ ] Relevant connections between architectural choices
- [ ] Effective use of Angular framework and TypeScript
- [ ] Most core functions implemented correctly with minor errors
- [ ] Code progress clearly shown on GitHub
- [ ] Good user feedback mechanisms
- [ ] Effective analysis of privacy and security requirements
- [ ] Clear reflection on GenAI use

### **Credit (65-74%) Requirements**
- [ ] Solid understanding of mobile architecture
- [ ] Clear correlation between structural components
- [ ] Basic functional Angular and TypeScript application
- [ ] Key functions operating correctly with few missing functions
- [ ] Code progress shown via GitHub
- [ ] Basic user feedback mechanisms
- [ ] Basic privacy and security analysis
- [ ] Adequate explanation of GenAI use

---

## 📝 **Academic Integrity Requirements**

### ✅ **GenAI Usage Declaration**
**If GenAI used:**
[ ] I confirm that I have used GenAI tools to complete this assessment. According to the assessment brief and parameters set by the unit assessor, I have used <GenAI tool(s)> to achieve <specific purpose(s)>.

**If GenAI NOT used:**
[ ] I confirm that I have not intentionally used GenAI to complete this assessment.

### ✅ **Academic Integrity Statement**
[ ] I have read and understood Southern Cross University's (SCU) academic integrity policy and citation standards.
[ ] I understand the consequences of academic misconduct.
[ ] I confirm this submission is original work with proper citations and has not been submitted before.
[ ] I authorize reproduction for authentication purposes.
[ ] I understand the consequences of false declarations.
[ ] I have complied with generative AI requirements.

---

## 🚀 **Final Steps Before Submission**

### ✅ **Testing Checklist**
- [ ] Part 1 runs without errors in browser
- [ ] Part 2 builds successfully: `npm run build`
- [ ] Part 2 runs locally: `npm start`
- [ ] All 5 Angular pages accessible and functional
- [ ] Responsive design works on mobile and desktop
- [ ] All forms validate correctly
- [ ] Search functionality works
- [ ] Add/edit/delete operations work

### ✅ **Documentation Checklist**
- [ ] All README files complete
- [ ] Code comments adequate
- [ ] Commit history demonstrates progress
- [ ] GenAI report complete (if applicable)
- [ ] All required declarations included

### ✅ **GitHub Final Check**
- [ ] All files pushed to repository
- [ ] Repository link working
- [ ] Commit history complete
- [ ] Repository accessible to assessor

### ✅ **ZIP File Creation**
- [ ] Include all required files
- [ ] Maintain folder structure
- [ ] File size within limits
- [ ] Test ZIP extraction

---

**Submission Deadline**: March 30, 2026 23:59 AEST/AEDT  
**Late Submission**: Penalties apply for late submissions without approved extension  
**Feedback**: Results and feedback posted within approximately 1 week after submission  

---

**Student Signature**: ___________________________  
**Date**: ___________________________  
**Submission Confirmed**: [ ]