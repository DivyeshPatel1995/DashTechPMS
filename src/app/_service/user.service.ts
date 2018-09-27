import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_model';

@Injectable()
export class UserService {
    private user: User[] =[ {
        id: 1,
        username: 'Vardhik Prajapati',
        password: '123456',
        firstName: 'Vardhik',
        lastName: 'Prajapati',
        profileimg:'https://image.flaticon.com/icons/png/512/206/206884.png'
    },
    {
        id: 2,
        username: 'Divyesh',
        password: '123456',
        firstName: 'Divyesh',
        lastName: 'Padamani',
        profileimg:'https://orig00.deviantart.net/e2b3/f/2015/258/8/3/8326f09dce00c16bf42c0917ab37eeb9-d99pf6e.png'
    }]

    constructor(private http: HttpClient) { }


    getAll() {
        //return this.http.get<User[]>(`/users`);
        return this.user;
    }

    getById(id: number) {
        //return this.http.get(`/users/` + id);
        return this.user.find(f=>f.id==id);
    }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
}