import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  displayInfo: boolean = false;
  
  toggleInfo(){
    this.displayInfo = !this.displayInfo
  }
}
