export class Certifications {
  ano: string;
  titulo: string;
  certificadora: string;
  imgLink: string;
  urlCertificacao: string;
  imgCertificacao: string;
  idCertificacao: string;

  constructor(
    ano: string,
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
