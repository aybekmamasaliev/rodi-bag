import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit {

  @Input() control: any

  @Input() tab_options : any

  @Input() incoming_class: any;

  constructor() { }

  ngOnInit(): void {

  }
}
