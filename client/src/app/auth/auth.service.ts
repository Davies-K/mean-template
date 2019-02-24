import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

interface SignUp {
  email: string;
  username: string;
  password: string;
}

interface Login {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  authenticated: boolean = false;

  constructor(private http: HttpClient) { }

  signup(credentials: SignUp) {
    return this.http.post('/api/users', credentials).toPromise();
  }

  login(credentials: Login) {

  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
