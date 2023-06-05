// import Video from './public/video.avi'

import Footer from "./footer/footer";

export default function SwiperFour() {
  // console.log(Video)
  return (
    <section className="max-h-screen max-w-[80%] m-auto h-full  flex items-center relative">
      <div className="grid grid-cols-2 gap-x-8 tablet:grid-cols-1">
        <div>
          <video loop className="w-full" controls>
            <source src="/cidade.mp4" />
          </video>
          <h2 className="text-center mt-8 font-semibold text-2xl tablet:mt-2 ">
            Como a cidade se comunica
          </h2>
          <p className="mt-2 text-center">
            {" "}
            Neste vídeo estou abordando assuntos de como a cidade se comunica.
          </p>
        </div>

        <div className="tablet:mt-2">
          <video loop className="w-full" controls>
            <source src="/racismo.mp4" />
          </video>
          <h2 className="text-center mt-8 font-semibold text-2xl tablet:mt-2">Racismo</h2>
          <p className="mt-2 text-center"> Vídeo sobre o racismo</p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
