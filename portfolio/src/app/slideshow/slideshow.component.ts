import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {
  constructor(){

  }

  imageSrc:string = '../../assets/images/headshot.jpeg';
  increment:number = 1;

  images = [{src:'../../assets/images/headshot.jpeg'}, {src:'../../assets/images/young_ethan.JPG'}];

  ngOnInit(){
    this.slideshow();
  }

  slideshow() {
    setInterval(() => {
      this.showNextImage();
    }, 3000); // Change the time interval (in milliseconds) to control the slide duration
  }

  showNextImage() {
    this.increment = (this.increment) % this.images.length;
    this.imageSrc = this.images[this.increment].src;
    this.increment += 1;
  }
}
