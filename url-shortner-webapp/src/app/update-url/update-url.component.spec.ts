import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ApiService } from '../api.service';

import { UpdateUrlComponent } from './update-url.component';

describe('UpdateUrlComponent', () => {
  let component: UpdateUrlComponent;
  let fixture: ComponentFixture<UpdateUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUrlComponent ],
      imports: [HttpClientModule, MatDialogModule],
      providers:[ApiService, FormBuilder, MatDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
