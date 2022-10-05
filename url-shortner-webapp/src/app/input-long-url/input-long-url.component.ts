import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';
import { URL } from '../models/URL'


export interface DialogData {
  title: string;
  content: string;
}

@Component({
  selector: 'app-input-long-url',
  templateUrl: './input-long-url.component.html',
  styleUrls: ['./input-long-url.component.scss']
})
export class InputLongUrlComponent {
  
  // variables for form and Regex
  urlShortnerForm : FormGroup;
  urlRegex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
  loading: boolean = false;
  
  constructor(private fb: FormBuilder, private _apiService: ApiService, public dialog: MatDialog) {
    // initialize the form and setup validators for form fields
    this.urlShortnerForm = this.fb.group({
    long_url: ['', [Validators.required, Validators.pattern(this.urlRegex) ]]
 });}

 // submit function to call actual API and get short URL
  getShortURL(){
    // only call API if form is valid
    if(this.urlShortnerForm.valid)
    {
      this.urlShortnerForm.markAllAsTouched();
      this.loading = true;
      let newURL = new URL({
        "long_url": this.urlShortnerForm.get('long_url')?.value
      });

      this._apiService.addURL(newURL).subscribe(
        (data) => {
          console.log(data);
          this.loading = false;

          const dialogRef = this.dialog.open(DialogShortUrl, {
            data: {
              title: 'Short URL Generated',
              content: '<b>Short URL is: </b>' + environment.apiBaseUrl + "/stub/" + data.stub + "<br> <b>Access code is: </b>" + data.special_code + "<br> Save this before closing the dialog. You can utilize the access code to update or delete your urls."
            },
          });

          dialogRef.afterClosed().subscribe(result => {
            location.reload();
          });
        },
        (err) => {
          console.log(err);
          this.loading = false;
          this.dialog.open(DialogShortUrl, {
            data: {
              title: 'Error Occurred',
              content: err.message
            },
          });
        }
      );
      console.log(this.urlShortnerForm.value);
    }
  }


}

@Component({
  selector: 'dialog-short-url',
  templateUrl: 'dialog-short-url.html',
})
export class DialogShortUrl {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  content: string = this.data.content
  title: string = this.data.title
}
