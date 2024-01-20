import Image from "next/image";
import home from "../public/images/home.JPG";
import finish from "../public/images/finish.JPG";

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
              style={{ maxHeight: "650px", maxWidth: "433.56px" }}
            />
          </div>
          <div className="lg:col-start-4 lg:col-end-7">
            <h2 className="text-3xl italic font-semibold text-center mb-4">
              About Devin
            </h2>
            <p className="text-neutral-700">
              Born in Corvallis, Oregon in 1994, Devin grew up participating
              primarily in team sports. In high school, he was a 4 sport varisty
              athlete and accumilated 10 varisty letters in Soccer, Cross
              Country, Alpine Ski Racing, and Track. After high school, he
              attending California Polytechnic State University and this is
              where he first started triathlon.
              <br />
              <br />
              As part of the Cal Poly Triathlon Team, Devin quickly feel in love
              with the sport and started climbing his way up the ladder. By the
              end of his first season, he was ranked second on the team and in
              the top 150 in the nation. He finished his collegiate carrer with
              a 3rd overall combined finish at the 2018 USAT Collegiate National
              Championships.
              <br />
              <br />
              Devin went on to represent the United States at 4 amatuer Ironman
              70.3 World Championships and achieved a World Championship Title
              in 2021. In 2022 Devin had the incredible opportunity to train
              with Chelsea Sodaro during her build up to her world title. This
              experience allowed him first hand access to the routine, mindset,
              and determination of a World Champion and was undoubtidly a strong
              contributing factor to his own succuess on the island. Devin
              finished his amatuer career as the runner up in the 25-29 age
              group in Hawaii and had one of the most consistent performances
              across all three disciplines of any finisher.
              <br />
              <br />
              Devin was also a part the viral events that unfolded at the finish
              line of the 2022 Ironman World Championships. To read more about
              what happened{" "}
              <span>
                <a
                  href="https://www.slowtwitch.com/Interview/Be_Like_Devin_Volk_8562.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-neutral-800"
                >
                  Click Here!
                </a>
              </span>
            </p>
          </div>
        </div>
        <hr className="my-10 border-t-2 border-neutral-500 rounded-full" />
        <h2 className="text-3xl text-center font-semibold w-4/5 mx-auto text-neutral-900">
          Devin is now racing as a professional and has achieved 2 top 10
          performances in just his first season.
        </h2>
        <hr className="my-10 border-t-2 border-neutral-500 rounded-full" />
      </div>
    </div>
  );
}
