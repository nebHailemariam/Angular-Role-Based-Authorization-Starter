import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  imageUrls: string[] = [
    '../../assets/images/banner-2.png',
    '../../assets/images/banner-1.png',
  ];
  image: string = this.imageUrls[0];
  imageUrlsIndex: number = 0;
  ngOnInit(): void {}

  nextImage(): void {
    this.imageUrlsIndex++;
    if (this.imageUrlsIndex == this.imageUrls.length) this.imageUrlsIndex = 0;
    this.image = this.imageUrls[this.imageUrlsIndex % this.imageUrls.length];
    console.log(this.imageUrlsIndex, this.image);
  }
  prevImage(): void {
    if (this.imageUrlsIndex == 0) this.imageUrlsIndex = this.imageUrls.length;
    this.imageUrlsIndex--;
    this.image = this.imageUrls[this.imageUrlsIndex % this.imageUrls.length];
    console.log(this.imageUrlsIndex, this.image);
  }
}
