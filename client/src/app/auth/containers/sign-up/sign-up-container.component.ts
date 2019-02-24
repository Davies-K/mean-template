import {Component} from "@angular/core";
import {AuthService, SignUp} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-container',
  template: `
    <div>
      <app-sign-up (signUpCredentials)="onSignUp($event)"></app-sign-up>
    </div>
  `
})
export class  SignUpContainerComponent {
  constructor(private authService: AuthService, private router: Router) {

  }

  async onSignUp(signUpData: SignUp) {
    try {
      const performSignUp = await this.authService.signup(signUpData);

      this.router.navigate(['/login']);
    } catch (e) {
      console.log(e);
    }
  }
}
