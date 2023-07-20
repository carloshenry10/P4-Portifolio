import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/Pessoa.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   pessoa!: Pessoa;
   constructor(public pessoaService: PessoaService) { }
   ngOnInit() {
     this.pessoa = this.pessoaService.getPessoa();
   }

  obterMesTraduzido(mes: number): string {
    const mesesTraduzidos = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    return mesesTraduzidos[mes];
  }

}
