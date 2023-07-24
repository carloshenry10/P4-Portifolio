import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience, Pessoa } from 'src/app/models/Pessoa';
import { ExperienceService } from 'src/app/services/Experience.service';
import { PessoaService } from 'src/app/services/Pessoa.service';

@Component({
  selector: 'app-cad-experience',
  templateUrl: './cad-experience.component.html',
  styleUrls: ['./cad-experience.component.css'],
})
export class CadExperienceComponent implements OnInit {
  pessoa?: Pessoa;
  experienceForm!: FormGroup;

  experiences: Experience[] = [];
  ExperienceAux!: Experience;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private experienceService:ExperienceService
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
    this.experienceForm = this.formBuilder.group({
      dtIni: ['', Validators.required],
      dtFim: [''],
      cargo: ['', Validators.required],
      empresa: ['', Validators.required],
      descricao: [''],
      localizacao: [''],
    });
  }

  addExperience(): void {

    const dtIni = this.experienceForm.get('dtIni')?.value;
    const dtFim = this.experienceForm.get('dtFim')?.value;
    const cargo = this.experienceForm.get('cargo')?.value;
    const empresa = this.experienceForm.get('empresa')?.value;
    const descricao = this.experienceForm.get('descricao')?.value;
    const localizacao = this.experienceForm.get('localizacao')?.value;


    if (this.experienceForm.valid) {
      const newExperienceForm: Experience = {
        id: 0, // Set to 0 or undefined, depending on how the backend handles new items
        dtIni: dtIni,
        dtFim: dtFim,
        cargo: cargo,
        empresa: empresa,
        descricao: descricao,
        localizacao: localizacao,
        pessoaId:this.pessoa?.id
      };

      this.ExperienceAux = newExperienceForm;

       this.experienceService.addExperience(newExperienceForm).subscribe((response) => {
         this.pessoa!.experience.push(response); // Push the new ToDo to the existing array
       });
    }
    this.carregaDados();
  }


  removeExperience(index: number): void {
    const experienceId = this.pessoa!.experience[index].id!;
    // Chame o serviço para excluir o ToDo do backend
    this.experienceService.deleteExperience(experienceId).subscribe(() => {
      // Remova o ToDo da lista de ToDos da pessoa
      this.pessoa!.experience.splice(index, 1);
      // Remova o FormGroup do FormArray
    });
  }

}
