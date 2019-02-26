import {Component, EventEmitter, Output} from "@angular/core";
import {Login} from "../../core.service";

@Component({
  selector: 'app-login',
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
                    <input [(ngModel)]="email" [ngModelOptions]="{ standalone: true }" class="input" type="email" placeholder="foobar@gmail.com" required>
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control has-icons-left">
                    <input [(ngModel)]="password" [ngModelOptions]="{ standalone: true }" class="input" type="password" placeholder="*******" required>
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <button (click)="onLogin()" class="button is-success">
                    Login
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
export class LoginComponent {
  email: string;
  password: string;

  @Output() loginCredentials = new EventEmitter<Login>();

  onLogin() {
    const loginInfo: Login = {
      email: this.email,
      password: this.password
    };

    this.loginCredentials.emit(loginInfo);
  }
}
