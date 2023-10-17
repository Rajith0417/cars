import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title?: string;
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "submit" | "button";
    width?: number;
    height?: number;
}

export interface SearchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string)=>void
}

export interface carProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface carDetailsProps {
    isOpen: boolean;
    closeModal: (isOpen: boolean)=> void;
    car: carProps;
}

export interface filterProps {
    manufacturer: string;
    year?: number;
    fuel?: string;
    limit?: number;
    model?: string;
}

export interface OptionsProps {
    title: string;
    value: string
}

export interface CustomFilterProps {
    type: string;
    options: OptionsProps[];
}
