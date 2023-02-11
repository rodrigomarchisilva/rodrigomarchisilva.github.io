import setAge from './setAge';

const pageTitle = 'About';

const whoAmI = {
  sectionTitle: 'Who am I?',
  id: 'who-am-i',
  threeKeyObjectList: [
    {
      title: 'Hey there!',
      subtitle: `I'm Rodrigo, from Sao Paulo, Brazil, where I live with my parents and my sister. I'm ${setAge()}, currently in a career transition, 
      job hunting after Trybe's JavaScript Full Stack Web Development course that just ended.`,
      description: `I like to acquire fresh knowledge and I'm passionate about logic and technology, which led me to programming. 
      I started my studies in January 2021, and since then, I've been combining theory and practice to improve my skills daily. 
      In my spare time, I practice bodybuilding and I'm also interested in games, music (guitarist/singer) and drawing. 
      I've been through metallurgy, logistics (where I worked with Excel), aviation and biomedicine, where I acquired professional skills 
      that I intend to put into practice as a software developer. Through Trybe and on my own, I've dived into the universe of JavaScript, 
      however, despite loving this language, my interest is not limited to it. I'm always willing to learn!`,
    },
  ],
};

const education = {
  sectionTitle: 'Education',
  id: 'education',
  threeKeyObjectList: [
    {
      title: 'UNINOVE (Jan 2023 – Jun 2025)',
      subtitle: 'Associate\'s degree in Analysis and Development of Systems',
      description: `Online course that aims to train professionals to design, implement 
      and maintain software systems and applications, using the most current technologies 
      and methodologies of the market. The curriculum covers topics such as programming, 
      database, software engineering, and project management, among others, providing 
      students with a comprehensive understanding of the software development process.`,
    },
    {
      title: 'Trybe (May 2021 – Aug 2022)',
      subtitle: 'Web Development (Full Stack in JavaScript)',
      description: `Trybe's web development course has 
      more than 1500 hours of training, covering web development fundamentals, 
      Frontend development, Backend, computer science (with Python), agile methodologies 
      and behavioral skills`,
    },
    {
      title: 'UniAnchieta (Jul 2015 – Jul 2019)',
      subtitle: 'Bachelor\'s degree in biomedicine',
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
      subtitle: 'Transportation assistant and traffic clerk',
      description: 'Identification and collection of pending invoices, interaction with drivers/operation and creation of picking lists, mostly using Excel.',
    },
    {
      title: 'DHL Logistics Brazil LTDA (Oct 2011 - Oct 2012)',
      subtitle: 'Warehouse agent',
      description: 'Warehouse picking routine and passage through the entire inbound, outbound and repair of damaged boxes.',
    },
    {
      title: 'Alpino Indústria Metalúrgica LTDA (Mar 2008 – Jan 2010)',
      subtitle: 'Toolmaker apprentice',
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