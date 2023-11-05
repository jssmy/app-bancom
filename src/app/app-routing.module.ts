import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalPaths } from './commons/constants/global-paths';

const routes: Routes = [
  {
    path: GlobalPaths.MAIN,
    loadComponent: () => import('./pages/home/home.component').then(component => component.HomeComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
