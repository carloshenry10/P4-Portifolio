import { Injectable } from '@angular/core';
import { Pessoa } from '../models/Pessoa';
import { PessoaController } from '../controllers/PessoaController';

@Injectable()
export class PessoaService {
  constructor(
    public pessoaController: PessoaController,
  ) {}

  getPessoa(): Pessoa {
    return this.pessoaController.pessoa;
  }

}
