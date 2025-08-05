import shiftLab from '../assets/shift-lab-logo.svg';
import hubbleContacts from '../assets/hubble-logo.png';
import juiceCg from '../assets/juice-logo.svg';

export interface Experience {
  title: string;
  companyName: string;
  companyLink: string;
  location: string;
  icon: string;
  iconClass?: string;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    companyName: "Hubble Contacts",
    companyLink: "https://hubblecontacts.com",
    location: "New York, NY",
    icon: hubbleContacts,
    iconClass: '',
    date: "Apr 2019 - Sept 2023",
    points: [
      "Initially worked on a custom Shopify front end that integrated with a Rails back end for data management",
      "Helped design and implement transition to Shopify as a headless CMS, a Node/React-based front end, and maintaining legacy Rails app for database purposes",
      "Became one of two lead front end developers, led the front end efforts to develop and launch a new product line, prescription glasses and sunglasses",
      "Personally handled all intake pages, analytics, accessibility, and internationalization"
    ],
  },
  {
    title: "Technical Advisor",
    companyName: "Juice Creative Group",
    companyLink: "https://juicecg.com",
    location: "Norwalk, CT",
    icon: juiceCg,
    iconClass: 'square',
    date: "Feb 2021 - Feb 2022, Dec 2024 - Mar 2025",
    points: [
      "Weekend/personal project to help a colleague with planning oversight, scope advice, and timeline and staffing recommendations for a full service creative agency",
      "Oversaw a 4 person technical team to build a bespoke real estate and art gallery platform that consisted of an admin interface for adding galleries, artists, homes, architects, etc",
      "Also oversaw building of custom front end sites in PHP for each project, and efficiently use high quality images to maintain performance",
      "Second stint involved planning and project management for an integrated CMS and store finder for a premium marijuana brand"
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shift Lab",
    companyLink: "https://shiftlab.co",
    location: "New York, NY",
    icon: shiftLab,
    iconClass: 'square',
    date: "Aug 2016 - Feb 2019",
    points: [
      "Worked as a full stack developer on multiple projects utilizing a Rails back end API serving a Node/React front end",
      "Major projects included an ecommerce site and CMS integration for a major photographer that handled ~$4 million in sales per year, an ecommerce site for a major new food science brand, and several CMS sites for New York City museums",
    ],
  },
];

export default experiences;