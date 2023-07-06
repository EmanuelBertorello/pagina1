import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUsuario: FormGroup;

  constructor(public fg: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.registerUsuario = this.fg.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required]
    })
  }
  ngOnInit(): void {

  }
  registrar() {
    const email = this.registerUsuario.value.email
    const password = this.registerUsuario.value.password
    const repetirPassword = this.registerUsuario.value.repetirPassword;
    if (password !== repetirPassword) {
      this.toastr.error("las contraseñas ingresadas debe ser la misma", "error")
      return
    }

    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.router.navigate(["/login"])
      this.toastr.success("el usuario fue registrado con exito","usuario registrado")
    }).catch((error) => {
      console.log(error);
      this.toastr.error(this.firebaseError(error.code), "error")
    })
  }
  firebaseError(code: String) {
    switch (code) {
      case "auth/email-already-in-use":
        return "el usuario ya existe"
      case "auth/weak-password":
        return "la contraseña es demasiado debil"
      case "auth/invalid-email":
        return "correo invalido"
      default:
        return "error desconocido"
    }

  }

}