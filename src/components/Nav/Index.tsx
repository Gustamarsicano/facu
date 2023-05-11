'use client'
import { useEffect } from "react";
import ItemNav from "./ItemNav";
import { gsap } from "gsap";

import { BsWhatsapp, BsInstagram } from 'react-icons/bs'




export default function Nav() {
  useEffect(() => {
    const t1 = gsap.timeline()

    const itens = document.querySelectorAll('#itemNav')

    itens.forEach((item, index) => {
      gsap.to(item, { opacity: 1, delay: (index - 0.5) + 3 })

      gsap.to('#icons', { opacity: 1, delay: 4 })
    })

  })

  return (
    <nav id="test" className="fixed flex flex-col justify-between bg-transparent w-16 h-screen z-10 py-4">
      <ul className=" flex flex-col items-center rotate-180 justify-around w-full bg-transparent h-2/5">
        <ItemNav href="/">Início</ItemNav>
        <ItemNav href="/">Início</ItemNav>
        <ItemNav href="/">Início</ItemNav>
      </ul>

      <div id="icons" className="flex flex-col items-center rotate-180 justify-around h-[100px] opacity-0">
        <BsWhatsapp size={20} className="rotate-180"/>

        <BsInstagram size={20} className="rotate-180"/>
      </div>
    </nav>
  )
}