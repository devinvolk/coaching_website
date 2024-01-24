import Image from "next/image";
import home from "../public/images/home.webp";
import finish from "../public/images/finish.webp";

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
              sizes="90vw"
            />
          </div>
          <div className="lg:col-start-4 lg:col-end-7">
            <h2 className="text-3xl italic font-semibold text-center mb-4">
              About Devin
            </h2>
            <p className="text-neutral-700">
              Born in Corvallis, Oregon in 1994, Devin's early years were
              defined by active participation in team sports. Throughout high
              school, he excelled as a four-sport varsity athlete, accumulating
              an impressive 10 varsity letters in Soccer, Cross Country, Alpine
              Ski Racing, and Track. Post high school, he pursued his education
              at California Polytechnic State University, where his journey into
              triathlon began.
              <br />
              <br />
              As a member of the Cal Poly Triathlon Team, Devin swiftly
              developed a passion for the sport, steadily advancing in skill and
              rank. By the conclusion of his inaugural season, he secured the
              second spot on the team and claimed a position within the top 150
              nationally. His collegiate career reached its pinnacle with a
              notable 3rd overall combined finish at the 2018 USAT Collegiate
              National Championships.
              <br />
              <br />
              Devin's commitment extended beyond collegiate competitions; he
              proudly represented the United States in four amateur Ironman 70.3
              World Championships, culminating in a World Championship Title in
              2021. In 2022, Devin seized a unique opportunity to train
              alongside Chelsea Sodaro during her preparation for a world title.
              This immersive experience provided him with invaluable insights
              into the routine, mindset, and determination of a World Champion,
              undoubtedly influencing his own success on the island. His amateur
              career concluded with a remarkable runner-up placement in the
              25-29 age group in Hawaii, showcasing consistent performances
              across all three disciplines.
              <br />
              <br />
              Notably, Devin played a part in the viral events unfolding at the
              finish line of the 2022 Ironman World Championships. For further
              details on these events{" "}
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
          performances in just his first season
        </h2>
        <hr className="my-10 border-t-2 border-neutral-500 rounded-full" />
      </div>
    </div>
  );
}
