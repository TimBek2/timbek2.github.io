import shiftLab from '../assets/shift-lab-logo.svg';
import hubbleContacts from '../assets/hubble-logo.png';
import juiceCg from '../assets/juice-logo.svg';

export interface Experience {
  title: string;
  companyName: string;
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
    location: "New York, NY",
    icon: hubbleContacts,
    iconClass: '',
    date: "Apr 2019 - Sept 2023",
    points: [
      "Initially worked on a custom Shopify front end that integrated with a Rails back end for data management",
      "Helped design and implement transition to Shopify as a headless CMS, a Node/React-based front end, and maintaining legacy Rails app for database purposes",
      "Became one of two lead front end developers, personally handling all intake pages, analytics, accessibility, and internationalization",
      "Led the front end efforts to develop and launch a new product line, prescription glasses and sunglasses"
    ],
  },
  {
    title: "Technical Advisor",
    companyName: "Juice Creative Group",
    location: "Norwalk, CT",
    icon: juiceCg,
    iconClass: 'square',
    date: "Feb 2021 - Feb 2022",
    points: [
      "Weekend/personal project to help a colleague with planning oversight, scope advice, and timeline and staffing recommendations for a full service creative agency",
      "Oversaw a 4 person technical team to build a bespoke real estate and art gallery platform that consisted of an admin interface for adding galleries, artists, homes, architects, etc",
      "Also oversaw building of custom front end sites in PHP for each project, and efficiently use high quality images to maintain performance",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shift Lab",
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