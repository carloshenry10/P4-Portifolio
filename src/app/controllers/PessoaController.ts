import {
  Certifications,
  Experience,
  Pessoa,
  Schooling,
  ToDo,
  Works,
} from '../models/Pessoa';

export class PessoaController {
  pessoa!: Pessoa;

  // constructor() {
  //   const tarefas = [
  //     new ToDo('Desenvolvimento em Progress ABL'),
  //     new ToDo('Desenvolvimento de Scripts em SQL'),
  //     new ToDo('Desenvolvimento de Programas Customizaveis TOTVS'),
  //     new ToDo('Desenvolvimento em ASP.Net'),
  //     new ToDo('Suporte em Sistemas TOTVS GPS'),
  //     new ToDo('Suporte em Processos de Operadora de Saúde'),
  //   ];

  //   const experiences = [
  //     new Experience(
  //       new Date(2019, 11, 3),
  //       new Date(2023, 6, 15),
  //       'CONSULTOR DE NEGÓCIO/SISTEMAS OPERADORAS DE SAÚDE | DESENVOLVEDOR PROGRESS/ASP.NET/XAMARIN MOBILE APP',
  //       'PJ - Carlos Henrique Soares Pires - ME',
  //       'Atuei prestando consultoria técnica, de desenvolvimento/inovação e de negócio para operadoras Operadoras de Saúde. A atividade abrange rotinas de elaboração de pareceres, adequação de processos sistêmicos, acompanhamento das resoluções normativas da ANS, desenvolvimento de programas customizáveis PROGRESS e WEB, e principalmente na viabilização do uso do sistema contemplando todas as necessidades da Operadora. Também na elaboração de indicadores e relatórios através do Power BI para empresa MMATH Parafusos & Fixadores e MMATH Peças Agrícolas .',
  //       'Catanduva - SP / Campo Grande - MS'
  //     ),
  //     new Experience(
  //       new Date(2018, 8, 1),
  //       new Date(2019, 9, 30),
  //       'CONSULTOR DE IMPLANTAÇÃO DE SISTEMAS',
  //       'PJ - MV SAÚDE',
  //       'Atuei prestando consultoria técnica e de negócio para operadoras de saúde que aderem ao Sistema SOUL MV, nas áreas de Vendas/Comissionamento, Cadastro e Faturamento de Planos. A atividade contempla rotinas de elaboração de pareceres, adequação de processos sistêmicos, acompanhamento das resoluções normativas da ANS e principalmente na viabilização do uso do sistema contemplando todas as necessidades da Operadora.',
  //       'Caruaru - PE / Belo Horizonte - MG / Rio Branco - AC'
  //     ),
  //     new Experience(
  //       new Date(2013, 8, 1),
  //       new Date(2018, 8, 30),
  //       'ANALISTA DE SUPORTE SISTEMAS',
  //       'Unimed Campo Grande',
  //       'Atuei prestando suporte aos sistemas Gestão de Planos - GPS TOTVS, EMS5, EMS2 e Datasul Planning, também desenvolvia scripts em Progress 4gl, VBA e SQL. Participava de implementações referente a inovações sistêmicas aplicadas ao negócio. O principal foco nesse período era viabilizar soluções e prestar suporte referente a parte da Gestão da Operadora, desde a parte assistencial do negócio (Guias, execuções, contas médicas, rede credenciada) até a parte de controladoria (Contábil, Planejamento Orçamentário, Finanças, Tesouraria e etc.). Atuei diretamente nos projetos de atendimento e viabilização das responsabilidades ficais e regulatórias da operadora (DMED, DIRF, SPEED ECD e ECF, IN32, SIB, tributação entre outras).',
  //       'Campo Grande - MS'
  //     ),
  //     new Experience(
  //       new Date(2015, 8, 1),
  //       new Date(2018, 7, 30),
  //       'ANALISTA DE AUDITORIA INTERNA',
  //       'Unimed Campo Grande',
  //       'Atuei prestando consultoria técnica, de desenvolvimento/inovação e de negócio para operadoras de saúde que aderem ao Sistema GPS TOTVS. A atividade contempla rotinas de elaboração de pareceres, adequação de processos sistêmicos, acompanhamento das resoluções normativas da ANS, desenvolvimento de programas customizáveis PROGRESS e WEB, e principalmente na viabilização do uso do sistema contemplando todas as necessidades da Operadora.',
  //       'Campo Grande - MS'
  //     ),
  //     new Experience(
  //       new Date(2013, 8, 1),
  //       new Date(2015, 8, 30),
  //       'ANALISTA DE SUPORTE SISTEMAS',
  //       'Unimed Campo Grande',
  //       'Atuei prestando suporte aos sistemas Gestão de Planos - GPS TOTVS, EMS5, EMS2 e Datasul Planning, também desenvolvia scripts em Progress 4gl, VBA e SQL. Participava de implementações referente a inovações sistêmicas aplicadas ao negócio. O principal foco nesse período era viabilizar soluções e prestar suporte referente a parte da Gestão da Operadora, desde a parte assistencial do negócio (Guias, execuções, contas médicas, rede credenciada) até a parte de controladoria (Contábil, Planejamento Orçamentário, Finanças, Tesouraria e etc.). Atuei diretamente nos projetos de atendimento e viabilização das responsabilidades ficais e regulatórias da operadora (DMED, DIRF, SPEED ECD e ECF, IN32, SIB, tributação entre outras).',
  //       'Campo Grande - MS'
  //     ),
  //     new Experience(
  //       new Date(2012, 5, 1),
  //       new Date(2013, 8, 30),
  //       'AUXILIAR DE ATENDIMENTO',
  //       'Unimed Campo Grande',
  //       'Atendimento ao cliente e rotinas administrativas.',
  //       'Campo Grande - MS'
  //     ),
  //   ];

