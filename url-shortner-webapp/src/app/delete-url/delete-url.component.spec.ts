import { Overlay } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
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
      providers:[ApiService, FormBuilder, MatDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
