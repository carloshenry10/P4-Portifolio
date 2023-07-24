import { Component } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/Pessoa.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {

  pessoa!: Pessoa | null;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.pessoaRetorno$.subscribe(pessoa => {
      this.pessoa = pessoa[0];
    });
  }

  // carregarPessoa(id: number) {
  //   this.pessoaService.getPessoaById(id).subscribe(
  //     (pessoa: Pessoa) => {
  //       console.log('Dados da pessoa:', pessoa);
  //       this.pessoa = pessoa; // Atribui os dados da pessoa à variável 'pessoa' do componente
  //       // Faça qualquer outra ação necessária com os dados da pessoa, como exibi-los na tela, por exemplo.
  //     },
  //     (error: { mensagem: string, codigo: number }) => {
  //       console.error('Erro ao carregar pessoa', error);
  //     }
  //   );
  // }
}
