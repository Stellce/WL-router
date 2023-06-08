import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {AppService} from "./app.service";

export const authGuard = () => {
  const appService = inject(AppService);
  const router = inject(Router);

  if (appService.getIsAuth()) return true;
  router.navigateByUrl('/');
  return false;
}
