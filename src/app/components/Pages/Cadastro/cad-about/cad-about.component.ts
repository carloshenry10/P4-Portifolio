import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/Pessoa.service';

@Component({
  selector: 'app-cad-about',
  templateUrl: './cad-about.component.html',
  styleUrls: ['./cad-about.component.css'],
})
export class CadAboutComponent implements OnInit {
  pessoaForm!: FormGroup;
  pessoa?: Pessoa;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    this.initForm(); // Inicializa o formulário primeiro
    this.carregaDados();
  }

  carregaDados() {
    this.pessoaService.pessoaRetorno$.subscribe((pessoas) => {
      // Verifica se há pelo menos uma pessoa no array antes de atribuir a this.pessoa
      if (pessoas.length > 0) {
        this.pessoa = pessoas[0];
        this.atualizarFormulario(); // Atualiza o formulário com os dados da pessoa
      }
    });
  }

  initForm(): void {
    this.pessoaForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      nascimento: ['', Validators.required],
      localidade: ['', Validators.required],
      nacionalidade: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      linkedin: [''],
      skype: [''],
      objetivo: ['', Validators.required],
      funcao: ['', Validators.required],
    });
  }

  atualizarFormulario(): void {
    if (this.pessoa) {
      this.pessoaForm.patchValue({
        id: this.pessoa.id,
        nome: this.pessoa.nome,
        nascimento: this.pessoa.nascimento,
        localidade: this.pessoa.localidade,
        nacionalidade: this.pessoa.nacionalidade,
        celular: this.pessoa.celular,
        email: this.pessoa.email,
        linkedin: this.pessoa.linkedin,
        skype: this.pessoa.skype,
        objetivo: this.pessoa.objetivo,
        funcao: this.pessoa.funcao,
      });
    }
  }

  onSubmit() {
    // Lógica para lidar com o envio do formulário (se necessário)
  }
}
