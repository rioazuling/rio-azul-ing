import {env} from "process";

import {useRef, useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import emailjs from "@emailjs/browser";

type Inputs = {
  nombre: string;
  empresa: string;
  correoElectronico: string;
  mensaje: string;
};

const ContactoForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>();

  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // service_73npupo

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          form.current,
          process.env.NEXT_PUBLIC_KEY_PUBLIC as string,
        )
        .then((result) => {
          console.log(result.text);
        });
    } else {
      console.error("No se encontró el elemento form");
    }
  };

  return (
    <form ref={form} className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:flex-row gap-4 w-64 sm:w-auto">
        <div className="flex flex-col">
          <input
            placeholder="Nombre"
            {...register("nombre", {
              required: true,
              maxLength: 20,
            })}
            className="rounded-md px-2 text-sm bg-blue-300 placeholder:italic placeholder:text-black text-black h-8"
          />
          {errors.nombre?.type === "required" && (
            <small className="text-xs mt-1 text-red-600">Campo requerido</small>
          )}
          {errors.nombre?.type === "maxLength" && (
            <small className="text-xs mt-1 text-red-600">
              Campo nombre debe ser menor a 20 caracteres
            </small>
          )}
        </div>
        <div className="flex flex-col">
          <input
            placeholder="Empresa"
            {...register("empresa", {
              required: true,
              maxLength: 20,
            })}
            className="rounded-md px-2 text-sm bg-blue-300 placeholder:italic placeholder:text-black text-black h-8"
          />
          {errors.empresa?.type === "required" && (
            <small className="text-xs mt-1 text-red-600">Campo requerido</small>
          )}
          {errors.empresa?.type === "maxLength" && (
            <small className="text-xs mt-1 text-red-600">
              Campo empresa debe ser menor a 20 caracteres
            </small>
          )}
        </div>
        <div className="flex flex-col">
          <input
            placeholder="Correo electronico"
            {...register("correoElectronico", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
            })}
            className="rounded-md px-2 text-sm bg-blue-300 placeholder:italic placeholder:text-black text-black h-8"
          />
          {errors.correoElectronico?.type === "required" && (
            <small className="text-xs mt-1 text-red-600">Campo requerido</small>
          )}
          {errors.correoElectronico?.type === "pattern" && (
            <small className="text-xs mt-1 text-red-600">Formato e-mail invalido</small>
          )}
        </div>
      </div>

      <div className="">
        <div className="flex flex-col">
          <textarea
            className="resize-none w-full h-40 placeholder:italic bg-blue-300 placeholder:text-black text-black text-sm p-2 rounded-md"
            placeholder="Mensage"
            {...register("mensaje", {required: true})}
          />
          {errors.mensaje && <small className="text-xs mt-1 text-red-600">Campo requerido</small>}
        </div>
      </div>

      <div>
        <button
          className="text-white text-sm cursor-pointer bg-blue-50 font-semibold rounded-md p-2"
          type="submit"
        >
          Enviar mensaje
        </button>
      </div>
    </form>
  );
};

export default ContactoForm;
