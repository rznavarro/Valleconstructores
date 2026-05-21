import { Property } from './types';
import propMachali from '../assets/images/prop_machali_premium_1779380172783.png';
import propRequinoa from '../assets/images/prop_requinoa_country_1779380192938.png';
import propCoya from '../assets/images/prop_coya_cabin_1779380209225.png';

export const PROPIEDADES: Property[] = [
  {
    id: 'prop-1',
    title: 'Moderna Villa de Piedra y Hormigón con Vista a la Cordillera',
    type: 'venta',
    priceText: '14.800 UF',
    comuna: 'Machalí',
    slug: 'moderna-villa-machali',
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      surface: 340
    },
    image: propMachali,
    whatsappText: 'Hola, María José. Quisiera más información sobre la Moderna Villa de Machalí de 14.800 UF.'
  },
  {
    id: 'prop-2',
    title: 'Hacienda Colonial Premium en Entorno de Viñedos',
    type: 'venta',
    priceText: '18.500 UF',
    comuna: 'Requínoa',
    slug: 'hacienda-colonial-requinoa',
    specs: {
      bedrooms: 5,
      bathrooms: 4,
      surface: 520
    },
    image: propRequinoa,
    whatsappText: 'Hola, María José. Me interesa conocer los detalles de la Hacienda Colonial en Requínoa (18.500 UF).'
  },
  {
    id: 'prop-3',
    title: 'Refugio de Madera y Cristal sobre Falda de la Montaña',
    type: 'arriendo',
    priceText: '$2.100.000 /mes',
    comuna: 'Coya',
    slug: 'refugio-madera-coya',
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      surface: 180
    },
    image: propCoya,
    whatsappText: 'Hola, María José. Estoy interesado en arrendar el Refugio de Madera y Cristal en Coya por $2.100.000/mes.'
  }
];
