import { RouterModule, Routes } from '@angular/router';
import { GlobalPaths } from 'src/app/commons/constants/global-paths';
import { ListPostComponent } from './list-post/list-post.component';

const routes: Routes = [
    {
        path: GlobalPaths.MAIN,
        component: ListPostComponent
    },
];


export const POST_ROUTES = RouterModule.forChild(routes);