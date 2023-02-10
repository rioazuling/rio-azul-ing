import Image from "next/image";
import {useEffect, useRef} from "react";

import CardHome from "../components/CardHome";
import Container from "../components/Container";
import Valores from "../components/Valores";
import foto1 from "../public/foto1.png";
import obra2 from "../public/obra2.png";
import sistAmpliable from "../public/sistAmpliable.png";
import rapidezdemontaje from "../public/rapidezdemontaje.png";
import sitdeanclaje from "../public/sitdeanclaje.png";
import aislacionesTermicas from "../public/aislacionesTermicas.png";
import pinturas from "../public/pinturas.png";
import personasequipamiento from "../public/personasequipamiento.png";
// import videoSrc from "../public/PresentacionEmpresa_Trim.mp4";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // videoRef.current.autoplay = true;
      videoRef.current.addEventListener("canplay", function () {
        if (videoRef.current) {
          videoRef.current.play();
        }
      });
    }
  }, []);

  return (
    <>
      <Container>
        <div>
          <video
            ref={videoRef}
            controls
            autoPlay={true}
            className="w-full h-[415px] object-cover"
            loop={true}
            muted={true}
            playsInline={true}
            src="/PresentacionEmpresa_Trim.mp4"
          />
        </div>

        <div className="flex flex-wrap my-8 justify-center gap-10">
          {/*  */}
          <div className="w-10/12 rounded-md sm:w-96 bg-slate-300 px-5 pt-5">
            <div className="w-8 h-8 bg-blue-50 rounded-full border-2 border-slate-300 absolute top-[505px] sm:top-[510px] sm:mt-2">
              <span className="text-white font-serif text-3xl relative -top-1.5 ml-[5px]">+</span>
            </div>
            <p className="text-blue-50 font-semibold text-base sm:text-2xl">
              Diseñamos y construimos naves metalicas con el respaldo de:
            </p>
            <p className="text-xs capitalize sm:uppercase rounded-md relative top-3 bg-blue-50 text-white py-1 px-1 text-center inline-block font-bold">
              mas de 60 años de experiencia
            </p>
          </div>
          {/*  */}
          <div className="flex flex-wrap w-10/12 sm:w-80 ">
            <div className="border-2 rounded-md border-blue-50 m-1 self-center capitalize text-sm px-1.5 py-1 text-blue-50 dark:text-white">
              depositos
            </div>
            <div className="border-2 rounded-md border-blue-50 m-1 self-center capitalize text-sm px-1.5 py-1 text-blue-50 dark:text-white">
              naves industriales
            </div>
            <div className="border-2 rounded-md border-blue-50 m-1 self-center capitalize text-sm px-1.5 py-1 text-blue-50 dark:text-white">
              construcciones metalicas
            </div>
            <div className="border-2 rounded-md border-blue-50 m-1 self-center capitalize text-sm px-1.5 py-1 text-blue-50 dark:text-white">
              centros de distribucion
            </div>
          </div>
        </div>

        <div className="flex justify-center px-1 mx-auto sm:px-0 max-w-3xl w-full">
          <Image priority alt="obra-1" className="w-full h-auto" src={foto1} />
        </div>

        <div className="flex flex-col items-start justify-center max-w-3xl mx-auto my-4 px-4 sm:px-0">
          <h1 className="mb-1 text-xl font-bold uppercase tracking-tight text-black md:text-4xl dark:text-white">
            Construimos
          </h1>
          <h1 className="mb-1 text-xl font-bold uppercase tracking-tight text-black md:text-4xl dark:text-white">
            Naves Industriales
          </h1>

          <div className="h-2 w-24 sm:w-48 rounded-md bg-blue-50 mb-4" />

          <p className="text-base sm:text-lg text-black dark:text-gray-400">
            A partir de estructuras de Alma Llena, mediante el uso de electrosoldadura automática.
          </p>
          <p className="text-base sm:text-lg mb-4 text-black dark:text-gray-400">
            Todas nuestras construcciones metálicas son calculadas y ejecutadas contra pedido.
          </p>
          {/*  */}
          <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
            <CardHome
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={sistAmpliable}
              title={"Sistema ampliable"}
            />
            <CardHome
              description={
                "Optimizando continuamente nuestros diseños, logramos un montaje limpio y ágil, reduciendo notablemente los tiempos de obra."
              }
              imageSRC={rapidezdemontaje}
              title={"Rapidez de montaje"}
            />
            <CardHome
              description={
                "Consideramos los puntos de anclaje como nudos estructurales críticos, es por ello que se fabrican siempre con pernos de anclaje de alta resistencia, roscados, permitiendo un rápido y preciso montaje, y en caso de requerirlo un tiempo de desmontaje mínimo."
              }
              imageSRC={sitdeanclaje}
              title={"Sistemas de anclaje"}
            />
            <CardHome
              description={
                "La calidad de los materiales empleados nos permite dar una excleente aislación térmica a nuestras naves, según las especificaciones de nuestros clientes, utilizando desde lana de vidrio con foil, pasando por membranas de diferentes tipos, hasta los paneles sándwich."
              }
              imageSRC={aislacionesTermicas}
              title={"Aislaciones térmicas"}
            />
            <CardHome
              description={
                "Las estructuras son protegidas de la corrosión por fosfatizado, y se aplican pinturas con dispositivos Air Less en cabina automática utilizando diferentes tipos de revestimientos industriales, acrílicos, poliuretanicos, epoxies, etc."
              }
              imageSRC={pinturas}
              title={"Pinturas"}
            />
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center px-1 mx-auto sm:px-0 max-w-3xl w-full">
          <Image alt="obra-2" className="w-full h-auto" src={obra2} />
        </div>

        <div className="flex flex-col items-start justify-center max-w-3xl mx-auto my-2 px-4 sm:px-0">
          <h1 className=" text-xl font-bold uppercase tracking-tight text-black md:text-4xl dark:text-white">
            cubiertas estancas
          </h1>
          <h1 className="mb-1 text-lg uppercase tracking-tight text-black md:text-xl dark:text-white">
            sin perforaciones
          </h1>

          <div className="h-2 w-24 sm:w-48 rounded-md bg-blue-50 mb-4" />

          <p className="text-base sm:text-lg text-black dark:text-gray-400">
            Disponemos de el equipamiento para fabricar chapas conformadas en frío, en un solo
            tramo, fijándolas con clips de sujeción, para un posterior grafado longitudinal,
            permitiéndonos obtener una cubierta sin perforaciones ni solapes, asegurando la
            estanqueidad, incluso con mínima pendiente.
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col items-start justify-center max-w-3xl mx-auto my-2 px-4 sm:px-0">
          <h1 className=" text-xl font-bold uppercase tracking-tight text-black md:text-4xl dark:text-white">
            nuestros valores
          </h1>

          <div className="h-2 w-24 sm:w-48 rounded-md bg-blue-50 mb-4" />

          <p className="text-base sm:text-lg mb-4 text-black dark:text-gray-400">
            <span className="font-bold">Visión</span>: “Ser una empresa reconocida, y elegida, por
            nuestro respeto, compromiso e innovación y productos y servicios, además de la calidad
            humana y profesional de nuestra gente y por nuestra contribución a la comunidad.”
          </p>
          <p className="text-base sm:text-lg mb-4 text-black dark:text-gray-400">
            <span className="font-bold">Misión</span>: “Ser referentes Tucumán y el NOA, en el
            diseño, fabricación y montaje de naves industriales, y afines, entregando soluciones a
            nuestros clientes que satisfagan sus expectativas, en tiempo y forma, brindándoles
            productos de calidad y con excelencia en el servicio”.
          </p>

          <div>
            <span className="font-bold text-base sm:text-lg">Valores</span>:
            <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
              <Valores title={"cercania"} />
              <Valores title={"innovacion"} />
              <Valores title={"compromiso con el cliente"} />
              <Valores title={"creatividad para dar soluciones"} />
              <Valores title={"respeto por el valor de la palabra"} />
              <Valores title={"garantia"} />
              <Valores title={"flexibilidad / adaptabilidada"} />
              <Valores title={"respaldo"} />
              <Valores title={"capacidad de aprendizaje"} />
              <Valores title={"precision"} />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto my-4 px-4 sm:px-0">
          <div className="flex flex-col justify-center bg-blue-100 rounded-3xl py-8 px-8">
            <h1 className="text-xl font-bold uppercase tracking-tight text-white md:text-4xl dark:text-white">
              Equipamiento y tecnologia
            </h1>
            <div className="h-2 w-24 sm:w-36 rounded-md bg-white mb-4" />
            <p className="mb-2 text-white text-xs sm:text-base">
              Contamos con el más completo equipamiento para realización de obras: equipos de corte
              a CNC, plegadoras de hasta 300 TN, puentes grúa, soldadura semiautomática, pórtico de
              soldadura automática, conformadora de chapas, hidrogrúas, grúas de hasta 45 TN,
              plataformas de elevación de personas, grafadoras, torqueadoras, etc.
            </p>
            <p className="mb-2 text-white text-xs sm:text-base">
              También Software de diseño asistido, de diseño y cálculo estructural, y de gestión
              interno.
            </p>
            <p className="mb-4 text-white text-xs sm:text-base">
              Sistemas de nivelación, medición y aplomado láser.
            </p>

            <div className="flex flex-wrap">
              <div className="w-1/6 sm:pl-4 py-4">
                <Image
                  alt={"personasequipamiento.png"}
                  className="h-12 w-12"
                  src={personasequipamiento}
                />
              </div>
              {/*  */}
              <div className="pl-2 sm:pl-0 w-5/6 flex flex-col">
                <p className="mb-2 text-white text-xs sm:text-base font-semibold">
                  Y, lo más importante, un excelente equipo de personas comprometidas con los
                  desafíos que se presentan, viendo en cada dificultad una oportunidad y, tratando
                  de mejorar nuestros estándares, persiguiendo una única meta:
                </p>
              </div>
              <p className="ml-10 px-1 sm:mx-24 text-sm rounded-md sm:px-4 capitalize bg-blue-50 font-bold text-white w-fit">
                clientes conformes
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
