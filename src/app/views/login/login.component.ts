import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
   });

   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  get f() { 
    return this.loginForm.controls; 
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
   }
  }

  forgetpass(){
    window.location.replace("/#/forgetpassword");
  }

 }
