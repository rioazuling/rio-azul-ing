import CardObras from "../components/CardObras";
import Container from "../components/Container";
import obra1 from "../public/obra1.png";
import pruebafoto from "../public/pruebafoto.png";

export default function Obras() {
  return (
    <>
      <Container>
        <div className="flex flex-col justify-center max-w-3xl content-center mx-auto">
          <div className="flex flex-col mt-5 items-center">
            <h1 className="uppercase text-xl font-bold">Nuestras Obras</h1>
            <div className="h-2 w-16 sm:w-20 rounded-md s" />
          </div>
          {/*  */}
          <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={obra1}
              title={"Sistema ampliable"}
            />
            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={obra1}
              title={"Sistema ampliable"}
            />
            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={pruebafoto}
              title={"PLOT II"}
            
            />
          </div>
        </div>
      </Container>
    </>
  );
}
