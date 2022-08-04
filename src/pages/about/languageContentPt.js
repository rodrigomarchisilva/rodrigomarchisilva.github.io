const setAge = () => {
  const myBirthDate = new Date(1992, 9, 3);
  const currentDate = new Date();
  var age = currentDate.getFullYear() - myBirthDate.getFullYear();
  const m = currentDate.getMonth() - myBirthDate.getMonth();
  if (m < 0 || (m === 0 && currentDate.getDate() < myBirthDate.getDate())) {
    age--;
  }
  return age;
}

const pageTitle = 'Sobre';

const whoAmI = {
  sectionTitle: 'Quem sou eu?',
  id: 'who-am-i',
  threeKeyObjectList: [
    {
      title: 'Olá!',
      subtitle: `Sou brasileiro, tenho ${setAge()} anos, moro em Jundiaí, São Paulo e estou em transição de carreira. 
      Estudo Desenvolvimento Web Full Stack baseado em JavaScript na Trybe.`,
      description: `Sou apaixonado por aprender e flerto com problemas de lógica. Minha principal métrica é saber se fiz meu máximo. 
      Nas horas vagas, busco conhecimentos que agreguem na carreira e tempo de qualidade com pessoas importantes. Diariamente estudo idiomas novos, pratico musculação e esportes. 
      Gosto de música, desenho, cinema e jogos eletrônicos. Passei por diversas carreiras, como metalurgia, logística e biomedicina, 
      entretanto, retomei minha conexão com a tecnologia ao descobrir o universo da programação e embarcar na Trybe!`,
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