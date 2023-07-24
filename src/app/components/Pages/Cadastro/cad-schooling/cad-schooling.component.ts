import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Pessoa, Schooling, University } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/Pessoa.service';
import { SchoolingService } from 'src/app/services/Schooling.service';
import { UniversityService } from 'src/app/services/University.service';

@Component({
  selector: 'app-cad-schooling',
  templateUrl: './cad-schooling.component.html',
  styleUrls: ['./cad-schooling.component.css'],
})
export class CadSchoolingComponent implements OnInit {
  pessoa?: Pessoa;
  schoolingForm!: FormGroup;
  schooling: Schooling[] = [];
  newSchoolingAux!: Schooling;
  searchControl = new FormControl();

  showSuggestions = false;
  suggestions: University[] = [];




  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private schoolingService: SchoolingService,
    private universityService: UniversityService
  ) {this.setupAutocomplete();}

  ngOnInit(): void {
    this.initForm();
    this.carregaDados();
  }

  carregaDados() {
    this.pessoaService.pessoaRetorno$.subscribe((pessoas) => {
      if (pessoas.length > 0) {
        this.pessoa = pessoas[0];
      }
    });
  }

  private initForm(): void {
    this.schoolingForm = this.formBuilder.group({
      anoFim: [''],
      tipoCurso: [''],
      curso: [''],
      instituicao: [''],
      instituicaoImg: [''],
      status: [''],
      conclusao: [''],
    });
  }

  addSchooling(): void {
    if (this.schoolingForm.valid) {
      const newSchooling: Schooling = {
        id: 0,
        anoFim: this.schoolingForm.value.anoFim,
        tipoCurso: this.schoolingForm.value.tipoCurso,
        curso: this.schoolingForm.value.curso,
        instituicao: this.schoolingForm.value.instituicao,
        instituicaoImg: this.schoolingForm.value.instituicaoImg,
        status: this.schoolingForm.value.status,
        conclusao: this.schoolingForm.value.conclusao,
        pessoaId: this.pessoa?.id,
      };

      this.newSchoolingAux = newSchooling;

      this.schoolingService.addSchooling(newSchooling).subscribe((response) => {
        this.pessoa!.schooling.push(response);
        this.schoolingForm.reset();
      });


    }
  }

  removeSchooling(index: number): void {
    const schoolingId = this.pessoa!.schooling[index].id!;
    this.schoolingService.deleteSchooling(schoolingId).subscribe(() => {
      this.pessoa!.schooling.splice(index, 1);
    });
  }




  setupAutocomplete() {
    this.searchControl.valueChanges.pipe(
      debounceTime(30), // Tempo de espera após o usuário digitar (milissegundos)
      distinctUntilChanged(), // Ignora o valor se for o mesmo que o anterior
      switchMap((query: string) => this.universityService.getUniversitiesByName(query))
    ).subscribe((results: University[]) => {
      this.suggestions = results;
      this.showSuggestions = this.suggestions.length > 0;
    });
  }

  onSearch() {
    this.showSuggestions = this.searchControl.value.length > 0;
  }

  onBlur() {
    this.showSuggestions = false;
  }

  selectSuggestion(suggestion: University) {
    console.log("entrei selectSuggestion");
    this.searchControl.setValue(suggestion.nome);
    this.showSuggestions = false;
  }



























}
