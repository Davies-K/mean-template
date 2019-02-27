import {NgModule} from "@angular/core";
import {DashboardComponent} from "./components/dashboard.component";
import {DashboardContainerComponent} from "./containers/dashboard-container.component";
import {RouterModule, Routes} from "@angular/router";
import {CoreGuardService} from "../core/core-guard.service";

const dashboardRoutes: Routes = [
  { path: 'dashboard', component: DashboardContainerComponent, pathMatch: 'full', canActivate: [CoreGuardService] }
];

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContainerComponent
  ],
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    DashboardComponent,
    DashboardContainerComponent,
    RouterModule
  ],
  providers: []
})
export class DashboardModule { }
