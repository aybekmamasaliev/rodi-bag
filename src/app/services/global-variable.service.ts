import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  constructor() { }

  isModalBg = new BehaviorSubject(false);

  showModalBg(): void {
    this.isModalBg.next(true);
  }

  hideModalBg(): void {
    this.isModalBg.next(false);
  }
}
