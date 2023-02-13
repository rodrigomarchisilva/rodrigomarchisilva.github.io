import setAge from './setAge';

const pageTitle = 'Sobre';

const whoAmI = {
  sectionTitle: 'Quem sou eu?',
  id: 'who-am-i',
  threeKeyObjectList: [
    {
      title: 'Olá!',
      subtitle: `Sou brasileiro, tenho ${setAge()} anos, moro em Jundiaí, São Paulo e estou em transição de carreira. 
      Finalizei o curso de Desenvolvimento Web Full Stack JavaScript na Trybe e hoje busco uma vaga na área.`,
      description: `Gosto de adquirir novos conhecimentos e sou apaixonado por lógica e tecnologia, o que me levou a buscar a programação. 
      Iniciei meus estudos em janeiro de 2021, e desde então, venho conciliando teoria e prática para me aperfeiçoar diariamente. 
      Nas horas vagas, pratico musculação e também me interesso por jogos, música (guitarrista/cantor) e desenho. 
      Passei pela metalurgia, logística (onde trabalhei com Excel), aviação e biomedicina, onde adquiri habilidades profissionais 
      que pretendo colocar em prática como desenvolvedor de software. Através da Trybe e por conta própria, mergulhei no universo do JavaScript, 
      porém, apesar de gostar muito dessa linguagem, meu interesse não se limita apenas a ela. Estou sempre disposto a aprender!`,
    },
  ],
};

const education = {
  sectionTitle: 'Educação',
  id: 'education',
  threeKeyObjectList: [
    {
      title: 'UNINOVE (Jan 2023 – Jun 2025)',
      subtitle: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      description: `Curso EaD que tem como objetivo formar profissionais para projetar, 
      implementar e manter sistemas e aplicativos de software, usando as tecnologias e 
      metodologias mais atuais do mercado. O currículo abrange tópicos como programação, 
      banco de dados, engenharia de software e gerenciamento de projetos, entre outros, 
      fornecendo aos estudantes uma compreensão abrangente do processo de desenvolvimento 
      de software.`,
    },
    {
      title: 'Trybe (Mai 2021 – Ago 2022)',
      subtitle: 'Desenvolvimento Web (Full Stack em JavaScript)',
      description: `O curso da Trybe de desenvolvimento web tem 
      mais de 1500 horas de formação, abordando fundamentos de desenvolvimento 
      web, desenvolvimento Frontend, Backend, ciência da computação (com Python), 
      metodologias ágeis e habilidades comportamentais`,
    },
    {
      title: 'UniAnchieta (Jul 2015 – Jul 2019)',
      subtitle: 'Bacharel em Biomedicina',
      description: ' Habilitado em Imagenologia e Análises Clínicas.',
    },
    {
      title: 'Academia das Águias (Jul 2014 – Jan 2015)',
      subtitle: 'Comissário de Voo',
      description: `Curso que visa formar comissários de bordo, ensinando aerodinâmica, segurança, 
      procedimentos de emergência, sobrevivência, primeiros socorros, direitos e deveres dos 
      membros da tripulação, clima, navegação, tipos de aeronaves, entre outros temas.`,
    },
    {
      title: 'SENAI (Jan 2008 – Dec 2009)',
      subtitle: 'Mecânico de Usinagem',
      description: `Operação de máquinas (tornos, fresadoras, retificadoras, máquinas de solda, 
      CNC), uso de desenhos técnicos e instrumentos de medição (micrômetros e paquímetros), 
      materiais (aço, alumínio, latão, plástico e madeira) e matemática relacionada à metalurgia.`,
    }
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