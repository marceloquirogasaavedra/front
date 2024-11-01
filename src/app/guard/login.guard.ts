import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const obtenerTokenAuth = localStorage.getItem("adminToken")
  if (obtenerTokenAuth != null) {
    return true;
  } else {
  router.navigateByUrl("login");
    return false;
  }
};
