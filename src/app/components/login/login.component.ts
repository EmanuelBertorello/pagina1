import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 registerUsuario: FormGroup
 constructor(private fb: FormBuilder){
  this.registerUsuario = this.fb.group ({
    email: ["",Validators.required],
    password: ["",Validators.required],
    repitPassword: ["",Validators.required]

  })
 }
  ngOnInit(): void {
    
  }
}
