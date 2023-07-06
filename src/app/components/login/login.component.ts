import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup;
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }
  
  ngOnInit(): void { }
  login() {
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;


    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
     this.router.navigate(["/index"])
    }).catch((error) => {
      this.toastr.error( "verifique los datos ingresados",'Error');
    })
  }}

