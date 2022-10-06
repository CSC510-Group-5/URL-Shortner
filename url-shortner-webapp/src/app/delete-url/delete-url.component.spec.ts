import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUrlComponent } from './delete-url.component';

describe('DeleteUrlComponent', () => {
  let component: DeleteUrlComponent;
  let fixture: ComponentFixture<DeleteUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUrlComponent ]
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
