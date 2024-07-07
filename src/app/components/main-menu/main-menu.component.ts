import { Component } from '@angular/core';
import { GlobalVariableService } from '../../services/global-variable.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

  currencyRotate=false
  langRotate=false

  constructor(

    public globalVar:GlobalVariableService){}

    showCurrency():void{
      this.currencyRotate = !this.currencyRotate;
    }

    showLang():void{
      this.langRotate = !this.langRotate
    }
}
