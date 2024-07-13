import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  constructor(){}

  tabControl : FormControl = new FormControl('description');

  tab_options = [
    { id: 4, name: "Description", value: "description" },
    { id: 5, name: "Review", value: "review" },
    { id: 6, name: "Tags", value: "tags" }
  ]

  ngOnInit(): void {
    
  }
  
}
