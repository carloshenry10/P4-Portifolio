export class Pessoa {
  nome: string;
  nascimento: Date;
  localidade: string;
  nacionalidade: string;
  celular: string;
  email: string;
  linkedin: string;
  skype: string;

  constructor(
    nome: string,
    nascimento: Date,
    localidade: string,
    nacionalidade: string,
    celular: string,
    email: string,
    linkedin: string,
    skype: string
  ) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.localidade = localidade;
    this.nacionalidade = nacionalidade;
    this.celular = celular;
    this.email = email;
    this.linkedin = linkedin;
    this.skype = skype;
  }
}
