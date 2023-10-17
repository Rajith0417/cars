import { CarCard, CustomFilter, Hero, SearchBox } from "@/components";
import { yearsOfProduction, fuels } from "@/constants";
import { carProps, filterProps} from "@/types";
import { fetchCars } from "@/util";

export default async function Home({searchParams}: {searchParams:filterProps}) {
  
  const cars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const carsEmpty = cars.length < 1 || !cars || !Array.isArray(cars);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h2 className="text-4xl font-extrabold">Car Catalogue</h2>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBox />
          <div className="home__filter-container">
            <CustomFilter type="year" options={yearsOfProduction}/>
            <CustomFilter type="fuel" options={fuels}/>
          </div>
        </div>
        {!carsEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((singleCar, index) => (
                <CarCard key={index} car={singleCar} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className='text-black text-xl font-bold'>No Result</h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
