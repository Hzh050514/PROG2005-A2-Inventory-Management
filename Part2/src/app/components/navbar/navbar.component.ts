/**
 * PROG2005 移动系统编程
 * 第二部分：Angular库存管理系统
 * 导航栏组件
 * 作者：霍子衡
 * 学号：24832232
 * GitHub用户名：Hzh050514
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  
  // Navigation menu items
  navItems = [
    { path: '/home', icon: 'fas fa-home', label: 'Home', description: 'System Overview' },
    { path: '/inventory', icon: 'fas fa-boxes', label: 'Inventory Management', description: 'Add/Edit/Delete Products' },
    { path: '/search', icon: 'fas fa-search', label: 'Search Products', description: 'Advanced Search & Filtering' },
    { path: '/privacy-security', icon: 'fas fa-shield-alt', label: 'Privacy & Security', description: 'Security Analysis & Requirements' },
    { path: '/help', icon: 'fas fa-question-circle', label: 'Help', description: 'FAQ & Guides' }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}