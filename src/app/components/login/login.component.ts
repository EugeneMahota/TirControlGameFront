import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      pin: ['', [Validators.required, Validators.minLength(4)]],
      save: [true, [Validators.required]]
    });
  }

  login(loginData) {
    if (this.loginForm.valid) {
      this.router.navigate(['menu']);
    } else {

    }
  }

}
