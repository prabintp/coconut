import { Component } from '@angular/core';

@Component({
  selector: 'layouts-card-over',
  styleUrls: ['card-over.component.scss'],
  templateUrl: 'card-over.component.html',
})
export class CardOverComponent {
  tabs = [
 {label: 'Tab One', content: '<md-icon md-list-icon>plus</md-icon>'},
 {label: 'Tab Two', content: 'This is the body of the second tab'},
 {label: 'Tab Three', content: '<template><md-card>card</md-card></template>'},
];

}
