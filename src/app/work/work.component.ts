import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  positions = [
    {title:"research assistant @ northeastern university", detail1:"summer 2024 - present | remote | python, selenium", detail2:"configured a python and selenium-based system to scrape 56 facebook pages, storing data in mysql for nlp analysis of misinformation causes.", links:""},
    {title:"undergraduate teaching assistant @ university at buffalo", detail1:"summer 2022 - present | buffalo, ny | data structures, discrete mathematics, seminar", detail2:"assisted three professors in teaching 400+ students in various subject areas, led recitation sessions, assessed assignments, and collaborated on class improvements.", links:""},
    {title:"software engineering intern @ m&t bank", detail1:"summer 2023 | buffalo, ny | angular, typescript, scss, c#, .net, docker, gitlab, ci/cd pipelines", detail2:"automated docker use in gitlab ci/cd pipelines, improving .net web app performance, saving $1 million annually, and earning recognition for the project's impact.", links:"assets/MTB Dockerization.pdf"},
    {title:"front end developer @ bellows garden inc", detail1:"summer 2022 | southampton, ny | html, css, javascript, google app scripts", detail2:"created the company's inaugural website, employing html, css, and javascript for a refined online portfolio showcasing the company's work to clients.", links:"https://bellowsgardens.com/"}
  ]
}
