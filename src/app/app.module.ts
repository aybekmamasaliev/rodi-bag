import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { WhyComponent } from './components/why/why.component';
import { SpecificProductComponent } from './components/specific-product/specific-product.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ModalBgComponent } from './components/modal-bg/modal-bg.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SpecificProductPageComponent } from './pages/specific-product-page/specific-product-page.component';
import { ProductCategoryPageComponent } from './pages/product-category-page/product-category-page.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { AsideCateroriesComponent } from './components/aside-caterories/aside-caterories.component';
import { ProductDetailBoxComponent } from './components/product-detail-box/product-detail-box.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    FooterComponent,
    ContactUsComponent,
    WhyComponent,
    SpecificProductComponent,
    BestSellersComponent,
    ProductCardComponent,
    ModalBgComponent,
    MainMenuComponent,
    SpecificProductPageComponent,
    ProductCategoryPageComponent,
    ShoppingCardComponent,
    BreadcrumbsComponent,
    AsideCateroriesComponent,
    ProductDetailBoxComponent,
    TabsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
