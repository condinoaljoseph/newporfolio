import Accuair from './gif/accuair.gif';
import FaceRecognition from './gif/facerecognition.gif';
import Qeeper from './gif/queeper.gif';
import GithubFinder from './gif/githubfinder.gif';
import SharePosts from './gif/shareposts.gif';
import Ulogger from './gif/ulogger.gif';

const lists = [
  {
    id: 1,
    title: 'Ulogger Technician Logger',
    details: 'HTML5, Materialize CSS, React | Redux, JSONPlaceholder',
    description:
      'Simple IT technician logging app built with React and JSONPlaceholder',
    source_link: 'https://github.com/condinoaljoseph/ulogger',
    page_link: 'https://condinoaljoseph.github.io/ulogger/',
    project_img: `${Ulogger}`,
    styles: {
      background:
        'linear-gradient(to right bottom, #eca026,rgba(185, 19, 19, 0.911)), url(https://source.unsplash.com/1600x900/?notes) center / cover'
    },
    backStyles: {
      backgroundImage:
        'linear-gradient(to right bottom, #eca026, rgba(185, 19, 19, 1))'
    }
  },
  {
    id: 2,
    title: 'Qeeper Keep Your Contacts',
    details: 'HTML5 | CSS3, React | Context API, NodeJS | Express, MongoDB',
    description: 'Access your contacts anywhere with this app',
    source_link: 'https://github.com/condinoaljoseph/queeper',
    page_link: 'https://pure-reaches-65126.herokuapp.com',
    project_img: `${Qeeper}`,
    styles: {
      background:
        'linear-gradient(to right bottom, #838383, #2e2e2e), url(https://source.unsplash.com/1600x900/?numbers) center / cover'
    },
    backStyles: {
      backgroundImage: 'linear-gradient(to right bottom, #838383, #2e2e2e)'
    }
  },
  {
    id: 3,
    title: 'Accuair PH Official Website',
    details: 'HTML5 | CSS3, JavaScript | jQuery, SASS, Netlify',
    description: 'Website for airconditioning company in Bohol Philippines',
    source_link: 'https://github.com/condinoaljoseph/Accuair',
    page_link: 'https://quirky-bassi-99bf67.netlify.com/',
    project_img: `${Accuair}`,
    styles: {
      background:
        'linear-gradient(to right bottom, #44b2e6, #05044d), url(https://source.unsplash.com/1600x900/?aircondition) center / cover'
    },
    backStyles: {
      backgroundImage: 'linear-gradient(to right bottom, #44b2e6, #05044d)'
    }
  },
  {
    id: 4,
    title: 'Github Finder',
    details: 'HTML5 | CSS3, React, Github API, Bootstrap',
    description: 'Connect with github users by searching through this app',
    source_link: 'https://github.com/condinoaljoseph/githubfinder',
    page_link: 'https://githubfinder-0603.netlify.com/',
    project_img: `${GithubFinder}`,
    styles: {
      background:
        'linear-gradient(to right bottom, #6b330e, #978f1c), url(https://source.unsplash.com/1600x900/?programming) center / cover'
    },
    backStyles: {
      backgroundImage: 'linear-gradient(to right bottom, #6b330e, #978f1c)'
    }
  },
  {
    id: 5,
    title: 'Shareposts',
    details: 'HTML5 | CSS3, Bootstrap 4, PHP | MVC, MySQL',
    description:
      'Simple CRUD functionality website built with my MVC framework',
    source_link: 'https://github.com/condinoaljoseph/Shareposts',
    page_link: '',
    project_img: `${SharePosts}`,
    styles: {
      background:
        'linear-gradient(to right bottom, #9c1283, #aa2b15), url(https://source.unsplash.com/1600x900/?cellphone) center / cover'
    },
    backStyles: {
      backgroundImage: 'linear-gradient(to right bottom, #9c1283, #aa2b15)'
    }
  },
  {
    id: 6,
    title: 'Face Recognition App',
    details: 'HTML5 | CSS3, React, Clarifai, Tachyons',
    description: 'A simple face recognition app powered by clarifai',
    source_link: 'https://github.com/condinoaljoseph/facerecognition',
    page_link: 'https://condinoaljoseph.github.io/facerecognition/',
    project_img: `${FaceRecognition}`,
    styles: {
      background:
        'linear-gradient(to right bottom, #396b2a, #1b2e21), url(https://source.unsplash.com/1600x900/?movie) center / cover'
    },
    backStyles: {
      backgroundImage: 'linear-gradient(to right bottom, #396b2a, #1b2e21)'
    }
  }
];

export default lists;
