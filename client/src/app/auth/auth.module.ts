import {NgModule} from "@angular/core";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {SignUpContainerComponent} from "./containers/sign-up/sign-up-container.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "./components/login/login.component";
import {LoginContainerComponent} from "./containers/login/login-container.component";

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    SignUpContainerComponent,
    LoginContainerComponent
  ],
  imports: [
    AuthRoutingModule
  ],
  exports: [
    SignUpComponent,
    SignUpContainerComponent,
    LoginComponent,
    LoginContainerComponent,
    AuthRoutingModule
  ],
  providers: []
})
export class AuthModule { }
