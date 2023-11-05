import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/pages/login/commons/services/auth.service';
import { DateUtil } from 'src/app/utils/date';
import { GlobalPaths } from '../constants/global-paths';


export const authGuard = () => {
    const router = inject(Router);
    const authService = inject(AuthService)
    const token = authService.token();

    if (!token) {
        return router.navigate([`/${GlobalPaths.LOGIN}`]);
    }
    const expiredIn = token.expiredIn;
    const timeExpired = DateUtil.toMoment(expiredIn);
    const isInTime = timeExpired.diff(DateUtil.getCurrent(), 'seconds') > 0;
    if (!isInTime) {
        authService.logout();
        return router.navigate([`/${GlobalPaths.LOGIN}`]);

    }

    return true;
}