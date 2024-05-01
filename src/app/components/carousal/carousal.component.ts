import { Component, ElementRef, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousal',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './carousal.component.html',
  styleUrl: './carousal.component.scss'
})
export class CarousalComponent {
  @ViewChild('slickModal') slickModal!: ElementRef | any;
  slides = [
    {img: './assets/images/fc24.jpg'},
    {img: './assets/images/gta-5.jpeg'},
    {img: './assets/images/cod-ghost.jpeg'},
    {img: './assets/images/ghost-of-tsushima.jpeg'},
    {img: './assets/images/mortal-kombat.jpg'},
    {img: './assets/images/uncharted.jpeg'},
    {img: './assets/images/wwe.jpeg'},
    {img: './assets/images/tomb-raider.jpeg'},
    {img: './assets/images/tekken.jpeg'},
    {img: './assets/images/batman-arkham.jpeg'},
    {img: './assets/images/breakpoint.jpeg'}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  ngAfterViewInit() {
    this.slickModal.slickPlay();
  }
}
