import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class SignInComponent {
  // registr
  formRegistr = new FormGroup({
    firstName: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('',[
      Validators.email,
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    checkbox: new FormControl('', [
      Validators.required
    ])
  });

  // login
  formLogin = new FormGroup({
    login: new FormControl('',[
      Validators.required
    ]),
    password: new FormControl('',[
      Validators.required
    ])
  })

  registr() {
    if (this.formRegistr.valid) {
      console.log(this.formRegistr);
    }
  }

  login(){
    if(this.formLogin.valid) {
      console.log(this.formLogin);
      
    }
  }

  isRegistr: boolean = false;

  showIn() {
    setTimeout(() => {
      this.isRegistr = !this.isRegistr;
    }, 100);
  }
}
