"use client";
import { useEffect, useState } from "react";
import ItemNav from "./ItemNav";
import { gsap } from "gsap";

import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const itens = document.querySelectorAll("#itemNav");

    itens.forEach((item, index) => {
      gsap.to(item, { opacity: 1, delay: index - 0.5 + 3 });

      gsap.to("#icons", { opacity: 1, delay: 4 });
    });
  });

  return (
    <>
      <div className="fixed top-5 right-5 z-50 hidden mobile:block ">
        <RxHamburgerMenu
          onClick={() => {
            setOpen(!open);
          }}
          size={30}
        />
      </div>
      <nav
        id="test"
        className={`fixed flex flex-col justify-between bg-transparent w-16 h-screen z-10 py-4 mobile:w-full mobile:h-[60px] mobile:flex-row mobile:px-[5%] mobile:py-0 mobile:backdrop-blur-sm 
        mobile:${open && "hidden"}
        `}
      >
        <ul
          className={`flex flex-col items-center rotate-180 justify-around w-full bg-transparent h-3/6 mobile:rotate-0 mobile:flex-row mobile:h-[60px] mobile:justify-normal mobile:pt-3`}
        >
          <ItemNav href="/">Início</ItemNav>
          <ItemNav href="/sobre-mim">Sobre mim</ItemNav>
          <ItemNav href="/contato">Contato</ItemNav>
        </ul>

        <div
          id="icons"
          className="flex flex-col items-center rotate-180 justify-around h-[100px] opacity-0 mobile:flex-row mobile:rotate-0 mobile:h-[60px] mobile:hidden"
        >
          <ItemNav href="https://wa.me/5511982356776">
            <BsWhatsapp size={20} className="rotate-90 mobile:rotate-0" />
          </ItemNav>

          <ItemNav href="https://www.instagram.com/gustavomarsi2002/">
            <BsInstagram size={20} className="rotate-180 mobile:rotate-0" />
          </ItemNav>
        </div>
      </nav>
    </>
  );
}
