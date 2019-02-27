import {NgModule} from "@angular/core";
import {DashboardComponent} from "./components/dashboard.component";
import {DashboardContainerComponent} from "./containers/dashboard-container.component";
import {RouterModule, Routes} from "@angular/router";

const dashboardRoutes: Routes = [
  { path: 'dashboard', component: DashboardContainerComponent, pathMatch: 'full' }
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
