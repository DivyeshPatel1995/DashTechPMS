import { Component, OnInit, Injectable } from '@angular/core';
import { User } from '../_model';

// @Component({
//     providers:[User]
// })

@Injectable()
export class UserProfile {

    private userprofile: User;
    constructor() { }

    getuserprofile():User {
        if (localStorage.getItem('currentUser')) {
            return this.userprofile = JSON.parse(localStorage.getItem('currentUser'));
        }
    }

    getuserid() {
        if (localStorage.getItem('currentUser')) {
            this.userprofile = JSON.parse(localStorage.getItem('currentUser'));
            return this.userprofile.id;
        }
    }

    getusername() {
        if (localStorage.getItem('currentUser')) {
            this.userprofile = JSON.parse(localStorage.getItem('currentUser'));
            return this.userprofile.username;
        }
    }

    

}