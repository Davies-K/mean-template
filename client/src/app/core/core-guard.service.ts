import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {CoreService} from "./core.service";

@Injectable()
export class CoreGuardService implements CanActivate {
  constructor(public authService: CoreService, public router: Router) { }

  canActivate(): boolean {
    if(!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
