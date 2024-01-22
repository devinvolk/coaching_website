import Image from "next/image";
import React from "react";
import results from "../../public/images/results.webp";

const page = () => {
  const resultsList = {
    2023: [
      "6th Ironman 70.3 Maine",
      "8th Ironman 70.3 Oregon",
      "1st Pacific Crest Beastman",
      "16th Ironman 70.3 Boulder",
      "22nd Ironman 70.3 St. George",
    ],
    2022: [
      "2nd 25-29 Ironman World Championships",
      "3rd 25-29 2021 Ironman World Championships",
    ],
    2021: [
      "1st 25-29 Ironman 70.3 World Championships",
      "2nd Overall Ironman 70.3 Oregon",
      "2nd Overall Ironman 70.3 Hawaii",
    ],
    2019: [
      "3rd Amateur American Ironman 70.3 World Championships",
      "1st Overall Amateur Ironman 70.3 Coeur d'Alene",
      "2nd Overall Amateur Ironman 70.3 Indian Wells",
      "3rd Overall Amatuer Ironman 70.3 St. George",
      "1st Overall Blue Lake Olympic Triathlon",
    ],
    2018: [
      "3rd Overall Combined USAT Collegiate Nationals",
      "3rd Mixed Team Relay USAT Collegiate Nationals",
      "3rd Amatuer American Ironman 70.3 World Championships",
      "1st Overall Amatuer Ironman 70.3 Santa Rosa",
      "1st Ironbruin Classic",
      "1st Berkley Bearathlon",
      "2nd Tritonman Classic",
    ],
  };

  return (
    <div>
      <Image
        src={results}
        alt="Devin holding his Kona 2nd place bowl at the awards"
        priority
      />
      <div className="mx-auto w-3/5">
        {Object.keys(resultsList)
          .reverse()
          .map((year) => (
            <div key={year} className="flex flex-col">
              <hr className="my-10 border-t-2 border-neutral-500 rounded-full" />
              <h2 className="text-5xl italic font-semibold text-center text-neutral-900">
                {year}
              </h2>
              <hr className="w-32 mx-auto border-t-2 border-neutral-900 mb-8" />
              {resultsList[year].map((race, index) => (
                <h4
                  className="text-xl text-center text-neutral-900 mb-3"
                  key={index}
                >
                  {race}
                </h4>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;
