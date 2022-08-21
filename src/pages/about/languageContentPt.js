import setAge from './setAge';

const pageTitle = 'Sobre';

const whoAmI = {
  sectionTitle: 'Quem sou eu?',
  id: 'who-am-i',
  threeKeyObjectList: [
    {
      title: 'Olá!',
      subtitle: `Sou brasileiro, tenho ${setAge()} anos, moro em Jundiaí, São Paulo e estou em transição de carreira. 
      Finalizei o curso de Desenvolvimento Web Full Stack JavaScript na Trybe e tenho buscado uma vaga na área.`,
      description: `Gosto de aprender novas coisas, e ao longo da minha carreira, tentei seguir um caminho em que eu estivesse sempre 
      fazendo isso. Junto a minha paixão por desafios e tecnologia, e experiência com Excel, isso me levou a buscar a programação. 
      Meu objetivo é me superar diariamente. Nas horas vagas, pratico musculação e esportes, como futebol, jiu-jitsu e boxe. 
      Também me interesso por jogos, música (guitarrista/cantor) e desenho. Passei pela metalurgia, logística (onde trabalhei com Excel), 
      aviação e biomedicina, mas me contrei novamente com o desenvolvimento de software. Através de Trybe e por conta própria, aprendi 
      muito sobre JavaScript, e desejo continuar aprendendo mais. Mas... tenho a disposição e vontade para aprender novas coisas se necessário!`,
    },
  ],
};

const education = {
  sectionTitle: 'Educação',
  id: 'education',
  threeKeyObjectList: [
    {
      title: 'UniAnchieta (Jul 2015 – Jul 2019)',
      subtitle: 'Bacharel em Biomedicina',
      description: ' Habilitado em Imagenologia e Análises Clínicas.',
    },
  ],
};

const languages = {
  sectionTitle: 'Idiomas',
  id: 'languages',
  threeKeyObjectList: [
    {
      title: 'Português',
      subtitle: 'Fluente',
      description: 'Idioma nativo.',
    },
    {
      title: 'Inglês',
      subtitle: 'Avançado/fluente',
      description: 'Formado no Master\'s Program da escola UPTIME.'
    },
    {
      title: 'Espanhol',
      subtitle: 'Iniciante',
      description: 'Estudando por conta através do site Busuu.'
    },
  ],
};

const experiences = {
  sectionTitle: 'Experiências',
  id: 'experiences',
  threeKeyObjectList: [
    {
      title: 'UNICAMP (Out 2019 – Set 2020)',
      subtitle: 'Bolsista FAPESP (Treinamento Técnico III) em Hemoglobinopatias',
      description: 'Administração de recursos do laboratório, responsável pela rotina de exames e instrução de novos pesquisadores.',
    },
    {
      title: 'UNICAMP (Fev 2019 – Jun 2019)',
      subtitle: 'Estágiário de Medicina Nuclear',
      description: 'Instrução dos pacientes, preparação dos equipamentos, realização de exames de imagem e contato com médicos residentes.',
    },
    {
      title: 'LPC Biológico LTDA (Mai 2018 – Set 2018)',
      subtitle: 'Estágiário em Análises Clínicas e Auxiliar Técnico de Laboratório',
      description: 'Além de atribuições biomédicas laboratoriais, período de atuação na recepção e de acompanhamento da rotina de coletas.',
    },
    {
      title: 'DHL Logistics Brazil LTDA (Nov 2011 - Jan 2014)',
      subtitle: 'Assistente de Transportes e Assistente de Tráfego',
      description: 'Identificação e cobrança de notas fiscais em haver, interação com motoristas/operação e montagem de listas de separação, utilizando majoritariamente Excel.',
    },
    {
      title: 'DHL Logistics Brazil LTDA (Out 2011 - Out 2012)',
      subtitle: 'Auxiliar de Armazém',
      description: 'Separador na operação, tendo passagem por todo fluxo de entrada, saída e restauração de produtos.',
    },
    {
      title: 'Alpino Indústria Metalúrgica LTDA (Mar 2008 – Jan 2010)',
      subtitle: 'Aprendiz de Ferramentaria',
      description: 'Desenvolvimento de gabaritos de teste para peças tubulares, utilizando uma ampla gama de ferramentas padrão da usinagem.',
    },
  ],
};

const sections = [whoAmI, education, languages, experiences];

const languageContent = {
  pageTitle,
  sections,
};

export default languageContent;