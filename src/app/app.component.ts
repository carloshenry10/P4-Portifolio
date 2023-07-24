import { Component } from '@angular/core';
import { PessoaService } from './services/Pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio-app';

  constructor(public pessoaService: PessoaService){};
  ngOnInit(): void {
    this.carregarPessoa(1); // Carrega a pessoa com ID 1 (ou o ID que desejar)
  }

  carregarPessoa(id: number): void {
    this.pessoaService.getPessoaById(id);
  }
}
