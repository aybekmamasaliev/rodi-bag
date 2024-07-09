import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  constructor() { }

  isModalBg = new BehaviorSubject(false);

  isMenuOpen = new BehaviorSubject(false);

  isShoppingCard = new BehaviorSubject(false);

  isAside = new BehaviorSubject(false)



  showModalBg(): void {
    this.isModalBg.next(true);
  }

  hideModalBg(): void {
    this.isModalBg.next(false);
    this.isMenuOpen.next(false);
    this.isShoppingCard.next(false);
    this.isAside.next(false);
  }

  openMenu(): void {
    this.isMenuOpen.next(true)
  }

  closeMenu(): void {
    this.isMenuOpen.next(false)
  }


  openShoppingCard(): void {
    this.isShoppingCard.next(true)
  }

  closeShoppingCard(): void {
    this.isShoppingCard.next(false)
  }

  openAside():void{
    this.isAside.next(true)
  }

  closeAside():void{
    this.isAside.next(false)
  }

}
