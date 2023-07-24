import { Component, TemplateRef } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/Pessoa.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  activeSection: string = 'about'; // Define a seção "about" como ativa inicialmente
  pessoa!:Pessoa;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
  }
  copiarJSONParaClipboard() {
    const jsonString = JSON.stringify(this.pessoa);

    // Copia o JSON para a área de transferência
    navigator.clipboard.writeText(jsonString)
      .then(() => {
        console.log('JSON copiado para a área de transferência com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao copiar JSON para a área de transferência:', error);
      });
  }

}
