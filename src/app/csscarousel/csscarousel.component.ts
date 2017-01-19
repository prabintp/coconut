import { Component, OnInit} from '@angular/core';
//Import the Image interface
//import {Image} from './image.interface';

@Component({
  selector: 'app-csscarousel',
  templateUrl: './csscarousel.component.html',
  styleUrls: ['./csscarousel.component.scss']
})
export class CSSCarouselComponent implements OnInit {

constructor() { }

ngOnInit() {
}
  //images data to be bound to the template
  //	public images = IMAGES;
    //IMAGES array implementing Image interface
    images = [
    { "title": "Hire Cabs for Outstation...", "url": "assets/cimages/athirapalli-waterfall-package.jpg" },
      { "title": "Hire Cabs for Outstation...", "url": "assets/cimages/athirapalli-waterfall-package.jpg" },
        { "title": "Hire Cabs for Outstation...", "url": "assets/cimages/athirapalli-waterfall-package.jpg" },
          { "title": "Hire Cabs for Outstation...", "url": "assets/cimages/athirapalli-waterfall-package.jpg" },
            { "title": "Hire Cabs for Outstation...", "url": "assets/cimages/athirapalli-waterfall-package.jpg" }
    ];

}
