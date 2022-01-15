import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCityComponent } from './input-city.component';

describe('InputCityComponent', () => {
  let component: InputCityComponent;
  let fixture: ComponentFixture<InputCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
