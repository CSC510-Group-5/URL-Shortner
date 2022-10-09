import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';
import { DialogShortUrlComponent } from '../input-long-url/input-long-url.component';
import { UpdateURL } from '../models/UpdateURL';

@Component({
  selector: 'app-update-url',
  templateUrl: './update-url.component.html',
  styleUrls: ['./update-url.component.scss']
})
export class UpdateUrlComponent{

  urlShortnerForm : FormGroup;
  urlRegex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
  loading: boolean = false;
  updatedURLData : Object = {};
  
  constructor(private fb: FormBuilder, private _apiService: ApiService, public dialog: MatDialog, private router: Router) {
    // initialize the form and setup validators for form fields
    this.urlShortnerForm = this.fb.group({
      stub: ['', [Validators.required]],
      special_code: ['', [Validators.required]],
      new_long_url: ['', [Validators.required, Validators.pattern(this.urlRegex) ]]
 });}

 updateShortURL(){
  // only call API if form is valid
  if(this.urlShortnerForm.valid)
  {
    this.urlShortnerForm.markAllAsTouched();
    this.loading = true;
    let newURL = new UpdateURL({
      "stub": this.urlShortnerForm.get('stub')?.value,
      "special_code": this.urlShortnerForm.get('special_code')?.value,
      "new_long_url": this.urlShortnerForm.get('new_long_url')?.value
    });

    this._apiService.updateURL(newURL).subscribe(
      (data) => {
        this.loading = false;
        this.updatedURLData = data;
        const dialogRef = this.dialog.open(DialogShortUrlComponent, {
          data: {
            title: 'URL updated successfully',
            content: '<b>Short URL is: </b>' + environment.apiBaseUrl + "/stub/" + this.urlShortnerForm.get('stub')?.value + "<br> <b>Access code is: </b>" + this.urlShortnerForm.get('special_code')?.value + "<br> <b>New Long URL is: </b>" + data + "<br><br> Save this before closing the dialog. You can utilize the access code to update or delete your urls."
          },
        });

        dialogRef.afterClosed().subscribe(result => {
          this.router.navigate([`input-long-url`]);
        });
      },
      (err) => {
        console.log(err);
        this.loading = false;
        this.dialog.open(DialogShortUrlComponent, {
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
