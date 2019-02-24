import {Component, EventEmitter, Output} from "@angular/core";
import {SignUp} from "../../auth.service";

@Component({
  selector: 'app-sign-up',
  template: `
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form class="box">
                <div class="field has-text-centered">
                  <div>LOGO HERE</div>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left">
                    <input [(ngModel)]="email" [ngModelOptions]="{standalone: true}" class="input" type="email" placeholder="foobar@gmail.com" required>
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-left">
                    <input [(ngModel)]="username" [ngModelOptions]="{standalone: true}" class="input" type="text" placeholder="foobar" required>
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control has-icons-left">
                    <input [(ngModel)]="password" [ngModelOptions]="{standalone: true}" class="input" type="password" placeholder="*******" required>
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <button (click)="signUp()" class="button is-success">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SignUpComponent {
  @Output() signUpCredentials = new EventEmitter<SignUp>();

  email: string;
  username: string;
  password: string;

  signUp() {
    const signUpInfo: SignUp = {
      email: this.email,
      username: this.username,
      password: this.password
    };

    this.signUpCredentials.emit(signUpInfo)
  }
}
