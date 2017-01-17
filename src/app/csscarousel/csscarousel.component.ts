import { Component} from '@angular/core';
//Import the Image interface
import {Image} from './image.interface';

@Component({
  selector: 'app-csscarousel',
  templateUrl: './csscarousel.component.html',
  styleUrls: ['./csscarousel.component.scss']
})
export class CSSCarouselComponent{
  //images data to be bound to the template
  	public images = IMAGES;
    //IMAGES array implementing Image interface
    var IMAGES: Image[] = [
    { "title": "Hire Cabs for Outstation...", "url": "app/csscarousel/images/nh47-Car-Hire.jpg" },
      { "title": "Hire Cabs for Outstation...", "url": "app/csscarousel/images/athirapalli-waterfall-package.jpg" },
        { "title": "Hire Cabs for Outstation...", "url": "app/csscarousel/images/nh47-Car-Hire.jpg" },
          { "title": "Hire Cabs for Outstation...", "url": "app/csscarousel/images/athirapalli-waterfall-package.jpg" },
            { "title": "Hire Cabs for Outstation...", "url": "app/csscarousel/images/nh47-Car-Hire.jpg" }
  //  { "title": "Book your one way Drops & Return trips now...", "url": "app/csscarousel/images/co-travel1.jpg" },
  //  { "title": "Airport transfers at lowest rate...", "url": "app/csscarousel/images/airporttransfer.jpg" },
  //  { "title": "Book for a self drive car..", "url": "app/csscarousel/images/co-travel1.jpg" },
  //  { "title": "Get a car for your special occasion...", "url": "app/csscarousel/images/co-travel1.jpg" }
    ];

}
