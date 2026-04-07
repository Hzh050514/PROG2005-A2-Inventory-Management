/**
 * PROG2005 移动系统编程
 * 第二部分：Angular库存管理系统
 * 隐私与安全页面组件
 * 作者：霍子衡
 * 学号：24832232
 * GitHub用户名：Hzh050514
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-security-page',
  templateUrl: './privacy-security-page.component.html',
  styleUrls: ['./privacy-security-page.component.scss']
})
export class PrivacySecurityPageComponent {
  // Privacy and Security Considerations
  securityConsiderations = [
    {
      title: 'Client-Side Data Storage',
      description: 'All data stored in browser memory, not persisted to server or local storage, ensuring automatic data clearance after session ends.',
      icon: 'fas fa-database',
      color: '#3498db'
    },
    {
      title: 'Data Validation',
      description: 'All user input undergoes strict validation to prevent injection attacks and invalid data. Numeric fields do not accept alphabetic input.',
      icon: 'fas fa-shield-alt',
      color: '#2ecc71'
    },
    {
      title: 'Uniqueness Validation',
      description: 'Product IDs have uniqueness validation to prevent duplicate data and inconsistent states.',
      icon: 'fas fa-fingerprint',
      color: '#e74c3c'
    },
    {
      title: 'User Confirmation Mechanism',
      description: 'Delete operations require explicit user confirmation to prevent accidental data loss.',
      icon: 'fas fa-check-circle',
      color: '#f39c12'
    },
    {
      title: 'Responsive Security Design',
      description: 'Security interaction design for mobile devices to prevent touch misoperations.',
      icon: 'fas fa-mobile-alt',
      color: '#9b59b6'
    },
    {
      title: 'Code Security',
      description: 'Using TypeScript strong type checking to avoid runtime errors and security vulnerabilities.',
      icon: 'fas fa-code',
      color: '#1abc9c'
    }
  ];

  // Mobile Application Specific Security Requirements
  mobileSecurityRequirements = [
    {
      title: 'Session Management',
      requirement: 'Applications should manage user sessions to ensure sensitive data is cleared at appropriate times.',
      implementation: 'This application uses browser session storage, data automatically clears after closing the tab.'
    },
    {
      title: 'Input Validation',
      requirement: 'All user input must be validated to prevent malicious data injection.',
      implementation: 'Using Angular form validation and TypeScript type checking.'
    },
    {
      title: 'Data Integrity',
      requirement: 'Ensure data remains intact and consistent during transmission and processing.',
      implementation: 'Client-side data model validation and state management.'
    },
    {
      title: 'Privacy Protection',
      requirement: 'Protect user privacy by not collecting unnecessary information.',
      implementation: 'Only storing necessary inventory data, no personal information involved.'
    },
    {
      title: 'Error Handling',
      requirement: 'Handle errors securely without leaking sensitive information.',
      implementation: 'Friendly error messages without exposing technical details.'
    }
  ];

  // Best Practices
  bestPractices = [
    'Always validate user input, especially numeric and string inputs',
    'Use strongly-typed languages (TypeScript) to prevent type-related security vulnerabilities',
    'Implement appropriate error handling mechanisms without exposing sensitive information to users',
    'Always require user confirmation for delete operations',
    'Keep dependencies updated to avoid using libraries with known security vulnerabilities',
    'Implement the principle of least privilege, only request necessary permissions',
    'Regularly conduct security audits and code reviews'
  ];
}