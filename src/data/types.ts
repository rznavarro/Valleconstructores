export interface Property {
  id: string;
  title: string;
  type: 'venta' | 'arriendo';
  priceText: string;
  comuna: string;
  slug: string;
  specs: {
    bedrooms: number;
    bathrooms: number;
    surface: number; // in m2
  };
  image: string;
  whatsappText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  comuna: string;
  operation: string;
}
