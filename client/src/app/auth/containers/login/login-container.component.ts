import {Component} from "@angular/core";
import {AuthService, Login} from "../../auth.service";

@Component({
  selector: 'app-login-container',
  template: `
    <div>
      <app-login (loginCredentials)="onLogin($event)"></app-login>
    </div>
  `
})
export class  LoginContainerComponent {
  constructor(private authService: AuthService) { }

  async onLogin(loginData: Login) {
    try {
      const login = await this.authService.login(loginData);
      console.log(login);
    } catch (e) {
      console.log(e);
    }
  }

}
