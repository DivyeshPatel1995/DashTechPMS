import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService, UserService } from '../../_service';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html', providers: [UserService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private _userservice: UserService) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    //localStorage.removeItem('currentUser');
    // reset login status
    this.authenticationService.logout();
    
    console.log(this.returnUrl);

  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log('submit');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
    
    if (this.loginForm.invalid) {
      return;
    }
    //   this.authenticationService.login(this.f.username.value, this.f.password.value)
        //       .pipe(first())
        //       .subscribe(
        //           data => {
        //               this.router.navigate([this.returnUrl]);
        //           },
        //           error => {
        //               //this.alertService.error(error);
        //               this.loading = false;
        //           });

        if (this.loginForm.get('username').value == 'vardhik' && this.loginForm.get('password').value == '123456') {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          var a = this._userservice.getById(1);
          localStorage.setItem('currentUser', JSON.stringify(a));
          console.log(JSON.stringify(a));
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          if(this.returnUrl !=='/')
          {
          this.router.navigate([this.returnUrl]);
          }
          else{
            this.router.navigate(['/dashboard'])
          }
      }
  }

  forgetpass() {
    window.location.replace("/#/forgetpassword");
  }

}
