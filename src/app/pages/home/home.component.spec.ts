import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/commons/components/navbar/navbar.component';
import { ThemePresentationComponent } from './commons/components/theme-presentation/theme-presentation.component';
import { ThemeFeaturesComponent } from './commons/components/theme-features/theme-features.component';
import { FooterComponent } from 'src/app/commons/components/footer/footer.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NavbarComponent,
        ThemePresentationComponent,
        ThemeFeaturesComponent,
        FooterComponent,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
