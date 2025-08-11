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
      "Implemented a plan to transition from a custom Shopify front end to a headless Shopify CMS with a React front end, integrating a Rails API for database management",
      "Became one of two lead front end developers, led the front end efforts to develop and launch a new product line, prescription glasses and sunglasses",
      "Built a Customer Portal interface that involved a bespoke integration of Shopify and Stripe APIs to display Customer data and allow management of subscriptions and orders",
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
      "Oversaw a 4 person technical team to build a bespoke real estate and art gallery platform - CMS for adding art, homes, etc, and UI/UX consulting on custom PHP front end for each project",
      "Also provided technical guidance for an online charity auction platform similar to Omaze",
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