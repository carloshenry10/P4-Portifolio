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
