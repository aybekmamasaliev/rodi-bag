import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../../services/global-variable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isSearchBar:boolean = true


  constructor(private globalVar: GlobalVariableService){
  }

  ngOnInit(): void {
    
  }

  showSearchInput():void{
    this.isSearchBar = !this.isSearchBar
  }

  showMenu():void{
    this.globalVar.showModalBg()
  }
}
