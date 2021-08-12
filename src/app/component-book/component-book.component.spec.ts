import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBookComponent } from './component-book.component';

describe('ComponentBookComponent', () => {
  let component: ComponentBookComponent;
  let fixture: ComponentFixture<ComponentBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
