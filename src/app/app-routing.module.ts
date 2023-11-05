import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalPaths } from './commons/constants/global-paths';
import { authGuard } from './commons/guards/auth.guard';
import { loginGuard } from './commons/guards/login.guard';
import { LayoutComponent } from './commons/components/layout/layout.component';

const routes: Routes = [
  {
    path: GlobalPaths.MAIN,
    loadComponent: () => import('./pages/home/home.component').then(component => component.HomeComponent)
  },
  {
    path: GlobalPaths.LOGIN,
    canActivate: [
      loginGuard
    ],
    loadComponent: () => import('./pages/login/login.component').then(component => component.LoginComponent)
  },
  {
    path: GlobalPaths.DASHBOARD,
    component: LayoutComponent,
    canActivate: [
      authGuard
    ],
     children: [
      {
        path: GlobalPaths.USERS,
        loadChildren: () => import('./pages/user/user.module').then(module => module.UserModule)
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
