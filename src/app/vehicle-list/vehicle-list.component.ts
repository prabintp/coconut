import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  vehicles = [
  { "title": "Toyota Innova", "subtitle":"6/7 seater @15Rs/KM","url": "assets/default.jpg" },
  { "title": "Toyota Etios", "subtitle":"4 Seater","url": "assets/default.jpg" },
  { "title": "Maruthi Swift", "subtitle":"4 seater @13Rs/KM","url": "assets/default.jpg" },
  { "title": "Toyota Altis", "subtitle":"","url": "assets/default.jpg" },
  { "title": "Force Travaler", "subtitle":"14/17/26 Seater @20Rs/KM","url": "assets/default.jpg" },

  ];

}
