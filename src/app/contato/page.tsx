// 'use client'
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
import Benefits from "./../../components/Benefits/Benefits";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  // useEffect(() => {
  //   const tagManagerArgs = {
  //     gtmId: "GTM-TW592H4",
  //   };

  //   TagManager.initialize(tagManagerArgs);
  // });
  return (
    <section className="min-h-screen h-full flex items-center justify-center mobile:min-h-[300px] mobile:h-auto mobile:pt-20">
      <div className="px-[10%] grid grid-cols-2 mobile:grid-cols-1 mobile:pt-[25px] mobile:px-[5%]">
        <div className="flex items-start flex-col justify-start">
          <h1 className="text-3xl">Fale diretamente comigo!</h1>

          <Benefits
            className="mt-8"
            key={1}
            title="Gustavo Marsicano de Almeida"
            description={[
              "whatsapp: (11) 98235-6776",
              "email: gustavomarsicano2002@gmail.com",
            ]}
          />

          <div className="mt-4">
            <h3>Instagram</h3>
            <Link href="https://www.instagram.com/gustavomarsi2002/">
              <p>@gustavomarsi2002</p>
            </Link>
          </div>
        </div>

        <form className="mobile:my-[75px]">
          <Input
            className="w-full"
            required={true}
            type="text"
            placeholder="Nome"
          />
          <Input
            className="w-full mt-4"
            type="text"
            required={true}
            placeholder="Numero"
          />
          <Input
            className="w-full mt-4"
            type="text"
            required={true}
            placeholder="Email"
          />
          <p className=" mt-4">Por onde devemos te responder?</p>
          <select
            name="select"
            id="select"
            className="text-black-700 w-full mt-4 rounded-md p-2 ring-yellow-500 focus:outline-none focus:ring-2 focus:bg-black-50"
          >
            <option value="whatsapp" className="text-black-300">
              Whatsapp
            </option>
            <option value="ligação" className="text-black-300">
              Ligação
            </option>
            <option value="Email" className="text-black-300">
              Email
            </option>
          </select>
          <textarea
            placeholder="mensagem"
            className="h-[150px] text-black-700 mt-4 rounded-md w-full p-2 ring-yellow-500 focus:outline-none focus:ring-2 focus:bg-black-50"
          />
          <div>
            <input type="checkbox" className="mr-2" required />
            <label>
              Eu aceito receber informações e promoções nos dados que estou
              fornecendo e aceito todas as políticas de privacidades e termo de
              uso deste site.
            </label>
          </div>
          <Button className="w-full mt-4">Enviar mensagem</Button>
        </form>
      </div>
    </section>
  );
}
