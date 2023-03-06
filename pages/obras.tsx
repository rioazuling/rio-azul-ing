import CardObras from "../components/CardObras";
import Container from "../components/Container";
import agroalas from "../public/agroalas.png";
import bancaria from "../public/bancaria.png";
import labanda from "../public/labanda.png";
import lapatria from "../public/lapatria.png";
import ploti from "../public/ploti.png";
import plotii from "../public/plotii.png";
import trapani from "../public/trapani.png";

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
              imageSRC={agroalas}
              title={"AGROALAS"}
            />
            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={labanda}
              title={"LA BANDA"}
            />
            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={plotii}
              title={"PLOT II"}
            
            />
            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={ploti}
              title={"PLOT I"}
            
            />
            
            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={lapatria}
              title={"LA PATRIA "}
            
            />
            
            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={bancaria}
              title={"ASOC. BANCARIA"}
            
            />
            
            <CardObras
              description={
                "Nuestro diseño tiene en cuenta siempre las futuras ampliaciones requeridas por el cliente, logrando así unificar las distintas etapas durante la evolución de todo el proyecto."
              }
              imageSRC={trapani}
              title={"TRAPANI"}
            
            />
          
          
            
          </div>
        </div>
      </Container>
    </>
  );
}
