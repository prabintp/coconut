import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']

})
export class BookingFormComponent implements OnInit {

  form: FormGroup;
//  let dropdate = '2016/11/11';
  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      name: fb.group({
        first: ['', Validators.minLength(2)],
        last: '',
      }),
      email: ['', Validators.required],
      pickup: ['', Validators.required],
      drop: ['', Validators.required],
      depDate: ['', Validators.required],
      dropdate:['', Validators.required],
    });

  // this.form.value.dropdate = 'dfdsf';
  //  this.form.controls.email.dropdate = this.dropdate;
  }

  onSelect(date: Date) {
    console.log("onSelect: ", date );
    this.form.value.dropdate = date;
  }

  onSubmitForm(formData){
      console.log("onsubmit: ", formData );


  }



  ngOnInit() {
  }



}
