import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutCardComponent } from './about-card/about-card.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ItemBoxComponent } from './item-box/item-box.component';
import { SmoothScrollDirective } from './smooth-scroll.directive';
import { MenuComponent } from './menu/menu.component';
import { EducationComponent } from './education/education.component';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule }  from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ExperienceComponent,
    AboutCardComponent,
    SlideshowComponent,
    ItemBoxComponent,
    SmoothScrollDirective,
    MenuComponent,
    EducationComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SmoothScrollDirective]
})
export class AppModule { }
