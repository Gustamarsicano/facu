"use client";
import Image from "next/image";

import Gust from "./../../img/about/gustavo.jpg";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Page() {
  useEffect(() => {
    gsap.to("#img", {
      opacity: 1,
    });
    gsap.to("#content1", {
      opacity: 1,
      delay: 0.25,
    });
    gsap.to("#content2", {
      opacity: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <section className="px-[10%] flex min-h-screen justify-center items-center mobile:px-[5%] mobile:pt-20 mobile:pb-20">
      <div className="grid grid-cols-2 gap-x-20 tablet:flex tablet:flex-col tablet:flex-col-reverse tablet:items-center">
        <div className="grid grid-rows-2">
          <div id="content1" className="p-4	relative opacity-0 tablet:mb-10">
            <h1 className="text-2xl  font-semibold mb-2">Historia</h1>
            <p className="mb-2">
              Comecei no design há cinco anos, quando fiz um curso de computação
              gráfica. Desde então, me apaixonei pelo universo da comunicação
              visual. Mais tarde, ingressei em uma faculdade de Produção
              Multimídia, onde aprimorei minhas habilidades nas ferramentas
              Adobe, buscando sempre a máxima qualidade em meus trabalhos.
            </p>
            <p className="mb-2">
              Enfrentei desafios no início, mas cada obstáculo foi uma
              oportunidade de aprendizado e experiência, moldando a pessoa que
              sou hoje. Atualmente, estou comprometido em iniciar minha jornada,
              criando arte e vídeos com qualidade e dedicação.
            </p>
            <p className="mb-2">
              Acredito no poder do design para transmitir mensagens impactantes.
              Minha missão é utilizar minhas habilidades para criar soluções
              visuais envolventes, inspiradoras e informativas. Estou animado
              para enfrentar novos desafios e estabelecer parcerias criativas
              com indivíduos e empresas que compartilham dessa visão.
            </p>
          </div>

          <div
            id="content2"
            className=" border-2 p-4 border-[#dd4d33] bg-[#dd4d33]	opacity-0 "
          >
            <h1 className="text-2xl  font-semibold mb-2">Metas</h1>
            <p className="mb-2">
              Como profissional em ascensão, estou comprometido em dominar os
              softwares de edição de vídeo e design, como o Adobe Premiere,
              After Effects, Photoshop e Illustrator. Estou constantemente
              aprimorando meu conhecimento e explorando recursos avançados para
              criar conteúdos visuais de alta qualidade.
            </p>

            <p className="mb-2">
              {" "}
              Minha meta final é me tornar um editor de vídeos cinematográficos
              e designer, mas, no momento, meu foco está em aperfeiçoar minhas
              habilidades nos programas necessários e buscar oportunidades de
              trabalho freelance para ganhar experiência.
            </p>

            <p className="mb-2">
              Além disso, estou ansioso para aplicar minhas habilidades em
              projetos freelance. Trabalhar com clientes diversos me
              proporcionará a oportunidade de enfrentar desafios criativos,
              aprimorar minha capacidade de comunicação e expandir minha rede
              profissional.
            </p>
          </div>
        </div>

        <div id="img" className="opacity-0 tablet:mb-10">
          <Image
            src={Gust}
            alt="gustavo"
            className="h-[700px] w-auto mobile:h-[auto]"
          />
        </div>
      </div>
    </section>
  );
}
