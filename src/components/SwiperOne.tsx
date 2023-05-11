"use client"

import { useEffect } from "react"
import { gsap } from 'gsap'

export default function eSwiperOne() {
  useEffect(() => {
    const t1 = gsap.timeline()

    t1.to('#gustavo', { opacity: 1 })
    t1.to('#formando', { opacity: 1 })
    t1.to('#paragrafo1', { opacity: 1 })
    t1.to('#paragrafo2', { opacity: 1 })
  })

  return (
    <section className="h-screen w-full bg-slate-900 flex items-center p-[10%]">
      <div className="text-center w-full">
        <h1 className="text-5xl font-semibold text-slate-100 opacity-0" id="gustavo">Gustavo Marscicano</h1>
        <h2 className="text-5xl font-semibold text-slate-100 opacity-0" id="formando">Formando em Produção Multimídia</h2>
        <p className="mt-4 opacity-0" id="paragrafo1">Bem-vindo(a) ao meu portfólio! Sou Gustavo Mascicano, um estudante entusiasmado de Produção Multimídia. Aqui, você encontrará uma amostra do meu trabalho e das minhas habilidades em constante evolução.</p>

        <p className="mt-2 opacity-0" id="paragrafo2">Desde que iniciei minha jornada na faculdade, mergulhei de cabeça no fascinante mundo da Produção Multimídia. Exploro a interseção da tecnologia, criatividade e comunicação, buscando criar experiências únicas e envolventes.</p>
      </div>
    </section>
  )
}