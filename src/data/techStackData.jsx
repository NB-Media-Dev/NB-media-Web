import React from 'react';
import {
  WebDevCategoryIcon,
  MobileDevCategoryIcon,
  UiCategoryIcon,
  DatabaseCategoryIcon,
  QaCategoryIcon,
  CloudDevOpsCategoryIcon,
} from '../components/common/categoryIcons';
import {
  SiHtml5,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiExpress,
  SiKotlin,
  SiSwift,
  SiFlutter,
  SiIonic,
  SiFigma,
  SiSketch,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiApachejmeter,
  SiSelenium,
  SiAppium,
  SiGooglecloud,
  SiGithub,
  SiBitbucket,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiDocker,
  SiTerraform,
  SiKubernetes,
} from 'react-icons/si';
import { FaCss3Alt, FaJava, FaAws } from 'react-icons/fa6';
import {
  TbBrandAdobeIllustrator,
  TbBrandAdobePhotoshop,
  TbBrandAzure,
  TbBrowser,
} from 'react-icons/tb';

export const TECH_CATEGORIES = [
  {
    name: 'Web Development',
    icon: (color) => <WebDevCategoryIcon color={color} />,
  },
  {
    name: 'Mobile Development',
    icon: (color) => <MobileDevCategoryIcon color={color} />,
  },
  {
    name: 'User Interface',
    icon: (color) => <UiCategoryIcon color={color} />,
  },
  {
    name: 'Database',
    icon: (color) => <DatabaseCategoryIcon color={color} />,
  },
  {
    name: 'Quality Assurance',
    icon: (color) => <QaCategoryIcon color={color} />,
  },
  {
    name: 'Cloud & DevOps',
    icon: (color) => <CloudDevOpsCategoryIcon color={color} />,
  },
];

const iconProps = { size: 42, color: '#ffffff' };

export const TECH_CATEGORIES_DATA = {
  'Web Development': [
    {
      subtitle: 'UI/UX',
      gridCols: 4,
      items: [
        { name: 'HTML5', icon: <SiHtml5 {...iconProps} /> },
        { name: 'CSS3', icon: <FaCss3Alt {...iconProps} /> },
        { name: 'JAVASCRIPT', icon: <SiJavascript {...iconProps} /> },
        { name: 'BOOTSTRAP', icon: <SiBootstrap {...iconProps} /> },
      ],
    },
    {
      subtitle: 'FRAMEWORKS',
      gridCols: 4,
      items: [
        { name: 'REACT', icon: <SiReact {...iconProps} /> },
        { name: 'ANGULAR', icon: <SiAngular {...iconProps} /> },
        { name: 'VUE', icon: <SiVuedotjs {...iconProps} /> },
        { name: 'EXPRESS', icon: <SiExpress {...iconProps} /> },
      ],
    },
  ],
  'Mobile Development': [
    {
      subtitle: 'LANGUAGES',
      gridCols: 3,
      items: [
        { name: 'JAVA', icon: <FaJava {...iconProps} /> },
        { name: 'KOTLIN', icon: <SiKotlin {...iconProps} /> },
        { name: 'SWIFT', icon: <SiSwift {...iconProps} /> },
      ],
    },
    {
      subtitle: 'FRAMEWORKS',
      gridCols: 3,
      items: [
        { name: 'REACT NATIVE', icon: <SiReact {...iconProps} /> },
        { name: 'FLUTTER', icon: <SiFlutter {...iconProps} /> },
        { name: 'IONIC', icon: <SiIonic {...iconProps} /> },
      ],
    },
  ],
  'User Interface': [
    {
      subtitle: 'TOOLS',
      gridCols: 4,
      items: [
        { name: 'FIGMA', icon: <SiFigma {...iconProps} /> },
        { name: 'ADOBE ILLUSTRATOR', icon: <TbBrandAdobeIllustrator {...iconProps} /> },
        { name: 'ADOBE PHOTOSHOP', icon: <TbBrandAdobePhotoshop {...iconProps} /> },
        { name: 'SKETCH', icon: <SiSketch {...iconProps} /> },
      ],
    },
  ],
  'Database': [
    {
      subtitle: 'QUERIES',
      borderColor: '#00a1ff',
      gridCols: 4,
      items: [
        { name: 'MySQL', icon: <SiMysql {...iconProps} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql {...iconProps} /> },
        { name: 'MongoDB', icon: <SiMongodb {...iconProps} /> },
        { name: 'SQLite', icon: <SiSqlite {...iconProps} /> },
      ],
    },
  ],
  'Quality Assurance': [
    {
      subtitle: 'TESTING & AUTOMATION',
      gridCols: 4,
      items: [
        { name: 'JMeter', icon: <SiApachejmeter {...iconProps} /> },
        { name: 'Selenium', icon: <SiSelenium {...iconProps} /> },
        { name: 'Appium', icon: <SiAppium {...iconProps} /> },
        { name: 'BrowserStack', icon: <TbBrowser {...iconProps} /> },
      ],
    },
  ],
  'Cloud & DevOps': [
    {
      subtitle: 'INFRASTRUCTURE & DEVOPS',
      gridCols: 4,
      items: [
        { name: 'AWS', icon: <FaAws {...iconProps} /> },
        { name: 'Azure', icon: <TbBrandAzure {...iconProps} /> },
        { name: 'GCP', icon: <SiGooglecloud {...iconProps} /> },
        { name: 'GitHub', icon: <SiGithub {...iconProps} /> },
        { name: 'Bitbucket', icon: <SiBitbucket {...iconProps} /> },
        { name: 'Jenkins', icon: <SiJenkins {...iconProps} /> },
        { name: 'Prometheus', icon: <SiPrometheus {...iconProps} /> },
        { name: 'Grafana', icon: <SiGrafana {...iconProps} /> },
        { name: 'Docker', icon: <SiDocker {...iconProps} /> },
        { name: 'Terraform', icon: <SiTerraform {...iconProps} /> },
        { name: 'Kubernetes', icon: <SiKubernetes {...iconProps} /> },
      ],
    },
  ],
};
