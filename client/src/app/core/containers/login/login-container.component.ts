import {Component} from "@angular/core";
import {CoreService, Login} from "../../core.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-container',
  template: `
    <div>
      <app-login (loginCredentials)="onLogin($event)"></app-login>
    </div>
  `
})
export class  LoginContainerComponent {
  constructor(private authService: CoreService, private router: Router) { }

  async onLogin(loginData: Login) {
    try {
      const login = await this.authService.login(loginData);
      this.router.navigate(['/dashboard']);
    } catch (e) {
      console.log(e);
    }
  }

}
