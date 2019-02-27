import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export interface SignUp {
  email: string;
  username: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

@Injectable()
export class CoreService {
  authenticated: boolean = false;

  constructor(private http: HttpClient) { }

  signup(credentials: SignUp) {
    return this.http.post('/api/users', credentials).toPromise();
  }

  login(credentials: Login) {
    return this.http.post('/api/auth', credentials).toPromise();
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  setAuthenticated() {
    this.authenticated = true;
  }
}
