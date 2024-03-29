import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";
import {CoreModule} from "./core/core.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {AppGuardService} from "./app-guard.service";

library.add(fas);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CoreModule,
    DashboardModule,
    AppRoutingModule // make sure this stays at last always
  ],
  providers: [AppGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
