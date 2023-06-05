"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

import Cel from "./../img/OBJECT.png";
import Image from "next/image";
import Link from "next/link";

export default function eSwiperOne() {
  useEffect(() => {
    gsap.to("#h1", { opacity: 1 });

    gsap.to("#cel", {
      opacity: 1,
      delay: 0.5,
    });

    gsap.to("#id-button", {
      opacity: 1,
      delay: 1,
    });
    gsap.to("#text", {
      opacity: 1,
      delay: 1,
    });
  });

  return (
    <section className="min-h-screen grid grid-cols-2 w-full bg-black-800 px-[10%] relative tablet:gap-x-4 mobile:grid-cols-1">
      <div className=" flex flex-col justify-center text-start tablet:justify-start tablet:mt-20 z-10">
        <h1 id="h1" className="text-3xl font-bold opacity-0">
          Revolucionando a <span id="gradient-text">Experiência Visual</span>
        </h1>
        <p id="text" className="opacity-0">
          <p>
            Aqui você encontrará uma coleção diversificada de minhas obras de
            arte, capturando minha paixão pela expressão visual. Cada peça é um
            reflexo de minha jornada artística e meu compromisso com a
            excelência.
          </p>
        </p>

        <Link href="https://wa.me/5511982356776">
          <button
            id="id-button"
            className="w-full mt-4 py-2 rounded-md font-medium opacity-0"
          >
            Conhecer mais
          </button>
        </Link>
      </div>
      <div
        id="cel"
        className=" absolute right-0 bottom-0 h-[850px] opacity-0 tablet:h-[650px] mobile:h-[auto]"
      >
        <Image src={Cel} alt="rede social" priority={true} width={850} />
      </div>
    </section>
  );
}
