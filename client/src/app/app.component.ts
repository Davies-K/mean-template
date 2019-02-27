import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CoreService} from "./core/core.service";
import {Router} from "@angular/router";

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
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private coreService: CoreService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.coreService.getAuthStatus();
  }

  async onLogout() {
    try{
      await this.coreService.logout();
      this.router.navigate(['/']);
      this.coreService.sendAuthStatus(false);
    } catch(e) {
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
