import { Product } from './types/Product'

export const sampleProducts: Product[] = [
  {
    name: 'Epiphone Explorer',
    slug: 'epiphone-explorer',
    category: 'Guitars',
    image: '../public/images/epiphoneexplorer.jpg',
    price: 800,
    countInStock: 10,
    brand: 'Epiphone',
    rating: 5,
    numReviews: 20,
    description: 'electric guitar description',
  },
  {
    name: 'Fender Stratocaster',
    slug: 'fender-stratocaster',
    category: 'Guitars',
    image: '../public/images/fenderstratocaster.jpg',
    price: 1400,
    countInStock: 2,
    brand: 'Fender',
    rating: 4.5,
    numReviews: 10,
    description: 'electric guitar description',
  },
  {
    name: 'Ibanez SR Bass',
    slug: 'ibanez-sr-bass',
    category: 'Basses',
    image: '../public/images/ibanezbass.jpg',
    price: 550,
    countInStock: 10,
    brand: 'Ibanez',
    rating: 4,
    numReviews: 25,
    description: 'electric bass description',
  },
  {
    name: 'Marshall JCM800',
    slug: 'marshall-jcm800',
    category: 'Amplifiers',
    image: '../public/images/marshalljcm800.jpg',
    price: 2000,
    countInStock: 3,
    brand: 'Marshall',
    rating: 5,
    numReviews: 30,
    description: 'electric amplifier description',
  },
]
