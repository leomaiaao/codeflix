import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { SignUpCardComponent } from './components/sign-up-card/sign-up-card.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginCardComponent},
  {path: 'signUp', component: SignUpCardComponent},
  {path: 'pesquisa', component: PesquisaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
