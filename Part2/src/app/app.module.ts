/**
 * PROG2005 移动系统编程
 * 第二部分：Angular库存管理系统
 * 主模块
 * 作者：霍子衡
 * 学号：24832232
 * GitHub用户名：Hzh050514
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PrivacySecurityPageComponent } from './pages/privacy-security-page/privacy-security-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';

// 路由配置
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'inventory', component: InventoryPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'privacy-security', component: PrivacySecurityPageComponent },
  { path: 'help', component: HelpPageComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    InventoryPageComponent,
    SearchPageComponent,
    PrivacySecurityPageComponent,
    HelpPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }