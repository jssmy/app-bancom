import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/pages/login/commons/services/auth.service';
import { DateUtil } from 'src/app/utils/date';
import { GlobalPaths } from '../constants/global-paths';


export const loginGuard = () => {
    const router = inject(Router);
    const authService = inject(AuthService)
    const token = authService.token();

    if (!token) {
        return true;
    }
    const expiredIn = token.expiredIn;
    const timeExpired = DateUtil.toMoment(expiredIn);
    const isInTime = timeExpired.diff(DateUtil.getCurrent(), 'seconds') > 0;
    if (isInTime) {
        return router.navigate([`/${GlobalPaths.DASHBOARD}`, GlobalPaths.USERS]);
    }

    return true;
}