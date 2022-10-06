import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageComponentComponent } from './no-page-component.component';

describe('NoPageComponentComponent', () => {
  let component: NoPageComponentComponent;
  let fixture: ComponentFixture<NoPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
