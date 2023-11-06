import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePresentationComponent } from './theme-presentation.component';

describe('ThemePresentationComponent', () => {
  let component: ThemePresentationComponent;
  let fixture: ComponentFixture<ThemePresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemePresentationComponent]
    });
    fixture = TestBed.createComponent(ThemePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
