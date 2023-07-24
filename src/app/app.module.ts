import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { AboutComponent } from './components/Pages/Portifolio/about/about.component';
import { ExperienceComponent } from './components/Pages/Portifolio/experience/experience.component';
import { SchoolingComponent } from './components/Pages/Portifolio/schooling/schooling.component';
import { CertificationsComponent } from './components/Pages/Portifolio/certifications/certifications.component';
import { PrincipalComponent } from './components/Pages/Portifolio/principal/principal.component';
import { SkillsComponent } from './components/Pages/Portifolio/skills/skills.component';
import { WorksComponent } from './components/Pages/Portifolio/works/works.component';
import { ContactsComponent } from './components/Pages/Portifolio/contacts/contacts.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { PessoaService } from './services/Pessoa.service';
import { PessoaController } from './controllers/PessoaController';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CadAboutComponent } from './components/Pages/Cadastro/cad-about/cad-about.component';
import { CadastroComponent } from './components/Pages/Cadastro/Cadastro/Cadastro.component';
import { CadCertificationsComponent } from './components/Pages/Cadastro/cad-certifications/cad-certifications.component';
import { CadWorksComponent } from './components/Pages/Cadastro/cad-works/cad-works.component';
import { CadSchoolingComponent } from './components/Pages/Cadastro/cad-schooling/cad-schooling.component';
import { CadExperienceComponent } from './components/Pages/Cadastro/cad-experience/cad-experience.component';
import { CadtodoComponent } from './components/Pages/Cadastro/cad-to-do/cad-to-do.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabsModule } from 'ngx-bootstrap/tabs'; // Importe o módulo de tabs do ngx-bootstrap
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/Pages/Login/Login.component';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ExperienceComponent,
    SchoolingComponent,
    CertificationsComponent,
    PrincipalComponent,
    SkillsComponent,
    WorksComponent,
    ContactsComponent,
    FooterComponent,
    CadastroComponent,
    CadAboutComponent,
    CadCertificationsComponent,
    CadWorksComponent,
    CadSchoolingComponent,
    CadExperienceComponent,
    CadtodoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    MatButtonModule,
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    }),
    NgbModule


  ],
  providers: [DatePipe, PessoaController, PessoaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
