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
