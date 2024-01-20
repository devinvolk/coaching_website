import Image from 'next/image'
import React from 'react'
import coaching from '../../public/images/coaching.JPG'
import afterFinish from '../../public/images/afterFinish.JPG'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Image
      src={coaching}
      alt='Devin cycling up Hawi during the 2022 Ironman World Championships'
      priority
      />
      <div className='mx-auto w-4/5'>
        <hr className="my-10 border-t-2 border-neutral-500 rounded-full" />
        <h1 className="text-center text-4xl font-bold italic capitalize">Do you want to take your perfomance to the next level?</h1>
        <hr className="my-10 border-t-2 border-neutral-500 rounded-full" />
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-6 gap-4">
          <div className="flex justify-center lg:col-start-1 lg:col-end-4 xl:ml-10">
            <Image
              src={afterFinish}
              alt="Devin Volk smiling with his medal and lei after finish the 2022 Ironman World Championships in Kona, Hawaii"
              style={{ maxHeight: "650px", maxWidth: "433.56px" }}
            />
          </div>
          <div className="lg:col-start-4 lg:col-end-7">
            <h2 className="text-3xl italic font-semibold text-center mb-4">
              Coaching Philosophy
            </h2>
            <p className="text-neutral-700">
              After nearly 25 years of participating in competitive sports, Devin has started his own coaching company with the mission of enabling any athlete to reach their potential. Whether you are an endurance sports first-timer or a highly competitive athlete, Devin is ready to help you achieve success, whatever that looks like to you.
              <br />
              <br />
              With a formal education background in biological sciences, Devin has a strong foundation in research-backed training methodologies and metabolism. He aims to combine this science-driven approach with the more nuanced nature of human subjects. After all, you could have the best training plan on paper, but if you don't enjoy doing it, what is the point?
              <br />
              <br />
              Devin's primary objective is to ensure his athletes perform at there best in all 
              aspects of their lives. He believes deeply in the value of having a balanced training 
              approach and giving back to the community. Over the years, Devin has coached numerous 
              athletes to <span className='font-semibold text-neutral-800'>Personal Bests, Ironman World Championship 
              Qualifications,</span> and <span className='font-semibold text-neutral-800'>Boston 
              Marathon Qualifications</span>. He believes that with the right training plan, every athlete 
              can stay <span className='font-semibold text-neutral-800'>Injury-Free, Happy,</span> 
              {" "}and <span className='font-semibold text-neutral-800'>Succeed</span>. If you would like to become a part of DVolk Racing 
              or to hear from Devin directly, {" "}
              <span>
                <Link
                  href={'/contact'}
                  className="font-bold text-neutral-800 underline"
                >
                  Click Here!
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page