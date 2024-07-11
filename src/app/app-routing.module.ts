import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductCategoryPageComponent } from './pages/product-category-page/product-category-page.component';
import { SpecificProductPageComponent } from './pages/specific-product-page/specific-product-page.component';

const routes: Routes = [
  {path:"" , component : MainPageComponent},
  {path:"category", component : ProductCategoryPageComponent},
  {path:"product", component : SpecificProductPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
