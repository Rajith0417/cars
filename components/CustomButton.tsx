"use client"

import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

function CustomButton({title, containerStyles, textStyles, rightIcon, handleClick, btnType, width=20, height=20}: CustomButtonProps) {
  return (
    <button
    disabled={false}
    type={btnType}
    className={`custom-btn ${containerStyles} ${textStyles}`}
    onClick={handleClick}
    >
      <span
      className={'flex-1'}
      >
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image 
          src={rightIcon} 
          alt='right icon'
          className='object-contain'
          width={width} 
          height={height}/>
        </div>
      ) }
      
    </button>
  )
}

export default CustomButton
