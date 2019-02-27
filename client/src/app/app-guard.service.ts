import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {CoreService} from "./core/core.service";

@Injectable()
export class AppGuardService implements CanActivate {
  constructor(public coreService: CoreService, public router: Router) { }

  canActivate(): boolean {
    if (this.coreService.checkValid()) {
      this.router.navigate(['/dashboard']);
      this.coreService.sendAuthStatus(true);
      return false;
    }
    return true;
  }
}
