import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule }  from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
