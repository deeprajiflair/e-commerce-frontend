import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Authservice } from 'src/app/state/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @Input() changeTemplate :any

  constructor( private formbuilder : FormBuilder , private store :Store ,private authSerive:Authservice){
  
  }
  loginForm :FormGroup = this.formbuilder.group({
    firstname :['',[Validators.required]],
    secondname :['',[Validators.required]],
    mobile :['',[Validators.required]],
    email : ['',[Validators.required,Validators.email]],
    password : ['',[Validators.required,Validators.minLength(8)]]
  })                       
  
  submitForm():void{
    if(this.loginForm.valid){
    console.log("user login data",this.loginForm.value);
      this.authSerive.signup(this.loginForm.value)
    }
  }
  
}