  //   const schoolings = [
  //     new Schooling(
  //       2023,
  //       'Pós-Graduação',
  //       'Ciência de Dados e Big Data',
  //       'Faculdade UNIASP',
  //       'assets/images/instituicao/uniasp.png',
  //       'Cursando',
  //       'Primeiro Semestre Conclusão em Dezembro de 2023'
  //     ),
  //     new Schooling(
  //       2023,
  //       'Pós-Graduação',
  //       'LGPD, Privacidade e Proteção de Dados',
  //       'Faculdade UNIASP',
  //       'assets/images/instituicao/uniasp.png',
  //       'Cursando',
  //       'Primeiro Semestre Conclusão em Dezembro de 2023'
  //     ),
  //     new Schooling(
  //       2023,
  //       'MBA',
  //       'Gestão em Tecnologia da Informação',
  //       'Faculdade Alphaville',
  //       'assets/images/instituicao/alphaville.png',
  //       'Cursando',
  //       'Primeiro Semestre Conclusão em Dezembro de 2023'
  //     ),
  //     new Schooling(
  //       2023,
  //       'Graduação',
  //       'Processos Gerenciais - (Segunda Graduação)',
  //       'UCA - Faculdade Católica Paulista',
  //       'assets/images/instituicao/uca.png',
  //       'Cursando',
  //       'Segundo Semestre Conclusão em Dezembro de 2023'
  //     ),
  //     new Schooling(
  //       2022,
  //       'Graduação',
  //       'Análise e Desenvolvimento de Sistemas',
  //       'UCA - Faculdade Católica Paulista',
  //       'assets/images/instituicao/uca.png',
  //       'Concluído',
  //       'Conclusão em Dezembro de 2022'
  //     ),
  //   ];

  //   const certifications = [
  //     new Certifications(
  //       2023,
  //       'BUSINESS MODEL CANVAS ESSENTIALS PROFESSIONAL CERTIFICATION BMCEPC™',
  //       'CertiPro',
  //       'assets/images/instituicao/certipro.png',
  //       'assets/images/87479975.png',
  //       'https://www.credly.com/badges/eb77076d-1cc4-4fcc-b81d-f4017ae52d11/public_url',
  //       'assets/images/87479975.png',
  //       'Certificação ID 87479975'
  //     ),
  //     new Certifications(
  //       2023,
  //       'FUNDAMENTOS EM CIBERSEGURANÇA',
  //       'IBSEC - Instituto Brasileiro de Cibersegurança',
  //       'assets/images/instituicao/ibsec.png',
  //       'assets/images/bc10123f461225c7.png',
  //       'https://certs.ibsec.com.br?cert_hash=bc10123f461225c7',
  //       'assets/images/bc10123f461225c7.png',
  //       'Certificação ID bc10123f461225c7'
  //     ),
  //     new Certifications(
  //       2023,
  //       'Lean Six Sigma White Belt Professional Certification - LSSWBPC™',
  //       'CertiPro',
  //       'assets/images/instituicao/certipro.png',
  //       'assets/images/87182291.png',
  //       'https://www.credly.com/badges/f583a32d-5a38-4e7b-8215-ece7dc2f1860/public_url',
  //       'assets/images/87182291.png',
  //       'Certificação ID 87182291'
  //     ),
  //     new Certifications(
  //       2023,
  //       'Business Intelligence Foundation Professional Certification - BIFPC™',
  //       'CertiPro',
  //       'assets/images/instituicao/certipro.png',
  //       'assets/images/84459304.png',
  //       'https://www.credly.com/badges/06afb1a0-78c9-4eed-bf60-505a3279f198/public_url',
  //       'assets/images/84459304.png',
  //       'Certificação ID 84459304'
  //     ),
  //     new Certifications(
  //       2022,
  //       'FUNDAMENTOS NA LEI GERAL DE PROTEÇÃO DE DADOS - LGPDF™',
  //       'CertiPro',
  //       'assets/images/instituicao/certipro.png',
  //       'assets/images/79141001.png',
  //       'https://www.credly.com/badges/eb77076d-1cc4-4fcc-b81d-f4017ae52d11/public_url',
  //       'assets/images/79141001.png',
  //       'Certificação ID 79141001'
  //     ),
  //     new Certifications(
  //       2022,
  //       'Scrum Foundation Professional Certificate - SFPC™ (v2020)',
  //       'CertiPro',
  //       'assets/images/instituicao/certipro.png',
  //       'assets/images/79142615.png',
  //       'https://www.credly.com/badges/35ebecfb-ec89-464e-ab4c-7c4da5b411c1/public_url',
  //       'assets/images/79142615.png',
  //       'Certificação ID 79142615'
  //     ),
  //     new Certifications(
  //       2022,
  //       'Remote Work and Virtual Collaboration Certificate - RWVCPC™',
  //       'CertiPro',
  //       'assets/images/instituicao/certipro.png',
  //       'assets/images/79148067.png',
  //       'https://www.credly.com/badges/eb77076d-1cc4-4fcc-b81d-f4017ae52d11/public_url',
  //       'assets/images/79148067.png',
  //       'Certificação ID 79148067'
  //     ),
  //   ];

