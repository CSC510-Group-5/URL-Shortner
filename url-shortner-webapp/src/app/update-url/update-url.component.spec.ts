import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MockInstance, MockProvider } from 'ng-mocks';
import { EMPTY } from 'rxjs';
import { ApiService } from '../api.service';

import { UpdateUrlComponent } from './update-url.component';

describe('UpdateUrlComponent', () => {
  let component: UpdateUrlComponent;
  let fixture: ComponentFixture<UpdateUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUrlComponent ],
      imports: [HttpClientModule, MatDialogModule],
      providers:[MockProvider(ApiService, {updateURL: () => EMPTY}), FormBuilder, MatDialog],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.urlShortnerForm.valid).toBeFalsy();
  });
  
  it('fields validity', () => {
    const special_code = component.urlShortnerForm.controls['special_code'];
    const stub = component.urlShortnerForm.controls['stub'];
    const specialCodeErrors = special_code?.errors || {};
    const stubErrors = stub?.errors || {};
    expect(specialCodeErrors['required']).toBeTruthy();
    expect(stubErrors['required']).toBeTruthy();
  });

  it('submitting a form tries to update the Long URL', () => {
    
    const url = new URL("https://www.google.com");
    const updateURL = jasmine.createSpy().and.returnValue(url);
    MockInstance(ApiService, () => ({
      updateURL,
    }));

    expect(component.urlShortnerForm.valid).toBeFalsy();
    component.urlShortnerForm.controls['stub'].setValue("randomStub");
    component.urlShortnerForm.controls['special_code'].setValue("randomSpecialCode");
    component.urlShortnerForm.controls['new_long_url'].setValue("https://www.google.com");
    expect(component.urlShortnerForm.valid).toBeTruthy();

    component.updateShortURL();

    expect(JSON.stringify(component.updatedURLData) == "{}").toBeTrue();

  });

});
