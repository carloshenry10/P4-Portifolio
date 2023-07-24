export class Pessoa {
  id?: number;
  nome: string;
  nascimento: string;
  localidade: string;
  nacionalidade: string;
  celular: string;
  email: string;
  linkedin: string;
  skype: string;
  objetivo: string;
  funcao: string;
  todo: ToDo[];
  experience: Experience[];
  schooling: Schooling[];
  certifications: Certifications[];
  works: Works[];

  constructor(
    id: number,
    nome: string,
    nascimento: string,
    localidade: string,
    nacionalidade: string,
    celular: string,
    email: string,
    linkedin: string,
    skype: string,
    objetivo: string,
    funcao: string,
    todo: ToDo[],
    experience: Experience[],
    schooling: Schooling[],
    certifications: Certifications[],
    works: Works[]
  ) {
    this.id = id;
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
  id?: number;
  do: string;
  pessoaId?: number;

  constructor(id: number, doItem: string, pessoaId: number) {
    this.id = id;
    this.do = doItem;
    this.pessoaId = pessoaId;
  }
}

export class Experience {
  id?: number;
  dtIni: string;
  dtFim: string;
  cargo: string;
  empresa: string;
  descricao: string;
  localizacao: string;
  pessoaId?: number;

  constructor(
    id: number,
    dtIni: string,
    dtFim: string,
    cargo: string,
    empresa: string,
    descricao: string,
    localizacao: string,
    pessoaId: number
  ) {
    this.id = id;
    this.dtIni = dtIni;
    this.dtFim = dtFim;
    this.cargo = cargo;
    this.empresa = empresa;
    this.descricao = descricao;
    this.localizacao = localizacao;
    this.pessoaId = pessoaId;
  }
}

export class Schooling {
  id?: number;
  anoFim: number;
  tipoCurso: string;
  curso: string;
  instituicao: string;
  instituicaoImg: string;
  status: string;
  conclusao: string;
  pessoaId?: number;
  university?: University

  constructor(
    id: number,
    anoFim: number,
    tipoCurso: string,
    curso: string,
    instituicao: string,
    instituicaoImg: string,
    status: string,
    conclusao: string,
    pessoaId: number,
    university?: University

  ) {
    this.id = id;
    this.anoFim = anoFim;
    this.tipoCurso = tipoCurso;
    this.curso = curso;
    this.instituicao = instituicao;
    this.instituicaoImg = instituicaoImg;
    this.status = status;
    this.conclusao = conclusao;
    this.pessoaId = pessoaId;
    this.university = university;
  }
}

export class Certifications {
  id?: number;
  ano: number;
  titulo: string;
  certificadora: string;
  certificadoraImg: string;
  imgLink: string;
  urlCertificacao: string;
  imgCertificacao: string;
  idCertificacao: string;
  pessoaId?: number;

  constructor(
    id: number,
    ano: number,
    titulo: string,
    certificadora: string,
    certificadoraImg: string,
    imgLink: string,
    urlCertificacao: string,
    imgCertificacao: string,
    idCertificacao: string,
    pessoaId: number
  ) {
    this.id = id;
    this.ano = ano;
    this.titulo = titulo;
    this.certificadora = certificadora;
    this.certificadoraImg = certificadoraImg;
    this.imgLink = imgLink;
    this.urlCertificacao = urlCertificacao;
    this.imgCertificacao = imgCertificacao;
    this.idCertificacao = idCertificacao;
    this.pessoaId = pessoaId;
  }
}

export class Works {
  id?: number;
  grupo: string;
  imgLink: string;
  imgWork: string;
  nome: string;
  pessoaId?: number;

  constructor(
    id: number,
    grupo: string,
    imgLink: string,
    imgWork: string,
    nome: string,
    pessoaId: number
  ) {
    this.id = id;
    this.grupo = grupo;
    this.imgLink = imgLink;
    this.imgWork = imgWork;
    this.nome = nome;
    this.pessoaId = pessoaId;
  }
}

export class University {
  id?: number;
  nome: string;
  sigla: string;
  uf: string;
  img: string;
  schoolingId?: number;
  constructor(
    id: number,
    nome: string,
    sigla: string,
    uf: string,
    img: string,
    schoolingId: number
  ) {
    this.id = id;
    this.nome = nome;
    this.sigla = sigla;
    this.uf = uf;
    this.img = img;
    this.schoolingId = schoolingId;
  }
}
