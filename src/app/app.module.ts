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
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
