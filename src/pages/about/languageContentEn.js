import setAge from './setAge';

const pageTitle = 'About';

const whoAmI = {
  sectionTitle: 'Who am I?',
  id: 'who-am-i',
  threeKeyObjectList: [
    {
      title: 'Hey there!',
      subtitle: `I'm Rodrigo, from Sao Paulo, Brazil, where I live with my parents and my sister. I'm ${setAge()}, currently in a career transition, 
      job hunting after Trybe's web development course that just ended. I'd like to work as a Full Stack Web Developer and specialize in JavaScript.`,
      description: `I've always loved learning new stuff, so through my career decisions, I've tried to follow a path where I'd consistently do it. 
      With my passion for logic challenges and technology, and previous experience with Excel, that's what led me to become a developer. My goal is to get better than myself everyday. 
      In my free time, I practice bodybuilding and sports like soccer, jiu-jitsu and boxing. Other than that, I'm a gamer and a musician (guitarist/singer), who casually draws too. 
      I've been through a few distinct professional areas, like metallurgy, logistics (where I worked a lot with Excel), aviation and biomedicine, but software development, 
      an old desire, found me again. At Trybe and by myself, I learned a lot about JavaScript, and I wish to keep doing so. But... I also have the drive to learn new things if needed!`,
    },
  ],
};

const education = {
  sectionTitle: 'Education',
  id: 'education',
  threeKeyObjectList: [
    {
      title: 'UniAnchieta (Jul 2015 – Jul 2019)',
      subtitle: 'Bachelor degree in biomedicine',
      description: ' Qualified in imaging and clinical analysis.',
    },
  ],
};

const languages = {
  sectionTitle: 'Languages',
  id: 'languages',
  threeKeyObjectList: [
    {
      title: 'Portuguese',
      subtitle: 'Full proficiency',
      description: 'Native language.'
    },
    {
      title: 'English',
      subtitle: 'Advanced/proficient',
      description: 'Master\'s Program from UPTIME finished (Fluent: C1 Expert - according to european standards).'
    },
    {
      title: 'Spanish',
      subtitle: 'Beginner',
      description: 'Studying on my own through Busuu\'s website.'
    },
  ],
};

const experiences = {
  sectionTitle: 'Experiences',
  id: 'experiences',
  threeKeyObjectList: [
    {
      title: 'UNICAMP (Oct 2019 – Sep 2020)',
      subtitle: 'FAPESP scholarship holder (technical training III) in hemoglobinopathies',
      description: 'Administration of laboratory resources, responsible for daily blood tests and instruction of new researchers.',
    },
    {
      title: 'UNICAMP (Feb 2019 – Jun 2019)',
      subtitle: 'Nuclear medicine intern',
      description: 'Patient instruction, equipment adjustment, imaging exams and contact with resident physicians.',
    },
    {
      title: 'LPC Biológico LTDA (May 2018 – Sep 2018)',
      subtitle: 'Clinical analysis intern and laboratory technician assistant',
      description: 'In addition to biomedical laboratory assignments, period of work at the reception and assistance in the blood collection routine.',
    },
    {
      title: 'DHL Logistics Brazil LTDA (Nov 2011 - Jan 2014)',
      subtitle: 'Supply chain assistant',
      description: 'Identification and collection of pending invoices, interaction with drivers/operation and creation of picking lists, mostly using Excel.',
    },
    {
      title: 'DHL Logistics Brazil LTDA (Oct 2011 - Oct 2012)',
      subtitle: 'Warehouse operator',
      description: 'Warehouse picking routine and passage through the entire inbound, outbound and repair of damaged boxes.',
    },
    {
      title: 'Alpino Indústria Metalúrgica LTDA (Mar 2008 – Jan 2010)',
      subtitle: 'Tooling apprentice',
      description: 'Test jigs development for tubular parts using a wide range of standard machining tools.',
    },
  ],
};

const sections = [whoAmI, education, languages, experiences];

const languageContent = {
  pageTitle,
  sections,
};

export default languageContent;