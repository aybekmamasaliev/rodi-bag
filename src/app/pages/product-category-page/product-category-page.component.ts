import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../../services/global-variable.service';

@Component({
  selector: 'app-product-category-page',
  templateUrl: './product-category-page.component.html',
  styleUrl: './product-category-page.component.css'
})
export class ProductCategoryPageComponent implements OnInit{

    constructor(public globalVar: GlobalVariableService){}

    ngOnInit(): void {
      
    }

    openAsideCategory(){
      this.globalVar.openAside();
      this.globalVar.showModalBg();
    }
    
}
