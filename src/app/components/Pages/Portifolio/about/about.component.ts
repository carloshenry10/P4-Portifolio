import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/Pessoa.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  pessoa?: Pessoa;

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pessoaService.pessoaRetorno$.subscribe(pessoa => {
      this.pessoa = pessoa[0];
    });
  }

  obterMesTraduzido(mes: number): string {
    const mesesTraduzidos = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    return mesesTraduzidos[mes];
  }
}
