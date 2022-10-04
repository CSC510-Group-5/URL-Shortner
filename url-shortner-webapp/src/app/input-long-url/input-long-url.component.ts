import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-long-url',
  templateUrl: './input-long-url.component.html',
  styleUrls: ['./input-long-url.component.scss']
})
export class InputLongUrlComponent {
  
  // variables for form and Regex
  urlShortnerForm : FormGroup;
  urlRegex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');

  
  constructor(private fb: FormBuilder) {
    // initialize the form and setup validators for form fields
    this.urlShortnerForm = this.fb.group({
    long_url: ['', [Validators.required, Validators.pattern(this.urlRegex) ]],
    expiration_date: ['',Validators.required]
 });}

 // submit function to call actual API and get short URL
  getShortURL(){
    // only call API if form is valid
    if(this.urlShortnerForm.valid)
    {
      this.urlShortnerForm.markAllAsTouched();
      // TO-DO : add code to call backend API and get shortened URL
      console.log(this.urlShortnerForm.value);
    }
  }


}
