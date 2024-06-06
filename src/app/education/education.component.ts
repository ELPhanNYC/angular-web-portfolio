import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  education = [
    {
      title:"university at buffalo",
      detail1:"b.s. in computer science | anticipated graduation date: fall 2024",
      detail2:"gpa: 4.000 | honors: dean's list (x6), pride of new york scholarship"
    }
]

}
