import { Component } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/Pessoa.service';

@Component({
  selector: 'app-schooling',
  templateUrl: './schooling.component.html',
  styleUrls: ['./schooling.component.css']
})
export class SchoolingComponent {
  pessoa!: Pessoa;
  constructor(public pessoaService: PessoaService) {}
  ngOnInit() {
    this.pessoa = this.pessoaService.getPessoa();
  }

}
