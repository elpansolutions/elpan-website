/* eslint-disable import/extensions */

// Solution Img Imports

import MobileApp from '../assets/images/Solutions/New/Mobile App.png';
import Ai from '../assets/images/Solutions/New/AI.png';
import ERP from '../assets/images/Solutions/New/ERP.png';
import Marketing from '../assets/images/Solutions/New/DM.png';
import tech from '../assets/images/Solutions/New/Tech.png';
import website from '../assets/images/Solutions/New/Web.png';
import WhatsappAutomation from '../assets/images/Solutions/New/WA.png';
import ChatBot from '../assets/images/Solutions/New/Chatbot.png';

// Why Us
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

export const Solutions = [
  {
    id: 'AI_Services',
    title: 'AI Services',
    imageUrl: Ai,
    type: 'Unlock the Power of Artificial Intelligence for Your Business',
    detail: [
      'AI is reshaping industries, and Elpan Solutions is at the forefront of this revolution.',
      'From predictive analytics to natural language processing, we offer AI-driven solutions.',
      'These solutions enhance decision-making, automate workflows, and create personalized customer experiences.',
    ],
    responsibility: [
      'LLMs and RAGs',
      'Deep Learning Models',
      'Predictive Analytics',
      'AI-Powered Chatbots',
      'ImageandSpeech Recognition',
      'CustomAIsolutions to meet your needs',
    ],
    credit: 'Let AI be your competitive edge.',
  },
  {
    id: 'Website_Development',
    title: 'Website Development',
    imageUrl: website,
    type: 'Crafting Websites That Make an Impact',
    detail: [
      'Your website is your digital storefront, and we ensure it stands out. At Elpan Solutions,',
      'we design and develop websites that are visually appealing,',
      'stunning, user-friendly, and optimized for performance.',
    ],
    responsibility: [
      'CustomWebsite Design',
      'Responsive Development',
      'E-commerce Solutions',
      'Portfolios',
      'Demonstration',
      'whitelabling',
      'SEO-Friendly Websites',
    ],
    credit: 'Build a website that grows your brand.',
  },
  {
    id: 'Mobile_App_Development',
    title: 'Mobile App Development',
    imageUrl: MobileApp,
    type: 'Bringing Your Ideas to Life on Mobile',
    detail: [
      'We create intuitive, feature-rich mobile applications for iOS and Android that captivate users',
      'and deliver exceptional performance. Whether it’s a consumer app or an enterprise solution,',
      'we’ve got you covered',
    ],
    responsibility: [
      'Native and Cross-Platform Apps',
      'UI/UX Design',
      'AppMaintenance and Support',
    ],
    credit: 'Let’s develop an app your users will love.',
  },
  {
    id: 'Digital_Marketing',
    title: 'Digital Marketing',
    imageUrl: Marketing,
    type: 'Elevate Your Online Presence with Digital Marketing',
    detail: [
      'In today’s digital age, visibility is everything. Our digital marketing strategies are designed to',
      'increase your reach, drive traffic, and convert visitors into loyal customers.',
    ],
    responsibility: [
      'SEO and Content Marketing',
      'Social Media Management',
      'PPC Campaigns',
      'Email Marketing',
    ],
    credit: 'Achieve your marketing goals with us.',
  },
  {
    id: 'ERP_Solutions', // Updated to ensure uniqueness
    title: 'ERP Solutions',
    imageUrl: ERP,
    type: 'Streamline Your Business Operations with ERP',
    detail: [
      'Our ERP solutions help businesses integrate and manage their core processes seamlessly.',
      'From inventory to finance, we provide robust, scalable systems tailored to your needs.',
    ],
    responsibility: [
      'Inventory Management',
      'POS',
      'GST Reports',
      'Analytics',
      'HR and Payroll Integration',
      'Sales and CRM Systems',
      'Real-Time Reporting',
    ],
    credit: 'Simplify your operations with our ERP systems. ',
  },
  {
    id: 'ChatBot_Development', // Updated to ensure uniqueness
    title: 'ChatBot Development',
    imageUrl: ChatBot,
    type: 'Enhance Customer Engagement with Intelligent Chatbots',
    detail: [
      'Wedesign AI-driven chatbots that deliver seamless customer support, boost engagement, and',
      'improve user satisfaction.',
    ],
    responsibility: [
      'Custom Chatbot Design',
      'Integration with Platforms',
      'Multilingual Support',
      'Analytics and Insights',
    ],
    credit: 'Let your chatbot handle the conversation.',
  },
  {
    id: 'WhatsApp_Automation', // Updated to ensure uniqueness
    title: 'WhatsApp Automation',
    imageUrl: WhatsappAutomation,
    type: 'Streamline Communication with WhatsApp Automation',
    detail: [
      'Take your customer engagement to the next level with WhatsApp automation. Automate',
      'responses, manage queries, and provide instant support through the world’s most popular',
      'messaging app.',
    ],
    responsibility: [
      'Automated Replies',
      'Custom Workflows and pipelines',
      'Chatbot Integration',
      'Lead Generation Tool',
      'Campaign Management',
    ],
    credit: 'Connect with customers like never before.',
  },
  {
    id: 'Tech_Consulting', // Updated to ensure uniqueness
    title: 'Tech Consulting',
    imageUrl: tech,
    type: 'Expert Tech Consulting for Smarter Business Decisions',
    detail: [
      'Leverage our technical expertise to navigate complex challenges and make informed decisions.',
      'From IT strategy to software implementation, we guide you every step of the way.',
    ],
    responsibility: [
      'IT Infrastructure Planning',
      'Digital Transformation Strategies',
      'Software Selection and Deployment',
      'Risk Assessment',
    ],
    credit: 'Turn challenges into opportunities with our consultants.',
  },
];

export const Advantages = [
  [{
    title: 'Communicative',
    description: 'We communicate our project ideas and progress to make it clear.',
    imageUrl: Communicative,
  },
  {
    title: 'Cusomization',
    description: 'Tailored solutions to fit your unique needs.',
    imageUrl: Management,
  }],
  [{
    title: 'Collaborative​',
    description: 'Our team are very collaborative to make our project done well.',
    imageUrl: Collaborative,
  },
  {
    title: 'Results-Driven',
    description: "Focused on delivering measurable outcomes.",
    imageUrl: Favorite,
  }],
];
