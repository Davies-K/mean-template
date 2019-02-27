import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

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
  private authenticated: boolean = false;
  private authSubject = new BehaviorSubject<any>(false);

  constructor(private http: HttpClient) { }

  signup(credentials: SignUp) {
    return this.http.post('/api/users', credentials).toPromise();
  }

  login(credentials: Login) {
    return this.http.post('/api/login', credentials).toPromise();
  }

  logout() {
    this.authenticated = false;
    return this.http.post('/api/logout', {}).toPromise();
  }

  sendAuthStatus(message: boolean) {
    this.authSubject.next({ text: message });
  }

  getAuthStatus(): Observable<any> {
    return this.authSubject.asObservable();
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  setAuthenticated() {
    this.authenticated = true;
  }
}
