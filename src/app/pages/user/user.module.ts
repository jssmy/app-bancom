import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { USER_ROUTES } from './user.routes';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    CommonModule,
    USER_ROUTES,
    MatTableModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule
  ]
})
export class UserModule { }
