import Image from "next/image";
import Bg1 from "../public/portofolio.png";
import Link from "next/link";
import { FaInstagram } from 'react-icons/fa';

const Slider = () => {
  return (
  <div className="max-w-[1240px] mx-auto my-auto ">
        <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <Link  href="https://sbs-portolio.vercel.app/">
        <a>
          <Image src={Bg1} className="" />
        </a>
      </Link>
      </div>
  );
};

export default Slider;
