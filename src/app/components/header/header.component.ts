import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isSearchBar:boolean = true


  constructor(){
  }

  ngOnInit(): void {
    
  }

  showSearchInput(){
    this.isSearchBar = !this.isSearchBar
  }
}
