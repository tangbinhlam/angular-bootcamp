import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawHomeComponent } from './draw-home.component';

describe('DrawHomeComponent', () => {
  let component: DrawHomeComponent;
  let fixture: ComponentFixture<DrawHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
