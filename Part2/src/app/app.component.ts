/**
 * PROG2005 移动系统编程
 * 第二部分：Angular库存管理系统
 * 主组件
 * 作者：霍子衡
 * 学号：24832232
 * GitHub用户名：Hzh050514
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '库存管理系统 - Angular版本';
  studentInfo = {
    name: '霍子衡',
    studentId: '24832232',
    github: 'Hzh050514'
  };

  constructor() {}

  ngOnInit(): void {
    console.log('PROG2005 移动系统编程 - Angular库存管理系统');
    console.log(`学生: ${this.studentInfo.name}`);
    console.log(`学号: ${this.studentInfo.studentId}`);
    console.log(`GitHub: ${this.studentInfo.github}`);
  }
}