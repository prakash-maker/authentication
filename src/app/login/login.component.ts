import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(public authservice: AuthService,
    private fb: FormBuilder) {  this.createForm(); }

  ngOnInit(): void {

  }
   
  tryGoogleLogin(){
    this.authservice.doGoogleLogin()
  }

  tryFacebookLogin(){
    this.authservice.doFacebookLogin()
  }

  tryTwitterLogin(){
    this.authservice.doTwitterLogin()
  }

  tryLogin(value){
    this.authservice.doLogin(value)
  }

  tryRegister(value) {
    this.authservice.doRegister(value)
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }
}


