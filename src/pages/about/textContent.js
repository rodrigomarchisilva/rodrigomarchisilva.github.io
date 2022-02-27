const ptExperiences = [
  {
    company: 'UNICAMP (Out 2019 – Set 2020)',
    role: 'Bolsista FAPESP em Hemoglobinopatias:',
    description: ' Experiência ganha em administração de responsabilidades e planejamento.',
  },
  {
    company: 'UNICAMP (Fev 2019 – Jun 2019)',
    role: 'Estágiário de Medicina Nuclear:',
    description: ' Experiência ganha em atendimento e colaboração em equipe multidisciplinar/entre setores.',
  },
  {
    company: 'LPC Biológico LTDA (Mai 2018 – Set 2018)',
    role: 'Estágiário em Análises Clínicas e Auxiliar Técnico de Laboratório:',
    description: ' Experiência ganha em atendimento e colaboração em equipe multidisciplinar',
  },
  {
    company: 'DHL Logistics Brazil LTDA (Out 2011 - Jan 2014)',
    role: 'Auxiliar de Armazém e Assistente de Transportes:',
    description: ' Promovido uma vez de cargo e experiência ganha em atendimento e colaboração em equipe/entre setores.',
  },
  {
    company: 'Alpino Indústria Metalúrgica LTDA (Mar 2008 – Jan 2010)',
    role: 'Aprendiz de Ferramentaria:',
    description: ' Primeiro contato com o ambiente profissional durante período de estudos no SENAI.',
  },
];

const ptNavigation = [
  { title: 'Um resumo sobre mim', id: 'about-me' },
  { title: 'Formação acadêmica', id: 'academic-background' },
  { title: 'Idiomas', id: 'languages' },
  { title: 'Experiências profissionais e acadêmicas', id: 'experiences' },
];

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

const ptAboutMe = {
  subtitle: `Olá! Tudo bem? Sou brasileiro, tenho ${setAge()} anos, moro em Jundiaí, São Paulo e estou em transição de carreira. 
  Estudo Desenvolvimento Web Full Stack baseado em JavaScript na Trybe.`,
  description: `Sou apaixonado por aprender e flerto com problemas de lógica. Minha principal métrica é saber se fiz meu máximo. 
  Nas horas vagas, busco conhecimentos que agreguem na carreira e tempo de qualidade com pessoas importantes. Diariamente estudo idiomas novos, pratico musculação e esportes. 
  Gosto de música, desenho, cinema e jogos eletrônicos. Passei por diversas carreiras, como metalurgia, logística e biomedicina, 
  entretanto, retomei minha conexão com a tecnologia ao descobrir o universo da programação e embarcar na Trybe!`,
};

const ptLanguages = [
  { language: 'Português', level: 'Nível fluente. Idioma nativo' },
  { language: 'Inglês', level: `Nível avançado/fluente. Formado no Master's Program da escola UPTIME.` },
  { language: 'Espanhol', level: 'Nível básico. Estudando por conta através do site Busuu.' },
];

const ptAcademicBackground = {
    school: 'UniAnchieta (Jul 2015 – Jul 2019)',
    course: 'Bacharel em Biomedicina:',
    specializations: ' Habilitado em Imagenologia e Análises Clínicas.',
};

const textContent = {
  pt: { experiences: ptExperiences, navigation: ptNavigation, aboutMe: ptAboutMe, languages: ptLanguages, academicBackground: ptAcademicBackground },
  en: { experiences: [], navigation: [], aboutMe: {}, languages: [], academicBackground: [] },
};

export default textContent;