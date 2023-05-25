import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:"", redirectTo: "/home",pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"index", component: IndexComponent },
  {path:"login", component:LoginComponent },
  {path:"mesas", component: MesasComponent},
  {path:"**", component: NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
