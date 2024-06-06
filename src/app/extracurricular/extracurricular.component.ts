import { Component } from '@angular/core';

@Component({
  selector: 'app-extracurricular',
  templateUrl: './extracurricular.component.html',
  styleUrls: ['./extracurricular.component.scss']
})
export class ExtracurricularComponent {
  extracurricular =[
    {title:"ub hacking", detail1:"lead full-stack developer | 2x prize winner", detail2:"created a finance management web application for college students and a productivity based discord bot.", links:"https://devpost.com/ELPhanNYC"},
    {title:"powerup tech community hackathon", detail1:"lead developer | prize winner", detail2:"created a proof of concept web application that allows a education non-profit to track the job application progress of their students. ", links:"https://devpost.com/ELPhanNYC"},
  ]
}
