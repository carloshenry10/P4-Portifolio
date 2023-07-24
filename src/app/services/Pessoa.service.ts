import { Injectable } from '@angular/core';
import { Pessoa } from '../models/Pessoa';
import { PessoaController } from '../controllers/PessoaController';
import { BehaviorSubject, Observable, filter, map, of, take, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PessoaService {
  pessoaRetorno$!: Observable<Pessoa[]>;


  constructor(
    public pessoaController: PessoaController,
    private http: HttpClient
  ) {}

  private apiUrl = 'http://localhost:5267/api/Pessoa'; // Substitua pela URL da sua API

  // Método para obter todas as pessoas
  getAllPessoas(): Observable<Pessoa[]> {

    if (!this.pessoaRetorno$) {
      // Se a variável ainda não estiver populada, faz a requisição HTTP
      this.pessoaRetorno$ = this.http.get<Pessoa[]>(this.apiUrl).pipe(
        take(1),
        tap((pessoas) => {
          // Atribui o valor ao pessoaRetorno quando o Observable for concluído
          this.pessoaRetorno$ = of(pessoas);
        })
      );
    }
    return this.pessoaRetorno$;
  }

  getPessoaById(id: number): Observable<Pessoa> {
    if (!this.pessoaRetorno$) {
      // Se a variável ainda não estiver populada, faz a requisição HTTP
      this.pessoaRetorno$ = this.http.get<Pessoa[]>(`${this.apiUrl}`).pipe(
        take(1),
        tap((pessoas) => {
          // Atribui o valor ao pessoaRetorno quando o Observable for concluído
          this.pessoaRetorno$ = of(pessoas);
        })
      );
    }

    // Filtra a lista de pessoas para obter apenas a pessoa desejada pelo ID
    return this.pessoaRetorno$.pipe(
      map((pessoas) => pessoas.find(pessoa => pessoa.id === id)),
      filter((pessoa) => pessoa !== undefined), // Filtra para garantir que a pessoa não seja undefined
      map((pessoa) => pessoa as Pessoa) // Converte a pessoa para o tipo Pessoa
    );
  }







  // Método para adicionar uma nova pessoa
  addPessoa(pessoa: Pessoa): Observable<Pessoa> {
    console.log('addPessoa');
    console.log(pessoa);
    return this.http.post<Pessoa>(this.apiUrl, pessoa).pipe(take(1));
  }

  // Método para atualizar uma pessoa existente
  updatePessoa(id: number, pessoa: Pessoa): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, pessoa).pipe(take(1));
  }

  // Método para deletar uma pessoa
  deletePessoa(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(take(1));
  }

}
