import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputLongUrlComponent, DialogShortUrlComponent } from './input-long-url/input-long-url.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UpdateUrlComponent } from './update-url/update-url.component';
import { DeleteUrlComponent } from './delete-url/delete-url.component';
import { NoPageComponentComponent } from './no-page-component/no-page-component.component';


@NgModule({
  declarations: [
    AppComponent,
    InputLongUrlComponent,
    DialogShortUrlComponent,
    UpdateUrlComponent,
    DeleteUrlComponent,
    NoPageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [MatDatepickerModule,MatNativeDateModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