  //   const works = [
  //     new Works(
  //       'web, progress',
  //       'assets/images/works/portfolio-1d.jpg',
  //       'assets/images/works/portfolio-1.jpg',
  //       'Gestão de Pagamentos'
  //     ),
  //     new Works(
  //       'web, progress',
  //       'assets/images/works/portfolio-2d.jpg',
  //       'assets/images/works/portfolio-2.jpg',
  //       'Portal TISS - XML'
  //     ),
  //     new Works(
  //       'progress',
  //       'assets/images/works/portfolio-3d.jpg',
  //       'assets/images/works/portfolio-3.jpg',
  //       'Programas Customizados PROGRESS ABL'
  //     ),
  //     new Works(
  //       'web',
  //       'assets/images/works/portfolio-4d.jpg',
  //       'assets/images/works/portfolio-4.jpg',
  //       'Plataforma Palpite Premiado - Operadora de Saúde'
  //     ),
  //     new Works(
  //       'mobile, progress',
  //       'assets/images/works/portfolio-5d.jpg',
  //       'assets/images/works/portfolio-5.jpg',
  //       'App Cooperados - Operadora de Saúde'
  //     ),
  //     new Works(
  //       'mobile',
  //       'assets/images/works/portfolio-6d.jpg',
  //       'assets/images/works/portfolio-6.jpg',
  //       'App GameNOver - Projeto PF'
  //     ),
  //     new Works(
  //       'mobile',
  //       'assets/images/works/portfolio-7d.jpg',
  //       'assets/images/works/portfolio-7.jpg',
  //       'App FastUI - Projeto PF'
  //     ),
  //     new Works(
  //       'powerbi',
  //       'assets/images/works/portfolio-8d.jpg',
  //       'assets/images/works/portfolio-8.jpg',
  //       'Indicador de Vendas'
  //     ),
  //     new Works(
  //       'powerbi',
  //       'assets/images/works/portfolio-9d.jpg',
  //       'assets/images/works/portfolio-9.jpg',
  //       'Indicador de Vendas x Custos'
  //     )

  //   ];

  //   this.pessoa = new Pessoa(
  //     'Carlos Henrique Soares Pires',
  //     new Date(1985, 6, 7),
  //     'Catanduva - SP',
  //     'Brasileiro',
  //     '(67) 98196-2036',
  //     'carlos.henry.sp@gmail.com',
  //     'https://www.linkedin.com/in/carlos-henrique-soares-pires-1786b5a9/', // LinkedIn
  //     'carloshenry', // Skype,
  //     'Colaborar em um ambiente de trabalho dinâmico, onde possa aplicar e aprimorar meus conhecimentos, com foco em metas e resultados. Tenho interesse em atuar na área de Tecnologia da Informação, utilizando tanto minhas habilidades técnicas como meu entendimento dos aspectos de negócio, de forma a contribuir de maneira efetiva para o sucesso da equipe e da organização.',
  //     'Consultor de Negócio/Sistemas - Operadoras de Saúde (Desenvolvedor Progress/ASP.Net/Xamarin Mobile App)',
  //     tarefas,
  //     experiences,
  //     schoolings,
  //     certifications,
  //     works
  //   );
  // }



}
