import Image from "next/image";
import React from "react";
import partners from "../../public/images/partners.JPG";
import everyManJackIcon from "../../public/partner_images/everyManJack_icon.jpeg";
import theFeedIcon from "../../public/partner_images/theFeed_icon.PNG";
import wynRepublicIcon from "../../public/partner_images/wynRepublic_icon.PNG";
import enveIcon from "../../public/partner_images/enve_icon.PNG";
import rokaIcon from "../../public/partner_images/roka_icon.jpeg";
import hypericeIcon from "../../public/partner_images/hyperice_icon.PNG";
import feltIcon from "../../public/partner_images/felt_icon.jpeg";

const page = () => {
  const partnerList = {
    "Every Man Jack": [
      everyManJackIcon,
      "Every Man Jack is a brand that offers a wide range of grooming products for men. Whether it's hair care, body care, skin care, or beard care, they've got you covered. Their collections include shampoo, conditioner, styling products, body wash, body bars, cologne, deodorant, antiperspirant, hand sanitizer, hand wash, lotion, and more. Every product is made with as many naturally derived and plant-based ingredients as possible, without compromising on performance. Their body wash is particularly noteworthy for its luxurious lather that leaves your skin feeling incredibly smooth. But it's not just about the products; Every Man Jack also believes in helping men take better care of themselves and connect with the world around them. They strive to use ingredients that are good for you and the environment. Join their mission by exploring their range of grooming essentials and experience the difference for yourself.",
    ],
    "The Feed": [
      theFeedIcon,
      "The FEED is a renowned brand that offers a wide range of nutrition and training products for athletes. They have gained a reputation for providing high-quality supplements and gear that optimize performance and support overall wellbeing. Their product line includes nutrition products such as hydration gels, chews, bars, waffles, and recovery formulas. They also offer supplements for focus, mood, stress, sleep, gut health, and anti-aging. In addition, The FEED provides training gear such as body bottles, clothing, bags, rollers, and compression gear. They are committed to helping athletes achieve their full potential by providing them with the tools they need to excel in their respective sports. With a focus on quality and performance, The FEED continues to be a trusted brand among athletes of all levels.",
    ],
    "Wyn Republic": [
      wynRepublicIcon,
      "WYN republic is a premium brand that specializes in triathlon and cycling apparel. With a commitment to combining aerodynamics with simplistic, elegant design, WYN republic offers a range of high-quality products for both men and women. Their product lineup includes cycling jerseys, shorts, and tights, as well as TT/skin suits, jackets, and outerwear. For those into triathlon, they offer trisuits, separates, and running gear. WYN republic also has a wide collection of accessories such as gloves, warmers, socks, and headwear. In addition to their impressive product range, WYN republic also promotes sustainability and community engagement. They have a dedicated racing team and place a strong emphasis on people and the planet. Whether you're a professional athlete or a passionate hobbyist, WYN republic's commitment to performance and style makes them the go-to brand for all your triathlon and cycling needs. Subscribe to their newsletter now and enjoy 10% off your first purchase.",
    ],
    "Enve Composites": [
      enveIcon,
      "ENVE Composites is a brand that goes beyond being just riders. They are risk takers, engineers, and innovators driven by their love for cycling. With a team made up of skilled individuals, they create the world's best carbon fiber products. By partnering with renowned frame builders and the world's top athletes, they combine cutting-edge technology with athlete feedback to deliver products that excel in lightness, stiffness, and durability. Their aim is to provide customers with uncompromising products for an unparalleled riding experience. ENVE offers a range of products including wheels, components, and equipment. Their Foundation Wheels, starting at $1400, are designed to meet the highest standards of performance. They also provide comprehensive support services including contact options, warranty support, product registration, tire pressure recommendations, spoke charts, returns and refunds, and sponsorship applications. With a focus on constantly improving and striving for excellence, ENVE Composites ensures that their customers receive products that enhance their cycling performance. Stay up to speed with ENVE through their website and social media platforms including Instagram, Facebook, Twitter, and YouTube.",
    ],
    Roka: [
      rokaIcon,
      "ROKA is a brand that specializes in creating patented and award-winning performance sunglasses, prescription eyewear, and technical apparel. Designed by athletes for athletes, ROKA offers a wide range of products to enhance your performance. Their performance sunglasses combine both form and function, ensuring that you don't have to compromise on style or performance. With features like ultra-lightweight frames, advanced lens coatings, and a no-slip fit, they are perfect for any activity. ROKA also offers a selection of prescription eyewear that includes both eyeglasses and sunglasses. Their frames are designed to look great on a wide range of face shapes, providing versatility and style. In addition to eyewear, ROKA offers a range of technical apparel, including wetsuits, triathlon race suits, swimskins, and swimwear. Their gear is designed to meet the demands of athletes and provide optimal performance. With a commitment to quality and customer satisfaction, ROKA offers a 1,000-day guarantee, warranty protection, free shipping on orders over $150, and easy returns. Join the ROKA community on Instagram and Strava to participate in challenges, share your experiences, and be featured. Don't compromise on your performance gear, choose ROKA.",
    ],
    Hyperice: [
      hypericeIcon,
      "HyperIce makes innovative vibrating foam rollers and ice compression wraps for training, faster muscle recovery, and rehabilitation.",
    ],
    "Felt Bicycles": [
      feltIcon,
      "Felt Bicycles is the epitome of speed and innovation. Since 1991, they have been at the forefront of cycling, constantly pushing design boundaries and performance limits. Their bikes are meticulously crafted for those craving speed and adrenaline. Felt Bicycles believes that the only way to ride is fast, and they are dedicated to helping their customers achieve new records, conquer challenging courses, and win world championships. With an unwavering commitment to their riders, Felt Bicycles creates bikes that have shattered triathlon world records, dominated road races, and triumphed on the track and trails. They prioritize function over form, ensuring their bikes meet the wildest needs of their riders. From unbeatable aerodynamics to insane handling, Felt Bicycles delivers an unparalleled cycling experience. Racing is the heart and soul of Felt Bicycles. It fuels their passion for creating extraordinary bikes with killer stiffness, next-level comfort, and crazy handling. Whether you're racing against friends or tearing through trails, Felt Bicycles is there to provide the adrenaline rush you seek. Join Felt Bicycles on the ride of your life and experience the sheer exhilaration of pedaling like a maniac. Embrace their California spirit of wild innovation and crazy determination as you crush your performance goals. With Felt Bicycles, speed is the name of the game, and they are here to help you unleash your beast mode.",
    ],
  };

  return (
    <div>
      <Image
        src={partners}
        alt="Head shot of Devin Resting on the wall during a swim workout"
        priority
      />
      {Object.entries(partnerList).map(([key, value]) => (
        <div
          key={key}
          className="grid grid-row-3 justify-items-center lg:grid-cols-12 lg:gap-4 mx-auto w-3/4"
        >
          <hr className="my-10 border-t-2 border-neutral-500 rounded-full w-full lg:col-span-12" />
          <div className="mb-6 lg:col-start-1 lg:col-end-5 lg:self-center">
            <Image src={value[0]} alt={key} width={300} height={300} />
          </div>
          <div className="lg:col-start-6 lg:col-end-13 lg:self-center">
            <p className="text-neutral-800">{value[1]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
