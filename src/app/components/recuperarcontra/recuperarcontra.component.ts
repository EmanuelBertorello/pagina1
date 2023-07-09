import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recuperarcontra',
  templateUrl: './recuperarcontra.component.html',
  styleUrls: ['./recuperarcontra.component.css']
})
export class RecuperarcontraComponent implements OnInit{
  recuperarUsuario: FormGroup;
  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router){
      this.recuperarUsuario = this.fb.group({
        email: ["",Validators.required]}
      )
    }
   
 ngOnInit(): void {
   
 }
 recuperar(){
  const correo = this.recuperarUsuario.value.email;

  
  this.afAuth.sendPasswordResetEmail(correo)
    .then(() => {
      this.toastr.info('Le enviamos un correo para restablecer su password', 'Recuperar Password')
      this.router.navigate(['/login']);
    })
    .catch((error) => {
      this.toastr.error("verifique los datos ingresados", 'Error');
    });
}
}
