import Image from "next/image";
import home from "../public/home.JPG";
import finish from "../public/finish.JPG";

export default function Home() {
  return (
    <div>
      <Image
        src={home}
        alt="Devin Volk cycling in Red Rocks, Nevada"
        priority
      />
      <div className="mx-auto w-4/5">
        <hr className="my-10 border-t-2 border-neutral-500 rounded-full" />
        <h1 className="text-center text-4xl font-bold italic">
          25-29 Ironman 70.3 World Champion & Ironman World Championship Runner
          Up
        </h1>
        <hr className="my-10 border-t-2 border-neutral-500 rounded-full" />
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-6 gap-4">
          <div className="flex justify-center lg:col-start-1 lg:col-end-4 xl:ml-10">
            <Image
              src={finish}
              alt="Devin Volk carrying a female competitor across the finish line at the 2022 Ironman World Championships in Kona after he had finished"
              style={{ maxHeight: '650px', maxWidth: '473px'}}
            />
          </div>
          <div className="lg:col-start-4 lg:col-end-7">
            <h2 className="text-3xl italic semi-bold text-center mb-4">About Devin</h2>
            <p className="text-center text-[#626262]">
              Born in Bergen, Norway in 1996, Gustav won his first national
              titles in 2014, winning both the triathlon and duathlon, and went
              on to score a top 10 finish in the Junior World Championships the
              following year. After a testing transition into the world of Elite
              racing, Gustav found consistency in 2017 and a first World Cup
              gold in Karlovy Vary thanks to a brilliant ride and run. <br /><br /> The
              2018 season was certainly one to remember, opening with a top 10
              finish in Abu Dhabi before landing bronze in Bermuda and sharing
              the podium with his teammates, the first time a country had swept
              the men's WTS podium. World Cup wins in Lausanne and Weihai with a
              second-place finish at the Ironman 70.3 Middle East Championships
              in Bahrain cemented the young Norwegian's reputation as one to
              watch for 2019. <br /><br /> Gustav certainly didn't disappoint with a third
              place at the ITU World Triathlon Bermuda and fourth place finish
              at the ITU World Triathlon Grand Final in Lausanne but his biggest
              moment of his career undoubtedly came at the 2019 Ironman 70.3
              World Championships in Nice where he beat a truly world class
              field to become the youngest ever Ironman World Champion. Gustav
              then followed this victory up by winning the 2021 Ironman 70.3
              World Championships and at the same time was crowned the world
              no.1 triathlete. Gustav stamped his name in the history books by
              winning the 2022 Ironman World Championships in Kona, Hawaii.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
