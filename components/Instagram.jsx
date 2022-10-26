import Link from "next/link";
import React from "react";
import IgImg1 from "../public/foto1.jpg";
import IgImg2 from "../public/foto2.jpg";
import IgImg3 from "../public/foto3.jpg";
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div id="gallery" className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@satriabimasakti_12</p>
      <div className="grid  md:grid-cols-1  grid-cols-1 lg:grid-cols-3 gap-2 p-4">
        <Link href="https://www.instagram.com/p/ChbAwB5pMUJ/">
          <a target={"_blank"}>
            <InstagramImg socialImg={IgImg1} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/p/Cb1o6i1plwh/">
          <a target={"_blank"}>
            <InstagramImg socialImg={IgImg2} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/p/CbUW3-CJTJk/">
          <a target={"_blank"}>
            <InstagramImg socialImg={IgImg3} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Instagram;
