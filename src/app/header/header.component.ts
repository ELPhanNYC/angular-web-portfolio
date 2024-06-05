import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navLinks = [
    { label: 'about me', routerLink: '/' },
    { label: 'experience', routerLink: '/experience' }
  ];

}
