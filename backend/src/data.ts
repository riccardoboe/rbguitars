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
    description:
      'Epiphones Inspired by Gibson Collection provides fans classic Gibson models—like the Explorer—at an accessible price. Now available at Guitar Center, the Epiphone Explorer recreates the legendary model that was first released in 1958. It features a mahogany body and SlimTaper mahogany neck neck, Epiphone ProBuckers in the neck and bridge, LockTone tune-o-matic bridge, stopbar tailpiece, Graph Tech nut and more.',
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
    description:
      'Since its debut in 1954, the Stratocaster has undergone constant refinement to meet the needs and desires of the working guitarist. The American Professional II Strat may be one of the most complete evolutions of this time-tested, player-proven guitar yet.',
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
    description:
      'For 30 years the SR from Ibanez has given bass players a modern alternative and the SR500E is no exception. The thin, sturdy and stable Jatoba/Walnut neck offers superior playability when combined with the extended neck joint, making the upper frets easily accessible. This SR500E series are equipped with Bartolini BH2 pickups in a dual-coil style configuration with a lower resonant frequency, providing a balanced, warm response with a tighter bottom end and a fuller midrange. ',
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
    description:
      'Tap into burly Marshall tone anywhere from your bedroom to the stage, with the Marshall JCM800 tube amplifier. With per-channel Gain and Volume controls, a dedicated Resonance control, reverb, and an effects loop, the JCM800 is ready to gig. And with its adjustable power level, you can dial in cranked-amp tones that won t wake your neighbors — or even use the Softube speaker-emulated output for direct recording and monitoring. Marshall even refined the JCM800 tube heads EQ section for extremely versatile tone shaping.',
  },
  {
    name: 'Squier Jaguar',
    slug: 'squier-jaguar',
    category: 'Guitars',
    image: '../images/squierjaguar.jpg',
    price: 400,
    countInStock: 100,
    brand: 'Squier',
    rating: 5,
    numReviews: 120,
    description:
      'The Classic Vibe ‘70s Jaguar turns up the volume on retro style and produces incredible tone courtesy of its dual Fender-Designed alnico single-coil pickups. Small hands will appreciate the short 24” scale length and slim, comfortable “C”-shaped neck profile with an easy-playing 9.5”-radius fingerboard and narrow-tall frets. This Jaguar is faithful to the original with a vintage-style tremolo system for expressive string bending effects and floating bridge with barrel saddles. This throwback Squier model also features 1970s inspired headstock markings, nickel-plated hardware and a slick vintage-tinted gloss neck finish for an old-school aesthetic vibe.',
  },
  {
    name: 'Guitar Pick',
    slug: 'guitar-pick',
    category: 'Other',
    image: '../images/guitarpick.jpg',
    price: 5,
    countInStock: 1000,
    brand: 'Dunlop',
    rating: 5,
    numReviews: 60,
    description:
      'Dunlops Max Grip guitar picks have a nonslip texture that is molded into the entire gripping surface for incredible control. Dunlops technology lets players increase their speed and articulation without fear. The beveled edge of the guitar picks allow for quick string release.',
  },
  {
    name: 'Bass Pick',
    slug: 'bass-pick',
    category: 'Other',
    image: '../images/basspick.jpg',
    price: 5,
    countInStock: 500,
    brand: 'Dunlop',
    rating: 4,
    numReviews: 20,
    description:
      'Dunlops Max Grip bass picks have a nonslip texture that is molded into the entire gripping surface for incredible control. Dunlops technology lets players increase their speed and articulation without fear. The beveled edge of the bass picks allow for quick string release.',
  },
  {
    name: 'Instrument Cable 20ft',
    slug: 'instrument-cable',
    category: 'Other',
    image: '../images/cables.jpg',
    price: 15,
    countInStock: 500,
    brand: 'Dunlop',
    rating: 5,
    numReviews: 17,
    description:
      'Dunlops Instrument Cable is crafted with oxygen-free copper wire for low oxidation and long life plus heavy-duty heatshrunk tubing for strain relief. The cables stylishly flecked tweed wrap adds vintage appeal and the right-angle 1/4" connectors are gold tipped.',
  },
  {
    name: 'Pedal Board',
    slug: 'pedal-board',
    category: 'Other',
    image: '../images/pedalboard.jpg',
    price: 89,
    countInStock: 200,
    brand: 'Pedaltrain',
    rating: 4,
    numReviews: 35,
    description:
      'Pedaltrains Classic Series is rooted in the companys best-selling pedalboard models. Pedaltrain has incorporated design improvements that make these models better than ever. Based on the original PT-JR, the Classic JR features Pedaltrains original four-rail design and traditional rail spacing. However, the Classic JR has been updated with an open-front design (portholes are history) making power supply mounting more flexible and convenient. Other changes include a wider stance at 18" and the elevation has been raised by approximately 1". And, as always, Classic JR is made with Pedaltrains signature featherweight aircraft-grade aluminum. *PEDALS NOT INCLUDED*',
  },
  {
    name: 'JHS Overdrive Pedal',
    slug: 'jhs overdrive pedal',
    category: 'Pedals',
    image: '../images/pedaldistortion2.jpg',
    price: 129,
    countInStock: 200,
    brand: 'JHS',
    rating: 5,
    numReviews: 24,
    description:
      'The JHS 3 Series guitar pedals go back to the basics, streamlining the controls to just three knobs to serve up serious, straight-ahead tone! Housed in a sleek, no-frills enclosure, the JHS 3 Series Overdrive uses a trifecta of Volume, Body, and Drive controls to generate everything from a touch of grit to blistering dimed-amp distortion. Guitarists at Sweetwater have found the 3 Series Overdrive useful as an always-on pedal for nudging a tube amp into its sweet spot or as a boost for pushing fuzz pedals and high-gain distortion boxes over the edge. For added versatility, JHS included a Gain switch to let you select between compressed, saturated distortion or a wide-open crunch that responds nicely to touch dynamics. With its no-nonsense attitude and budget-friendly price, the JHS 3 Series Overdrive is an ideal dirt pedal for greenhorn guitarists and grizzled weekend warriors alike!',
  },
  {
    name: 'MXR 78 Distortion',
    slug: 'mxr-78-distortion',
    category: 'Pedals',
    image: '../images/pedaldistortion.jpg',
    price: 99,
    countInStock: 200,
    brand: 'MXR',
    rating: 4.5,
    numReviews: 16,
    description:
      'Get ready for huge amp-style stack tones and old-school distortion! The MXR Custom Badass ‘78 Distortion is one mighty pedal. MXR went ahead and took a classic distortion circuit then hot rodded the heck out of it, giving you an over-the-top lead sound and rich, saturated rhythms when you want them. Plus, the Custom Badass ‘78 Distortion makes it easy to dial in those tones, thanks to three simple knobs. Engage the Crunch button, boost harmonic content, and hang on. If youve got an ear for incredible distortion tones, then heres the pedal for you: the MXR Custom Badass ‘78 Distortion.',
  },
  {
    name: 'Beginner Combo',
    slug: 'beginner-combo',
    category: 'Other',
    image: '../images/stratcombo.jpg',
    price: 159,
    countInStock: 0,
    brand: 'RBGuitars',
    rating: 3.5,
    numReviews: 67,
    description:
      'Complete guitar set starter pack includes full size guitar & guitar amp & equipment you need to rock straight out of the box. Perfect choice for novice & intermediate players.',
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
