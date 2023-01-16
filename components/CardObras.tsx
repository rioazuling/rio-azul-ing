import Image, {StaticImageData} from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  imageSRC: StaticImageData;
}

const CardObras: React.FC<Props> = ({title, description, imageSRC}) => {
  return (
    <div className="flex flex-col sm:m-4 w-64">
      <div className="">
        <Image alt={title} className="h-auto w-64 rounded-md" src={imageSRC} />
      </div>
      {/*  */}
      <div className="flex flex-col">
        <h1 className="font-bold text-blue-50 text-lg pb-1 capitalize dark:text-blue-50">
          {title}
        </h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardObras;
