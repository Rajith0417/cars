'use client'

import React, { useEffect, useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CustomButton } from '.';
import Image from 'next/image';

function SearchBox() {

    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // console.log(pathname);
    // console.log(searchParams);
    
    const handleSearch = (event: React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();//stops page refresh

      if (manufacturer.trim() === "" && model.trim() === "") {
        return alert("Please provide some input");
      }

      // Create a new URLSearchParams object using the current URL search parameters
      const searchParams = new URLSearchParams(window.location.search);
      // console.log(searchParams.get("model"));
      
      // Update or delete the 'model' search parameter based on the 'model' value
      if (model) {
        searchParams.set("model", model);
      } else {
        searchParams.delete("model");
      }

      // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
      if (manufacturer) {
        searchParams.set("manufacturer", manufacturer);
      } else {
        searchParams.delete("manufacturer");
      }

      // Generate the new pathname with the updated search parameters
      const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

      router.push(newPathname);

    }

  return (
    <form className='search-box' onSubmit={handleSearch}>
        <div className="search-box__item">
        <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer = {setManufacturer}
        />
        <CustomButton 
        containerStyles={'bg-primary-blue-100 -ml-3 z-10 rounded-full sm:hidden'} 
        rightIcon={'/magnifying-glass.svg'} 
        btnType={'submit'}
        width={100}
        height={100}
        />
        </div>
        <div className='search-box__item'>
          <Image
            src='/model-icon.png'
            width={25}
            height={25}
            className='absolute w-[20px] h-[20px] ml-4'
            alt='car model'
          />
          <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Insight'
          className='search-box__input'
          />
          <CustomButton 
          containerStyles={'bg-primary-blue-100 -ml-3 z-10 rounded-full sm:hidden'} 
          rightIcon={'/magnifying-glass.svg'} 
          btnType={'submit'}
          width={100}
          height={100}
          />
        </div>
        <CustomButton 
        containerStyles={'bg-primary-blue-100 -ml-3 z-10 rounded-full max-sm:hidden'} 
        rightIcon={'/magnifying-glass.svg'} 
        btnType={'submit'}
        width={100}
        height={100}
        />
    </form>

  )
}

export default SearchBox
