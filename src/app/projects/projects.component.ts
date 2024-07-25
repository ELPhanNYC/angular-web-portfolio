import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {title:"hammyhuddle", detail1:"july 2024 - present | angular, typescript, scss, express.js, mongodb", detail2:"crafted a hamster focused social media platform leveraging material ui and angular to build a responsive front-end paired with an express.js and mongodb back-end to handle authentication and api endpoints."},
    {title:"pomopengy", detail1:"january 2024 - present | angular, typescript, scss, express.js, mongodb", detail2:"developed a productivity app with angular for the front-end and express.js for the back-end, incorporating achievements to incentivize task completion."},
    {title:"schedule sync", detail1:"january 2024 - april 2024 | react, tailwind css, php, mysql", detail2:"constructed a business scheduling and organization web app with react on an apache server, using a php back-end with a mysql database, in a team of 5 using scrum and tested for performance with over 100 concurrent users."},
    {title:"tcp chat application", detail1:"february 2024 - march 2024 | c#", detail2:"engineered a sophisticated chat application based on the server-client model using tcp sockets. allowed for additional commands by leveraging the use of non-blocking i/o."},
    {title:"pengy rl", detail1:"november 2023 | python", detail2:"crafted a reinforcement learning framework using sarsa, q-learning, and double q-learning algorithms for environmental navigation, optimized with hyper-parameter tuning, and visualized results using pandas, numpy, and matplotlib."},
    {title:"rate my class", detail1:" october 2023 - november 2023 | html, css, javascript, python, flask, docker, mongodb", detail2:"spearheaded a web application that enables students at the university at buffalo to view and compose ratings and feedback for any class, addressing the lack of publicly available course evaluations."},
    {title:"dynamic pool allocator", detail1:"november 2022 | c", detail2:"implemented a multi-pool memory allocator that manages a system heap space, enabling the efficient execution of single-threaded unix commands."},
    {title:"pos system", detail1:"february 2021 | scala", detail2:"designed a point-of-sale system using object-oriented programming to switch states and incorporate different functionalities, utilizing polymorphism and inheritance to manage the user's cart and item information."},
    {title:"vaccination data web application", detail1:"december 2021 | python, html, javascript, bottle web framework", detail2:"assembled a web application that fetches cdc data and neatly displays the data on a webpage using plot.ly graphs and charts. leveraged a bottle web server to fetch the necessary data for the web application."},
  ]
}
