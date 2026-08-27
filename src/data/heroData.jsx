import React from 'react';
import {
  GlobalUsersIcon,
  ProfessionalsIcon,
  YearsExperienceIcon,
  PanIndiaClientsIcon,
} from '../components/common/heroIcons';

export const HERO_STATS = [
  {
    id: 'global-users',
    icon: <GlobalUsersIcon />,
    targetNumber: 50000,
    suffix: '+',
    label: 'Global Users Empowered Through Our Services',
  },
  {
    id: 'professionals-empowered',
    icon: <ProfessionalsIcon />,
    targetNumber: 75,
    suffix: '+',
    label: 'IT & Non IT Professionals Empowered',
  },
  {
    id: 'years-experience',
    icon: <YearsExperienceIcon />,
    targetNumber: 6,
    suffix: '+',
    label: 'Years Building Scalable Tech Solutions',
  },
  {
    id: 'pan-india-clients',
    icon: <PanIndiaClientsIcon />,
    targetNumber: null,
    suffix: '',
    label: 'Service Clients Across Every State in India',
  },
];

