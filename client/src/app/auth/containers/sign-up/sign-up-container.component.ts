import {Component} from "@angular/core";
import {AuthService, SignUp} from "../../auth.service";

@Component({
  selector: 'app-sign-up-container',
  template: `
    <div>
      <app-sign-up (signUpCredentials)="onSignUp($event)"></app-sign-up>
    </div>
  `
})
export class  SignUpContainerComponent {
  constructor(private authService: AuthService) {

  }

  async onSignUp(signUpData: SignUp) {
    const performSignUp = await this.authService.signup(signUpData);

    console.log(performSignUp);
  }
}
