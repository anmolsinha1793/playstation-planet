import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SlickCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('slickModal') slickModal!: ElementRef | any;
  title = 'playstation-planet';
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
