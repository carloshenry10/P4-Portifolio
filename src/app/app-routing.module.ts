import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent }, // Rota padrão (rota vazia) para a página inicial
  { path: 'home', component: PrincipalComponent }, // Rota padrão (rota vazia) para a página inicial
  { path: 'principal', component: PrincipalComponent }, // Rota padrão (rota vazia) para a página inicial




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
