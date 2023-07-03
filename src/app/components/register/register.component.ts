import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   registerUsuario: FormGroup;

  constructor(public fg: FormBuilder){
   this.registerUsuario = this.fg.group({
     email: ['', Validators.required],
     password: ['', Validators.required],
     repetirPassword: ['', Validators.required]
   })
  }
   ngOnInit(): void {

   }
   registrar() {
      console.log(this.registerUsuario);
   }
  }
