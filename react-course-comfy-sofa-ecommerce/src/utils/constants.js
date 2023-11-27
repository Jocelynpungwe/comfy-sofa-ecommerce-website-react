import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
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
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Our mission at Comfy Sloth is simple: to redefine relaxation by offering meticulously crafted, luxurious sofas that elevate comfort while adding a touch of style to your space.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'We envision a world where everyone finds solace in the embrace of quality, comfort, and sophistication within their living spaces, thanks to Comfy Sloths premium furniture.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Founded with a passion for reimagining relaxation, Comfy Sloth started in 2019 by Jocelyn Nemba Pungwe. With a commitment to superior craftsmanship and customer satisfaction, we have grown from a humble idea to a trusted destination for exquisite, cozy sofas.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
