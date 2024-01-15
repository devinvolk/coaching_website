import Image from "next/image";
import home from "../public/home.JPG"

export default function Home() {
  return (
    <Image
      src={home}
      alt="Devin Volk cycling in Red Rocks, Nevada"
      priority
    />
  )
}
