import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductCategoryPageComponent } from './pages/product-category-page/product-category-page.component';

const routes: Routes = [
  {path:"" , component : MainPageComponent},
  {path:"category", component : ProductCategoryPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
