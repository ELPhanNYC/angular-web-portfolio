import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>; // <-- Carousel is seen as an ID

  // index for slide
  slide: number = 0;

  // display first slide then waits to display the next
  ngAfterViewInit(): void {
    this.showSlides(this.slide);
    setInterval(() => {
      this.plusSlides(1);
    }, 5000);
  }
  plusSlides(n: number) {
    this.showSlides(this.slide + n);
  }

  currentSlide(n: number) {
    this.showSlides(n);
  }

  showSlides(n: number): void {
    const slides = this.carousel.nativeElement.getElementsByClassName("slide");
    if (n >= slides.length) {
      this.slide = 0;
    } else if (n < 0) {
      this.slide = slides.length - 1;
    } else {
      this.slide = n;
    }
    for (let i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }
    (slides[this.slide] as HTMLElement).style.display = "block";
  }
}
