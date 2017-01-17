import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.scss']
})
export class DestinationListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  destinations = [
  { "title": "Elephant Sanctuary", "subtitle":"Guruvayoor elephant Sanctuary","url": "app/csscarousel/images/co-travel1.jpg" },
  { "title": "Beaches", "subtitle":"Snehatheeram/periyabalam/chavakkad","url": "app/csscarousel/images/co-travel1.jpg" },
  { "title": "Athirapalli waterfalls", "subtitle":"Situated in Athirappilly panchayath, Chalakudy Taluk in of Thrissur district","url": "app/csscarousel/images/co-travel1.jpg" },
  { "title": "Chettuva boating", "subtitle":"","url": "app/csscarousel/images/co-travel1.jpg" },
  { "title": "Thrissur Zoo/Museum", "subtitle":"14/17/26 Seater @20Rs/KM","url": "app/csscarousel/images/co-travel1.jpg" },

  ];


}
