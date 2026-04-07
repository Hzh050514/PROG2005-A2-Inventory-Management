/**
 * PROG2005 移动系统编程
 * 第二部分：Angular库存管理系统
 * 帮助页面组件
 * 作者：霍子衡
 * 学号：24832232
 * GitHub用户名：Hzh050514
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss']
})
export class HelpPageComponent {
  // Frequently Asked Questions
  faqs = [
    {
      question: 'How to add a new product?',
      answer: 'Fill out the product form on the "Inventory Management" page, ensure all required fields are completed, then click the "Add Product" button.',
      icon: 'fas fa-plus-circle'
    },
    {
      question: 'How to edit an existing product?',
      answer: 'Find the product you want to edit in the product list, click the "Edit" button, modify the information, then click "Save Changes".',
      icon: 'fas fa-edit'
    },
    {
      question: 'How to delete a product?',
      answer: 'Find the product you want to delete in the product list, click the "Delete" button, the system will ask you to confirm the operation.',
      icon: 'fas fa-trash-alt'
    },
    {
      question: 'How to search for products?',
      answer: 'On the "Search Products" page, you can search by name or use advanced filtering options.',
      icon: 'fas fa-search'
    },
    {
      question: 'Will data be saved permanently?',
      answer: 'No. All data is only saved in browser memory, and will be cleared after closing the browser tab.',
      icon: 'fas fa-exclamation-triangle'
    },
    {
      question: 'Does the system support mobile devices?',
      answer: 'Yes, the system uses responsive design and perfectly adapts to various mobile devices and screen sizes.',
      icon: 'fas fa-mobile-alt'
    }
  ];

  // Troubleshooting Guide
  troubleshooting = [
    {
      issue: 'Cannot add product',
      cause: 'Possible reasons include: product ID already exists, required fields not filled, invalid values entered in numeric fields.',
      solution: 'Check if product ID is unique, ensure all required fields are filled, only enter numbers in numeric fields.'
    },
    {
      issue: 'Failed to edit product',
      cause: 'May have attempted to modify product ID, or form data is invalid.',
      solution: 'Product ID cannot be modified, please check if other field inputs are valid.'
    },
    {
      issue: 'Cannot find products in search',
      cause: 'Search criteria may be too strict, or product name entered incorrectly.',
      solution: 'Try using broader search criteria, or check if the product name is correct.'
    },
    {
      issue: 'Page display abnormal',
      cause: 'May be browser cache issue or network connection problem.',
      solution: 'Try refreshing the page, clearing browser cache, or checking network connection.'
    },
    {
      issue: 'Form validation errors',
      cause: 'Entered data does not comply with validation rules.',
      solution: 'Correct inputs according to error prompts, ensure numbers are not negative, required fields are not empty.'
    }
  ];

  // Usage Tips
  tips = [
    'Use product ID to quickly identify products, IDs are unique',
    'Utilize advanced filtering to quickly find products meeting specific criteria',
    'Regularly check inventory status and replenish out-of-stock products promptly',
    'Mark hot products for quick identification',
    'Use notes field to add additional product information',
    'Use landscape mode on mobile devices for better table view'
  ];

  // Contact Information
  contactInfo = {
    student: 'Zihuo Huo',
    studentId: '24832232',
    course: 'PROG2005 Mobile Systems Programming',
    assignment: 'Assessment 2 - Part 2',
    github: 'Hzh050514',
    note: 'This is an educational project, for course assessment purposes only.'
  };
}