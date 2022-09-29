import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckersGameComponent } from './checkers-game.component';

describe('CheckersGameComponent', () => {
  let component: CheckersGameComponent;
  let fixture: ComponentFixture<CheckersGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckersGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckersGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
