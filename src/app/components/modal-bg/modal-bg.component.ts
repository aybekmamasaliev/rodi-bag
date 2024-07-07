import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../../services/global-variable.service';

@Component({
  selector: 'app-modal-bg',
  templateUrl: './modal-bg.component.html',
  styleUrl: './modal-bg.component.css'
})
export class ModalBgComponent implements OnInit{


  constructor(
    public globalVar:GlobalVariableService
  ){
    
  }

  ngOnInit(): void {
  }

}
