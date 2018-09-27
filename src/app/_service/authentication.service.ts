import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient,private _userservice:UserService) { }

    login(username: string, password: string) {
        // return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
        //     .pipe(map(user => {
        //         // login successful if there's a jwt token in the response
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }

        //         return user;
        //     }));
        return this._userservice.getById(1)

        
        if (username=='vardhik' && password=='123456') {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            var a=this._userservice.getById(1);
            localStorage.setItem('currentUser', JSON.stringify(a));
            
         }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}