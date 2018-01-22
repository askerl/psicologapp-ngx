import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'ion-ios-home-outline',
    link: '/pages/inicio',
    home: true,
  },
  {
    title: 'Pacientes',
    icon: 'ion-ios-people-outline',
    link: '/pages/pacientes',
  },
  {
    title: 'Sesiones',
    icon: 'ion-ios-chatboxes-outline',
    link: '/pages/sesiones',
  },
  {
    title: 'Facturaciones',
    icon: 'ion-social-usd-outline',
    link: '/pages/facturaciones',
  },
];
