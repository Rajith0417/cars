import { heroImage, manufacturers } from "@/constants";
import { carProps, filterProps } from "@/types";

export async function fetchCars(filters: filterProps, limit?: number){
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filters.manufacturer}&year=${filters.year}&model=${filters.model}&limit=${filters.limit}&fuel_type=${filters.fuel}&limit=${limit}`
    const headers = {
		'X-RapidAPI-Key': 'ee4b61a7b2mshd55c19b3e619c9fp16a62fjsn30af00074a68',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch(url, {
    method: 'GET',
    headers: headers,
    // body: JSON.stringify({
    //   query: pokemonQuery,
    //   variables: {name: name.toLowerCase()},
    // }),
  })
  // console.log("fetch car");
  console.log(url);
  
  const result = await response.json();
  // console.log(result);
  return result;
  
}

export function calculateCarRent(city_mpg: number, year: number){
  // Constants to adjust the impact of city mpg and manufacturing year on the rent
  const mpgImpact = 0.02; // Adjust based on your pricing strategy
  const yearImpact = 0.05; // Adjust based on your pricing strategy

  // Calculate the rent based on the formula
  const baseRent = 1000; // You can set a base rent value
  const rentFromCityMpg = city_mpg * mpgImpact;
  const rentFromYear = (new Date().getFullYear() - year) * yearImpact;

  const totalRent = baseRent + rentFromCityMpg + rentFromYear;

  return Math.round(totalRent * 100) / 100;
}

export const generateCarImageUrl = (car: carProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 

export const dynamicHeroImageUrl = async () =>{
  console.log("-0---0");
  const carManufactures = heroImage;
  const randomIndex = Math.floor(Math.random() * carManufactures.length);
  const randomManufacture = carManufactures[randomIndex];
  console.log(randomManufacture);

  // const url = new URL("https://cdn.imagin.studio/getimage");
  
  // url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  // url.searchParams.append('make', make);
  // url.searchParams.append('modelFamily', model.split(" ")[0]);
  // url.searchParams.append('zoomType', 'fullscreen');
  // url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  // url.searchParams.append('angle', `${angle}`);
  
  const url = `https://cdn.imagin.studio/getimage?customer=&make=${randomManufacture.manufacturer}&modelFamily=${randomManufacture.name}&zoomType=fullscreen&Year=&angle=`;
  // console.log(url);

  return `${url}`;
}
