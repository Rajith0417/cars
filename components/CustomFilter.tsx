"use client";

import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { CustomFilterProps } from "@/types";
import { useRouter } from "next/navigation";

const CustomFilter = ({ type, options }: CustomFilterProps) => {
  const [selectedItem, setSelectedItem] = useState(options[0]);
  const router = useRouter();
  const updateParams = (e: {title: string, value: string})=>{

    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);
    // console.log(searchParams.get("model"));
    
    searchParams.set(type, e.value);

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
    
  }

  return (
    <div className="w-fit">
      <Listbox 
      value={selectedItem} 
      onChange={(e)=>{setSelectedItem(e), updateParams(e)}}
      >
      <div className='relative w-fit z-10'>
        <Listbox.Button className="custom-filter__btn">
          <span className="block truncate">{selectedItem.title}</span>
          <Image
            src="/chevron-up-down.svg"
            width={20}
            height={20}
            className="ml-4 object-contain"
            alt="chevron_up-down"
          />
        </Listbox.Button>
        <Transition
          as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="custom-filter__options">
            {options.map((item) => (
              <Listbox.Option
                key={item.title}
                value={item}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 ${
                    active ? "bg-primary-blue text-white" : "text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item.title}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;
