import {NgModule} from "@angular/core";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {SignUpContainerComponent} from "./containers/sign-up/sign-up-container.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "./components/login/login.component";
import {LoginContainerComponent} from "./containers/login/login-container.component";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    SignUpContainerComponent,
    LoginContainerComponent
  ],
  imports: [
    AuthRoutingModule,
    HttpClientModule
  ],
  exports: [
    SignUpComponent,
    SignUpContainerComponent,
    LoginComponent,
    LoginContainerComponent,
    AuthRoutingModule
  ],
  providers: [AuthService, AuthGuardService]
})
export class AuthModule { }
