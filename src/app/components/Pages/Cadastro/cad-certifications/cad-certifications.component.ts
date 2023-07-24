import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Certifications, Pessoa } from 'src/app/models/Pessoa';
import { CertificationsService } from 'src/app/services/Certifications.service';
import { PessoaService } from 'src/app/services/Pessoa.service';

@Component({
  selector: 'app-cad-certifications',
  templateUrl: './cad-certifications.component.html',
  styleUrls: ['./cad-certifications.component.css'],
})
export class CadCertificationsComponent implements OnInit {
  pessoa?: Pessoa;
  certificationsForm!: FormGroup;
  certifications: Certifications[] = [];
  CertificationAux!: Certifications;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private certificationsService: CertificationsService
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
    this.certificationsForm = this.formBuilder.group({
      ano: ['', Validators.required],
      titulo: ['', Validators.required],
      certificadora: ['', Validators.required],
      certificadoraImg: ['', Validators.required],
      imgLink: [''],
      urlCertificacao: [''],
      imgCertificacao: [''],
      idCertificacao: [''],
    });
  }

  addCertification(): void {
    const ano = this.certificationsForm.get('ano')?.value;
    const titulo = this.certificationsForm.get('titulo')?.value;
    const certificadora = this.certificationsForm.get('certificadora')?.value;
    const certificadoraImg = this.certificationsForm.get('certificadoraImg')?.value;
    const imgLink = this.certificationsForm.get('imgLink')?.value;
    const urlCertificacao = this.certificationsForm.get('urlCertificacao')?.value;
    const imgCertificacao = this.certificationsForm.get('imgCertificacao')?.value;
    const idCertificacao = this.certificationsForm.get('idCertificacao')?.value;

    const newCertificationForm: Certifications = {
      id: 0, // Set to 0 or undefined, depending on how the backend handles new items
      ano: ano,
      titulo: titulo,
      certificadora: certificadora,
      certificadoraImg: certificadoraImg,
      imgLink: imgLink,
      urlCertificacao: urlCertificacao,
      imgCertificacao: imgCertificacao,
      idCertificacao: idCertificacao,
      pessoaId: this.pessoa?.id,
    };

    this.CertificationAux = newCertificationForm;

    this.certificationsService
      .addCertification(newCertificationForm)
      .subscribe((response) => {
        this.pessoa!.certifications.push(response); // Push the new ToDo to the existing array
      });
    this.carregaDados();
  }

  removeCertification(index: number): void {
    const certificationId = this.pessoa!.certifications[index].id!;
    // Chame o serviço para excluir o ToDo do backend
    this.certificationsService
      .deleteCertification(certificationId)
      .subscribe(() => {
        // Remova o ToDo da lista de ToDos da pessoa
        this.pessoa!.certifications.splice(index, 1);
        // Remova o FormGroup do FormArray
      });
  }
}
