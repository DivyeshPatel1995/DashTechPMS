import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'forgetpassword.component.html'
})
export class ForgetPasswordComponent {

    constructor(){

    }

    cancle(){
        window.location.replace("/#/login");
    }
 }
