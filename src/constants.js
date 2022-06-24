export const projectData = {
  plant: {
    title: 'Automatic Plant Waterer',
    description:
      'Automated plant waterer that detects moisture level of soil and keeps plant constantly happily watered. Made with Raspberry PI, moisture detection and watering script made with python, runs on python Flask web server which allows manual/automatic control anywhere from the home.',
    bannerUrl: 'plant',
    date: '2022-01-17'
  },
  isItOpen: {
    title: 'Is it open?',
    url: 'https://is-itopen-frontend.herokuapp.com/',
    description: 'Look up restaurant open timings',
    bannerUrl: 'isitopen',
    date: '2020-04-01'
  },
  covidVisualizer: {
    title: 'Covid-Visualizer',
    url: 'https://perrylzx.github.io/covid-visualizer/',
    description: 'See the daily growth of Covid-19 from any country.',
    bannerUrl: 'covid',
    date: '2020-01-15'
  },
  pitchBooker: {
    title: 'pitch-booker',
    url: 'https://pitch-booker.herokuapp.com/',
    description: 'A pitch booker app.',
    bannerUrl: 'pitchbooker',
    date: '2019-10-10'
  },
  instagram: {
    title: 'Instagram',
    url: 'https://kittengram-9e684.firebaseapp.com/',
    description: 'An image sharing app.',
    bannerUrl: 'instagram',
    date: '2019-09-01'
  },
  terygram: {
    title: 'Terygram',
    url: 'https://github.com/perrylzx/terygram/',
    description: 'A chat messaging app made with Flutter and Cloud Firestore.',
    bannerUrl: 'terygram',
    date: '2019-08-20'
  },
  todolist: {
    title: 'Todolist',
    url: 'http://perrylzx.github.io/to-do-list',
    description: 'A todolist made in react and redux.',
    bannerUrl: 'todolist',
    date: '2019-07-03'
  },
  cloneOfGoogleSearch: {
    title: 'Clone of Google Search',
    url: 'http://perrylzx.github.io/google-clone',
    description: 'A clone of the google search page for my first project.',
    bannerUrl: 'goggle',
    date: '2019-06-18'
  },
  oldPortfolio: {
    title: 'My old portfolio site',
    url: 'https://perrylzx.github.io/',
    description: 'My first portfolio site',
    bannerUrl: 'oldportfolio',
    date: '2019-04-10'
  }
};

export const SectionIds = {
  MAIN: 'main-section',
  ABOUT: 'about-section',
  PROJECT: 'projects-section',
  CONTACT: 'contact-section'
};

export const scrollPositions = Object.values(SectionIds);

export const scrollPositionEnum = {
  [SectionIds.MAIN]: 0,
  [SectionIds.ABOUT]: 1,
  [SectionIds.PROJECT]: 2,
  [SectionIds.CONTACT]: 3
};
