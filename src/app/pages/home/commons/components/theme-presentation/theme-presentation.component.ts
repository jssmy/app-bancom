import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-theme-presentation',
  templateUrl: './theme-presentation.component.html',
  styleUrls: ['./theme-presentation.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
export class ThemePresentationComponent {

}
