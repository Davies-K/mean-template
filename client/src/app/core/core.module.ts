import {NgModule} from "@angular/core";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {SignUpContainerComponent} from "./containers/sign-up/sign-up-container.component";
import {CoreRoutingModule} from "./core-routing.module";
import {LoginComponent} from "./components/login/login.component";
import {LoginContainerComponent} from "./containers/login/login-container.component";
import {HttpClientModule} from "@angular/common/http";
import {CoreService} from "./core.service";
import {CoreGuardService} from "./core-guard.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    SignUpContainerComponent,
    LoginContainerComponent
  ],
  imports: [
    FormsModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  exports: [
    SignUpComponent,
    SignUpContainerComponent,
    LoginComponent,
    LoginContainerComponent,
    CoreRoutingModule
  ],
  providers: [CoreService, CoreGuardService]
})
export class CoreModule { }
