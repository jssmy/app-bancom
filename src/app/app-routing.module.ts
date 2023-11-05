import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalPaths } from './commons/constants/global-paths';
import { authGuard } from './commons/guards/auth.guard';
import { loginGuard } from './commons/guards/login.guard';

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
    path: GlobalPaths.POST,
    canActivate: [
      authGuard
    ],
    loadChildren: () => import('./pages/post/post.module').then(module => module.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
