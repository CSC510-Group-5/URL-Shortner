import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EMPTY, Observable, of } from 'rxjs';
import { ApiService } from '../api.service';
import { MockProvider, MockInstance } from 'ng-mocks';

import { InputLongUrlComponent } from './input-long-url.component';

describe('InputLongUrlComponent', () => {
  let component: InputLongUrlComponent;
  let fixture: ComponentFixture<InputLongUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLongUrlComponent ],
      imports: [HttpClientModule, MatDialogModule],
      providers:[MockProvider(ApiService, {addURL: () => EMPTY}), FormBuilder, MatDialog],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputLongUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.urlShortnerForm.valid).toBeFalsy();
  });

  it('long_url field validity', () => {
    const long_url = component.urlShortnerForm.controls['long_url'];
    const errors = long_url?.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('submitting a form tries to shorten the URL', () => {
    
    const url = new URL("https://www.google.com");
    const addURL = jasmine.createSpy().and.returnValue(url);
    MockInstance(ApiService, () => ({
      addURL,
    }));

    expect(component.urlShortnerForm.valid).toBeFalsy();
    component.urlShortnerForm.controls['long_url'].setValue("https://www.google.com");
    expect(component.urlShortnerForm.valid).toBeTruthy();

    component.getShortURL();

    expect(JSON.stringify(component.shortURLData) == "{}").toBeTrue();

  });


});

