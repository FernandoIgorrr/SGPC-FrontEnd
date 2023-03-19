import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  hide      : boolean = true;

  constructor(
    private formBuilder : FormBuilder,
    private titleService: Title
  ){

    this.titleService.setTitle("Login");

    this.loginForm = new FormGroup({});
  }

  onLogin(){}

  ngOnInit(): void {
    this.loginForm =  this.formBuilder.group({
      registration  : [null],
      password      : [null]
    });
  }
}
