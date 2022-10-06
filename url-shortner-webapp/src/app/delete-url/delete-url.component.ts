import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { DialogShortUrlComponent } from '../input-long-url/input-long-url.component';
import { URL } from '../models/URL';

@Component({
  selector: 'app-delete-url',
  templateUrl: './delete-url.component.html',
  styleUrls: ['./delete-url.component.scss']
})
export class DeleteUrlComponent {

  urlShortnerForm : FormGroup;
  loading: boolean = false;
  
  constructor(private fb: FormBuilder, private _apiService: ApiService, public dialog: MatDialog, private router: Router) {
    // initialize the form and setup validators for form fields
    this.urlShortnerForm = this.fb.group({
      special_code: ['', [Validators.required]]
 });}

 deleteShortURL(){
  // only call API if form is valid
  if(this.urlShortnerForm.valid)
  {
    this.urlShortnerForm.markAllAsTouched();
    this.loading = true;
    let newURL = new URL({
      "special_code": this.urlShortnerForm.get('special_code')?.value,
    });

    this._apiService.deleteURL(newURL).subscribe(
      (data) => {
        this.loading = false;

        const dialogRef = this.dialog.open(DialogShortUrlComponent, {
          data: {
            title: 'Success',
            content: 'The URL has been deleted successfully.'
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
