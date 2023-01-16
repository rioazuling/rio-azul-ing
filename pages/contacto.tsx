import {Suspense} from "react";

import Container from "../components/Container";
import ContactoForm from "../components/ContactoForm";

export default function Contacto() {
  return (
    <>
      <Container>
        <div className="flex flex-col content-center">
          <div className="flex flex-col mt-5 items-center">
            <h1 className="uppercase text-2xl font-bold">estamos aqui</h1>
            <div className="h-2 w-16 sm:w-20 rounded-md bg-blue-50 mb-42" />
          </div>
          {/*  */}
          <div className="m-5 flex justify-center">
            <Suspense fallback={<h1>Cargando...</h1>}>
              <iframe
                className="h-64 w-full sm:w-3/4"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.244422925651!2d-65.24732668513197!3d-26.832177096312275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c8c638e026f%3A0x9fb9dfb4c58e3442!2sLavalle%202974%2C%20T4000AZH%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1671908043565!5m2!1ses!2sar"
              />
            </Suspense>
          </div>
          {/*  */}

          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col mt-5 max-w-lg">
              <h1 className=" text-xl font-semibold">Dejanos un mensaje</h1>
              <div className="h-2 w-16 sm:w-20 rounded-md bg-blue-50 mb-42" />
            </div>
            <ContactoForm />
          </div>
        </div>
      </Container>
    </>
  );
}
