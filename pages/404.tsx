import Link from "next/link";

// import Container from 'components/Container';
import Container from "../components/Container";

export default function NotFound() {
  return (
    <Container title="404 - Guillermo Uzner">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight py-8 mb-4 text-black dark:text-white">
          451 - Unavailable For Legal Reasons
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Parece que has encontrado algo que antes existía o que escribiste algo mal. Mi suposición
          es que escribiste algo incorrectamente. ¿Podrías revisar nuevamente la dirección URL?
        </p>
        <Link
          className="p-1 sm:p-4 w-48 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white"
          href="/"
        >
          Volver a Inicio
        </Link>
      </div>
    </Container>
  );
}
