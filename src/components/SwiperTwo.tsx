"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiBlender,
  SiCanva,
} from "react-icons/si";

import Cel from "./../img/OBJECT.png";
import Image from "next/image";
import Skil from "./Skils/Skil";

export default function SwiperTwo() {
  useEffect(() => {});

  return (
    <section className="min-h-[100vh] flex flex-col justify-center mx-[10%] py-[5%] mobile:mx-[5%]">
      <h2 className="text-3xl mb-4 font-medium mobile:mb-2 mobile:text-xl">
        Tenho domínio sobre:
      </h2>

      <div className="w-full grid grid-cols-2 gap-x-6 gap-y-6 mobile:grid-cols-1 mobile:gap-x-0 mobile:gap-y-3">
        <Skil
          id="illustrator"
          title="Adobe Illustrator"
          paragraph="Criação de logotipos, Design de ilustrações, Design de websites..."
        >
          <SiAdobeillustrator className="text-[130px] text-[#ff9a00] col-span-2 tablet:text-[80px] min-mobile:80px mobile:hidden" />
        </Skil>

        <Skil
          id="photoshop"
          title="Adobe Photoshop"
          paragraph=" Criação de ilustrações digitais,Composição de imagens,Edição de fotos"
        >
          <SiAdobephotoshop className="text-[130px] text-[#30a8ff] col-span-2 tablet:text-[80px] min-mobile: 80px mobile:hidden" />
        </Skil>

        <Skil
          id="photoshop"
          title="Adobe Premiere"
          paragraph=" Edição de áudio,Efeitos visuais,Edição de vídeo"
        >
          <SiAdobepremierepro className="text-[130px] text-[#e080ff] col-span-2 tablet:text-[80px] min-mobile: 80px mobile:hidden" />
        </Skil>

        <Skil
          id="photoshop"
          title="Canva"
          paragraph="Criação de posts para mídias sociais,Criação de apresentações,Criação de logotipos e identidade visual"
        >
          <SiCanva className="text-[130px] text-[#77c2ff] col-span-2 tablet:text-[80px] min-mobile: 80px mobile:hidden" />
        </Skil>
      </div>

      <div className="w-full bg-[#ffcc1e] h-[1px] mt-10 opacity-70  mobile:hidden" />

      <h2 className="text-3xl mb-4 font-medium mt-10 mobile:text-xl mobile:mt-4">
        Estudando sobre:
      </h2>
      <div className="w-full grid grid-cols-2 gap-x-6 gap-y-6 mobile:grid-cols-1 mobile:gap-x-3 mobile:gap-y-3">
        <Skil
          id="photoshop"
          title="Adobe After Effects"
          paragraph="Animação de texto e gráficos,Animação de personagens,Criação de motion graphics"
        >
          <SiAdobeaftereffects className="text-[130px] text-[#9999ff] col-span-2 tablet:text-[80px] min-mobile: 80px mobile:hidden" />
        </Skil>

        <Skil
          id="photoshop"
          title="Blender"
          paragraph="Animação 3D,Modelagem 3D,Renderização"
        >
          <SiBlender className="text-[130px] text-[#ea7600] col-span-2 tablet:text-[80px] min-mobile: 80px mobile:hidden" />
        </Skil>
      </div>
    </section>
  );
}
