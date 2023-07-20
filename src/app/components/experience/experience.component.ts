import { Component } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/Pessoa.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  pessoa!: Pessoa;
  constructor(public pessoaService: PessoaService) {}
  ngOnInit() {
    this.pessoa = this.pessoaService.getPessoa();
  }

  
}
