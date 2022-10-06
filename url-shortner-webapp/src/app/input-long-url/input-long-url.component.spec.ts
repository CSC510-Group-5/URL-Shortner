import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ApiService } from '../api.service';

import { InputLongUrlComponent } from './input-long-url.component';

describe('InputLongUrlComponent', () => {
  let component: InputLongUrlComponent;
  let fixture: ComponentFixture<InputLongUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLongUrlComponent ],
      imports: [HttpClientModule, MatDialogModule],
      providers:[ApiService, FormBuilder, MatDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputLongUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
