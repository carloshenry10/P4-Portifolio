import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/Pages/Portifolio/principal/principal.component';
import { AboutComponent } from './components/Pages/Portifolio/about/about.component';
import { CadastroComponent } from './components/Pages/Cadastro/Cadastro/Cadastro.component';
import { LoginComponent } from './components/Pages/Login/Login.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent }, // Rota padrão (rota vazia) para a página inicial
  { path: 'home', component: PrincipalComponent }, // Rota padrão (rota vazia) para a página inicial
  { path: 'principal', component: PrincipalComponent }, // Rota padrão (rota vazia) para a página inicial
  { path: 'cadastro',component: CadastroComponent},
  { path: 'login',component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
