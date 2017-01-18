import { Component } from '@angular/core';
import {HeaderComponent} from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app worksgood!';
  nameTitle = 'Transplodes';

  routes: Object[] = [
      {
        title: "Home", route: "/", icon: "home"
      }, {
        title: "Documentation", route: "/docs", icon: "library_books"
      }, {
        title: "Style Guide", route: "/style-guide", icon: "color_lens"
      }, {
        title: "Layouts", route: "/layouts", icon: "view_quilt"
      }, {
        title: "Teradata Components", route: "/components", icon: "picture_in_picture"
      }
    ];

    tabs = [
   {label: 'Tab One', content: 'dds'},
   {label: 'Tab Two', content: 'This is the body of the second tab'},
   {label: 'Tab Three', content: 'sdmplate>'},
  ];


}
