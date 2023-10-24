import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(){

  }

  links = [{icon:"assets/images/icons8-github-50.png", href:"https://github.com/ELPhanNYC", title:"GitHub"}, 
          {icon:"assets/images/icons8-linkedin-50.png", href:"https://www.linkedin.com/in/ethanlphan/", title:"Linkedin"}, 
          {icon:"assets/images/icons8-resume-30.png", href:"assets/Ethan Phan Resume (Summer 2023 Edit).pdf", title:"Resume"}];

}
