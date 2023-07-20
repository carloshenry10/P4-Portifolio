import { Component } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/Pessoa.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  pessoa!: Pessoa;
  constructor(public pessoaService: PessoaService) {}
  ngOnInit() {
    this.pessoa = this.pessoaService.getPessoa();
  }

  getGroups(grupo: string): string {
    const groups = ['all', 'identety', ...grupo.split(',').map(item => item.trim())];
    return JSON.stringify(groups).replace(/"/g, '"');
  }
}
