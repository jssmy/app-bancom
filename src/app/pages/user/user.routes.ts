import { RouterModule, Routes } from '@angular/router';
import { GlobalPaths } from 'src/app/commons/constants/global-paths';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
    {
        path: GlobalPaths.MAIN,
        component: ListUserComponent
    },
];


export const USER_ROUTES = RouterModule.forChild(routes);