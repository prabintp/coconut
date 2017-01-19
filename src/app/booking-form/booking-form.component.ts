import { Component, OnInit, Inject, ElementRef } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']

})
export class BookingFormComponent implements OnInit {
 iframeflag: number;

 constructor(public element: ElementRef) {
    this.element.nativeElement // <- your direct element reference
    var el = this.element.nativeElement;
    var el2 = el.querySelector('md-card-content');
  //  el.getElementsByTagName('md-card-content').scrolltop(0);
    console.log(el2);
  }
  ngOnInit() {
    this.iframeflag = 0;
  }
  

  onloadgoogleform(){
  console.log('loades');
    this.iframeflag = 1 + this.iframeflag;
    var el = this.element.nativeElement;
  //  el.querySelector('md-card-content');
  //  el.getElementsByTagName('md-card-content').scrolltop(0);
    console.log(el);
  }

}
