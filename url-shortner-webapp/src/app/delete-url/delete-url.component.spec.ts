import { Overlay } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ApiService } from '../api.service';

import { DeleteUrlComponent } from './delete-url.component';

describe('DeleteUrlComponent', () => {
  let component: DeleteUrlComponent;
  let fixture: ComponentFixture<DeleteUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUrlComponent ],
      imports: [HttpClientModule, MatDialogModule],
      providers:[ApiService, FormBuilder, MatDialog],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.urlShortnerForm.valid).toBeFalsy();
  });

  it('special_code field validity', () => {
    const special_code = component.urlShortnerForm.controls['special_code'];
    const errors = special_code?.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('submitting a form tries to delete the URL', () => {

    expect(component.urlShortnerForm.valid).toBeFalsy();
    component.urlShortnerForm.controls['special_code'].setValue("f3028df6-18a2-4b1b-b441-f48734c4d417");
    expect(component.urlShortnerForm.valid).toBeTruthy();

    // call the delete component
    component.deleteShortURL();

    // the above call would lead to error and thus loading remains false
    expect(component.loading).toBeTrue();

  });

});
