import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pessoa, Works } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/Pessoa.service';
import { WorksService } from 'src/app/services/Works.service';

@Component({
  selector: 'app-cad-works',
  templateUrl: './cad-works.component.html',
  styleUrls: ['./cad-works.component.css'],
})
export class CadWorksComponent implements OnInit {
  pessoa?: Pessoa;
  worksForm!: FormGroup;

  works: Works[] = [];
  worksAux!: Works;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private worksService: WorksService
  ) {}

  ngOnInit(): void {
    this.carregaDados();
    this.initForm(); // Chama o initForm apenas após atribuir a this.pessoa
  }

  carregaDados() {
    this.pessoaService.pessoaRetorno$.subscribe((pessoas) => {
      // Verifica se há pelo menos uma pessoa no array antes de atribuir a this.pessoa
      if (pessoas.length > 0) {
        this.pessoa = pessoas[0];
      }
    });
  }

  private initForm(): void {
    this.worksForm = this.formBuilder.group({
      grupo: ['', Validators.required],
      imgLink: [''],
      imgWork: [''],
      nome: ['', Validators.required],
    });
  }

  addWork(): void {
    const grupo = this.worksForm.get('grupo')?.value;
    const imgLink = this.worksForm.get('imgLink')?.value;
    const imgWork = this.worksForm.get('imgWork')?.value;
    const nome = this.worksForm.get('nome')?.value;

    const newWorkForm: Works = {
      id: 0, // Set to 0 or undefined, depending on how the backend handles new items

      grupo: grupo,
      imgLink: imgLink,
      imgWork: imgWork,
      nome: nome,
      pessoaId: this.pessoa?.id,
    };

    this.worksAux = newWorkForm;

    this.worksService.addWork(newWorkForm).subscribe((response) => {
      this.pessoa!.works.push(response); // Push the new ToDo to the existing array
    });
    this.carregaDados();
  }

  removeWork(index: number): void {
    const workId = this.pessoa!.works[index].id!;
    // Chame o serviço para excluir o ToDo do backend
    this.worksService.deleteWork(workId).subscribe(() => {
      // Remova o ToDo da lista de ToDos da pessoa
      this.pessoa!.works.splice(index, 1);
      // Remova o FormGroup do FormArray
    });
  }
}
