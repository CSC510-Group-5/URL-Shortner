import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLongUrlComponent } from './input-long-url.component';

describe('InputLongUrlComponent', () => {
  let component: InputLongUrlComponent;
  let fixture: ComponentFixture<InputLongUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLongUrlComponent ]
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
