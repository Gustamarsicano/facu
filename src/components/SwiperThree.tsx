"use client";

import Image from "next/image";

import Logo from "./../img/logo-1.jpg";
import Keanu from "./../img/keanu.jpg";
import Front from "./../img/front.jpg";
import Racismo from "./../img/racismo.jpg";
import Joy from "./../img/joy.jpeg";
import JoyLogo from "./../img/joylogo.jpeg";
import Market from "./../img/marketing.jpeg";
import Vita from "./../img/vita.jpeg";
import Sniper from "./../img/sniper.jpeg";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function SwiperThree() {

  return (
    <section>
      <div
        id="works"
        className="columns-4  gap-x-20 gap-y-20 px-[10%] mt-10 tablet:columns-3 mobile:columns-2 mobile:mt-20 mobile:gap-x-14"
      >
        <div className="mb-4">
          <Image src={Logo} alt="logo" className="rounded-lg" />
        </div>
        <div className="mb-4">
          <Image src={Keanu} alt="logo" className="rounded-lg" />
        </div>
        <div className="mb-4">
          <Image src={Front} alt="logo" className="rounded-lg" />
        </div>
        <div className="mb-4">
          <Image src={Racismo} alt="logo" className="rounded-lg" />
        </div>
        <div className="mb-4">
          <Image src={Joy} alt="logo" className="rounded-lg" />
        </div>
        <div className="mb-4">
          <Image src={JoyLogo} alt="logo" className="rounded-lg" />
        </div>
        <div className="mb-4">
          <Image src={Market} alt="logo" className="rounded-lg" />
        </div>
        <div className="mb-4">
          <Image src={Vita} alt="logo" className="rounded-lg" />
        </div>
        <div className="mb-4">
          <Image src={Sniper} alt="logo" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}
