import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../../services/global-variable.service';

@Component({
  selector: 'app-aside-caterories',
  templateUrl: './aside-caterories.component.html',
  styleUrl: './aside-caterories.component.css'
})
export class AsideCateroriesComponent implements OnInit {

  constructor(public globalVar : GlobalVariableService){}

  ngOnInit(): void {
    
  }

  
}
