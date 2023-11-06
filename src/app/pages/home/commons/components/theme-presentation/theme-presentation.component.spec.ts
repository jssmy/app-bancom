import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemePresentationComponent } from './theme-presentation.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ThemePresentationComponent', () => {
  let component: ThemePresentationComponent;
  let fixture: ComponentFixture<ThemePresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RouterTestingModule
      ],
      providers: [
        Router
      ]
    });
    fixture = TestBed.createComponent(ThemePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
