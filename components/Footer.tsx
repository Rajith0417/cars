import Image from 'next/image'
import React from 'react'
import { footerLinks } from '@/constants'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__container'>
            <div className='footer__left'>
                <Image 
                src={'/logo.svg'} 
                alt={'car hub logo'}
                width={118}
                height={18}
                className="object-contain bg-gray"
                />
                <p className='text-base text-gray-700'>
                    Car-hub 2023 <br />
                    All Rights Reserved &copy;
                </p>
            </div>
            <div className="footer__links">
              {
                footerLinks.map((section, index) => (
                  // When you have multiple JSX elements to be returned in the same block, they need to be wrapped in a single parent element
                  <div key={index} className="footer__link">
                    <h3 className='font-bold' key={index}>{section.title}</h3> 
                    {
                      section.links.map((item, index2) => (
                        <Link 
                        key={index2}
                        href={item.url}
                        className="text-gray-500"
                        >
                          {item.title}
                        </Link>
                      ))
                    }
                  </div>
                ))
              }
            </div>
        </div>
        <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
    </footer>
  )
}

export default Footer
