import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button"
import { NavbarComponent } from 'src/app/commons/components/navbar/navbar.component';
import { ThemePresentationComponent } from './commons/components/theme-presentation/theme-presentation.component';
import { ThemeFeaturesComponent } from './commons/components/theme-features/theme-features.component';
import { FooterComponent } from 'src/app/commons/components/footer/footer.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    NavbarComponent,
    ThemePresentationComponent,
    ThemeFeaturesComponent,
    FooterComponent
  ]
})
export class HomeComponent {
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
