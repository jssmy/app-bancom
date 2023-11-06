import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeFeaturesComponent } from './theme-features.component';

describe('ThemeFeaturesComponent', () => {
  let component: ThemeFeaturesComponent;
  let fixture: ComponentFixture<ThemeFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: []
    });
    fixture = TestBed.createComponent(ThemeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
