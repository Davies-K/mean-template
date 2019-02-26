import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignUpContainerComponent} from "./containers/sign-up/sign-up-container.component";
import {LoginContainerComponent} from "./containers/login/login-container.component";

const authRoutes: Routes = [
  { path: 'login', component: LoginContainerComponent, pathMatch: 'full' },
  { path: 'sign-up', component: SignUpContainerComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }
