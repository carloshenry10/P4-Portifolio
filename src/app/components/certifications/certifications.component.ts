import { Component } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/Pessoa.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {

  pessoa!: Pessoa;
  constructor(public pessoaService: PessoaService) { }
  ngOnInit() {
    this.pessoa = this.pessoaService.getPessoa();
  }
}
