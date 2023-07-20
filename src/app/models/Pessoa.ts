export class Pessoa {
  nome: string;
  nascimento: Date;
  localidade: string;
  nacionalidade: string;
  celular: string;
  email: string;
  linkedin: string;
  skype: string;
  objetivo: string;
  funcao:string;
  todo: ToDo[];
  experience:Experience[];
  schooling:Schooling[];
  certifications:Certifications[];
  works:Works[];

  constructor(
    nome: string,
    nascimento: Date,
    localidade: string,
    nacionalidade: string,
    celular: string,
    email: string,
    linkedin: string,
    skype: string,
    objetivo: string,
    funcao: string,
    todo:ToDo[],
    experience:Experience[],
    schooling:Schooling[],
    certifications:Certifications[],
    works:Works[]
  ) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.localidade = localidade;
    this.nacionalidade = nacionalidade;
    this.celular = celular;
    this.email = email;
    this.linkedin = linkedin;
    this.skype = skype;
    this.objetivo = objetivo;
    this.funcao = funcao;
    this.todo = todo;
    this.experience = experience;
    this.schooling = schooling;
    this.certifications = certifications;
    this.works = works;

  }
}

export class ToDo {
  do: string;

  constructor(doItem: string) {
    this.do = doItem;
  }
}



export class Experience {
  dtIni: Date;
  dtFim: Date;
  cargo: string;
  empresa: string;
  descricao: string;
  localizacao: string;

  constructor(
    dtIni: Date,
    dtFim: Date,
    cargo: string,
    empresa: string,
    descricao: string,
    localizacao: string
  ) {
    this.dtIni = dtIni;
    this.dtFim = dtFim;
    this.cargo = cargo;
    this.empresa = empresa;
    this.descricao = descricao;
    this.localizacao = localizacao;
  }
}

export class Schooling {
  anoFim: number;
  curso: string;
  instituicao: string;
  status: string;
  conclusao: string;

  constructor(
    anoFim: number,
    curso: string,
    instituicao: string,
    status: string,
    conclusao: string
  ) {
    this.anoFim = anoFim;
    this.curso = curso;
    this.instituicao = instituicao;
    this.status = status;
    this.conclusao = conclusao;
  }
}


export class Certifications {
  ano: number;
  titulo: string;
  certificadora: string;
  imgLink: string;
  urlCertificacao: string;
  imgCertificacao: string;
  idCertificacao: string;

  constructor(
    ano: number,
    titulo: string,
    certificadora: string,
    imgLink: string,
    urlCertificacao: string,
    imgCertificacao: string,
    idCertificacao: string
  ) {
    this.ano = ano;
    this.titulo = titulo;
    this.certificadora = certificadora;
    this.imgLink = imgLink;
    this.urlCertificacao = urlCertificacao;
    this.imgCertificacao = imgCertificacao;
    this.idCertificacao = idCertificacao;
  }
}

export class Works {
  grupo: string;
  imgLink: string;
  imgWork: string;
  nome: string;

  constructor(grupo: string, imgLink: string, imgWork: string, nome: string) {
    this.grupo = grupo;
    this.imgLink = imgLink;
    this.imgWork = imgWork;
    this.nome = nome;
  }
}
