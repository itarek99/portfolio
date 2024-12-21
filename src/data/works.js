import landingPage from '../assets/images/landing_page.svg';
import pixelPhoto from '../assets/images/photography.svg';
import staffDeck from '../assets/images/staff_deck.svg';
import tutsPoint from '../assets/images/tuts_point.svg';

const works = [
  {
    id: 1,
    title: 'Staff Deck',
    technology: ['react', 'tailwindcss'],
    thumbnail: staffDeck,
    live: 'https://hr-management-client-2a430.web.app/',
    github: 'https://github.com/Rubayet-billah/hr-management-client/',
  },
  {
    id: 2,
    title: 'Tuts Point',
    live: 'https://hr-management-client-2a430.web.app/',
    github: 'https://github.com/Rubayet-billah/hr-management-client/',
    technology: ['react', 'tailwindcss'],
    thumbnail: tutsPoint,
  },
  {
    id: 4,
    title: 'Landing Page',
    github: 'https://github.com/Rubayet-billah/hr-management-client/',
    live: 'https://hr-management-client-2a430.web.app/',
    technology: ['bootstrap'],
    thumbnail: landingPage,
  },
  {
    id: 3,
    title: 'Pixel Photography',
    live: 'https://hr-management-client-2a430.web.app/',
    github: 'https://github.com/Rubayet-billah/hr-management-client/',
    technology: ['react', 'tailwindcss', 'bootstrap'],
    thumbnail: pixelPhoto,
  },
];

export default works;
