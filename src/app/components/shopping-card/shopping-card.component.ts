import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../../services/global-variable.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.css'
})
export class ShoppingCardComponent implements OnInit{

  constructor(public globalVar:GlobalVariableService){}

  ngOnInit(): void {
    
  }

  closeShoppingCard():void{
    this.globalVar.closeShoppingCard();
    this.globalVar.hideModalBg();
  }

}
