import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";
import {AppGuardService} from "./app-guard.service";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AppGuardService] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
