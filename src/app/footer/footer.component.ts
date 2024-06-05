import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  // Icons from https://icons8.com/icons/
  links = [
    {icon:"assets/images/github-icon-colored.png", href:"https://github.com/ELPhanNYC", title:"GitHub"}, 
    {icon:"assets/images/linkedin-icon-colored.png", href:"https://www.linkedin.com/in/ethanlphan/", title:"Linkedin"}
    ]
}
