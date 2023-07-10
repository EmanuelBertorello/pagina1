import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { EstadisticaComponent } from './components/materias/estadistica/estadistica.component';
import { GestionComponent } from './components/materias/gestion/gestion.component';
import { InglesComponent } from './components/materias/ingles/ingles.component';
import { PracticaComponent } from './components/materias/practica/practica.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RecuperarcontraComponent } from './components/recuperarcontra/recuperarcontra.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"", redirectTo: "/home",pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"register", component: RegisterComponent},
  {path:"index", component: IndexComponent },
  {path:"login", component:LoginComponent },
  {path:"mesas", component: MesasComponent},
  {path:"gestion", component: GestionComponent},
  {path:"ingles", component: InglesComponent},
  {path:"practica", component: PracticaComponent},
  {path:"estadistica", component: EstadisticaComponent},


  {path:"recuperarContra", component: RecuperarcontraComponent},
  {path:"**", component: NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
