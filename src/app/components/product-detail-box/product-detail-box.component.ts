import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail-box',
  templateUrl: './product-detail-box.component.html',
  styleUrl: './product-detail-box.component.css'
})
export class ProductDetailBoxComponent implements OnInit {

  slides = ['assets/media/19-6-550x800.jpg',
    'assets/media/19-4-550x800.jpg',
    'assets/media/19-3-550x800.jpg',
    'assets/media/19-2-550x800.jpg',
    'assets/media/19-1-550x800.jpg',
  ];

  currentIndex = 0;

  get offset(): number {
    return -this.currentIndex * 100;
  }


  constructor() { }

  ngOnInit(): void {

  }

  nextSlide():void{
    if(this.currentIndex < this.slides.length - 1){
      this.currentIndex ++
    }
  }

  prevSlide():void{
    if(this.currentIndex > 0){
      this.currentIndex --
    }
  }

  openImage(index:number):void{
    this.currentIndex = index
  }
}
