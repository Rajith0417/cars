

import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image';
import { dynamicHeroImageUrl } from '@/util';

async function Hero() {

  const dynamicHero = await dynamicHeroImageUrl();

  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className='hero__title'>Find, book, rent a car - quick and super easy!</h1>
            <p className='hero__subtitle'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <CustomButton 
            title = "Explore Cars"
            containerStyles = "bg-primary-blue text-white rounded-full mt-10"
            />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src={dynamicHero} alt='car model' fill priority className='object-contain scale-x-[-1]' />
            {/* <Image 
            src='/hero.png' 
            alt='suv' 
            className='object-contain'
            layout="fill" /> */}
          </div>
          <div className="hero__image-overlay"></div>
        </div>
    </div>
  )
}

export default Hero
