import bcrypt from 'bcryptjs'
import { User } from './models/userModel'
import { Product } from './models/productModel'

export const sampleProducts: Product[] = [
  {
    name: 'Epiphone Explorer',
    slug: 'epiphone-explorer',
    category: 'Guitars',
    image: '../images/epiphoneexplorer.jpg',
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
    image: '../images/fenderstratocaster.jpg',
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
    image: '../images/ibanezbass.jpg',
    price: 550,
    countInStock: 10,
    brand: 'Ibanez',
    rating: 3,
    numReviews: 7,
    description: 'electric bass description',
  },
  {
    name: 'Marshall JCM800',
    slug: 'marshall-jcm800',
    category: 'Amplifiers',
    image: '../images/marshalljcm800.jpg',
    price: 2000,
    countInStock: 3,
    brand: 'Marshall',
    rating: 5,
    numReviews: 30,
    description: 'electric amplifier description',
  },
  {
    name: 'Squier Jaguar',
    slug: 'squier-jaguar',
    category: 'Guitars',
    image: '../images/squierjaguar.jpg',
    price: 400,
    countInStock: 0,
    brand: 'Squier',
    rating: 0,
    numReviews: 0,
    description: 'electric guitar description',
  },
]

export const sampleUsers: User[] = [
  {
    name: 'Riccardoadmin',
    email: 'admin@mail.com',
    password: bcrypt.hashSync('admin12345'),
    isAdmin: true,
  },
  {
    name: 'Riccardo',
    email: 'user@mail.com',
    password: bcrypt.hashSync('secret123'),
    isAdmin: false,
  },
]
