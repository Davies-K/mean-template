import {Component} from "@angular/core";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-sign-up-container',
  template: `
    <div>
      <app-sign-up></app-sign-up>
    </div>
  `
})
export class  SignUpContainerComponent {
  constructor(private authService: AuthService) {

  }

  async onSignUp() {
    const signUpData = {
      email: "",
      username: "",
      password: ""
    };

    const performSignUp = await this.authService.signup(signUpData);

    console.log(performSignUp);
  }
}
