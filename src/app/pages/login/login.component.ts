import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { LoginPresenter } from './login.presenter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './commons/services/auth.service';
import { Router } from '@angular/router';
import { GlobalPaths } from 'src/app/commons/constants/global-paths';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    LoginPresenter
  ]
})
export class LoginComponent {

  constructor(
    public readonly presenter: LoginPresenter,
    private readonly authService: AuthService,
    private router: Router
  ) { }
  hide: boolean = true;

  onLogin() {
    this.authService.login(
      this.presenter.email.value,
      this.presenter.password.value
    ).subscribe({
      next: (token) => this.successLogin(),
      error: (err) => this.errorLogin(err.status)
    });
  }

  private errorLogin(status: number) {
    if (404) {
      this.presenter.email.setErrors({ incorrect: true });
      this.presenter.password.setErrors({ incorrect: true });
    }
  }

  private successLogin() {
    this.router.navigate([GlobalPaths.DASHBOARD,GlobalPaths.USERS]);
  }

}
