import { Component } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss']
})
export class ItemBoxComponent {
  constructor(){

  }
  icons = [{src:"../../assets/icons/python_logo.png"},{src:"../../assets/icons/shorter_java_logo.png"},{src:"../../assets/icons/scala_logo.png"},
  {src:"../../assets/icons/c_logo.png"},{src:"../../assets/icons/csharp_logo.png"},{src:"../../assets/icons/angular_logo.png"},{src:"../../assets/icons/scss_logo.png"},
  {src:"../../assets/icons/ts_logo.png"},{src:"../../assets/icons/html_logo.png"},{src:"../../assets/icons/css_logo.png"},{src:"../../assets/icons/js_logo.webp"},
  {src:"../../assets/icons/git_logo.png"},{src:"../../assets/icons/ci-cd.png"},{src:"../../assets/icons/docker_logo.webp"},{src:"../../assets/icons/net_logo.png"},
  {src:"../../assets/icons/bottle_icon_w:o_bg.png"},{src:"../../assets/icons/sqlite-square-icon.png"}];

}
