const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Raj Singh',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Raj Singh',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Raj Singh',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Raj Singh',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Raj Singh',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
