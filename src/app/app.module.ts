import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SchoolingComponent } from './components/schooling/schooling.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { PessoaService } from './services/Pessoa.service';
import { PessoaController } from './controllers/PessoaController';
import { CommonModule, DatePipe } from '@angular/common';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [DatePipe,PessoaController,PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
