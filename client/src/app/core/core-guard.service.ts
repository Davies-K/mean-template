import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {CoreService} from "./core.service";

@Injectable()
export class CoreGuardService implements CanActivate {
  constructor(public coreService: CoreService, public router: Router) { }

  canActivate(): boolean {
     if (this.coreService.checkValid()) {
        this.coreService.sendAuthStatus(true);
        return true;
     } else {
       this.router.navigate(['/login']);
       return false;
     }
  }
}
