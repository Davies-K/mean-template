import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {CoreService} from "./core/core.service";
import {NavigationEnd, Router} from "@angular/router";

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isLoggedIn$: Observable<boolean>;
  isLoginActive: boolean = false;
  isSignupActive: boolean = false;
  routerEventsSub: Subscription;

  constructor(private coreService: CoreService, private router: Router) {}

  ngOnInit(): void {

    this.routerEventsSub = this.router.events.subscribe((url: any) => {
      if(url instanceof NavigationEnd) {
        if(this.router.url === '/login') {
          this.isSignupActive = false;
          this.isLoginActive = true;
        } else if (this.router.url === '/sign-up') {
          this.isSignupActive = true;
          this.isLoginActive = false;
        }
      }
    });

    this.isLoggedIn$ = this.coreService.getAuthStatus();
  }

  ngOnDestroy() {
    this.routerEventsSub.unsubscribe();
  }

  async onLogout() {

    try{
      await this.coreService.logout();
      this.coreService.sendAuthStatus(false);
      this.router.navigate(['/']);
    } catch(e) {
      this.coreService.sendAuthStatus(false);
      this.router.navigate(['/']);
      console.log(e);
    }
  }

  nav: Nav[] = [
    {
      link: '/sign-up',
      name: 'Sign Up',
      exact: true
    },
    {
      link: 'login',
      name: 'Login',
      exact: true
    }
  ]
}
