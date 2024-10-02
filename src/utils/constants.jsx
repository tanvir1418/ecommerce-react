import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'ComfySloth’s mission is to provide stylish, high-quality products that enhance comfort in every space, making every home a haven of relaxation.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Our vision is to be the top destination for home decor, inspiring personalized comfort zones that reflect individual tastes and lifestyles.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Founded with a passion for design, ComfySloth has evolved into a trusted name in home decor, committed to quality, innovation, and customer satisfaction.',
  },
];

// export const products_url = 'https://course-api.com/react-store-products';
export const products_url = 'https://e-commerce-api-d4tg.onrender.com/api/v1/products';

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const single_product_url = `https://e-commerce-api-d4tg.onrender.com/api/v1/products/`;
