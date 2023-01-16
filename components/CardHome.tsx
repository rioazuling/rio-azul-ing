import Image, {StaticImageData} from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  imageSRC: StaticImageData;
}

const CardHome: React.FC<Props> = ({title, description, imageSRC}) => {
  return (
    <div className="flex">
      <div className="w-1/6 py-4">
        <Image alt={title} className="h-12 w-12" src={imageSRC} />
      </div>
      {/*  */}
      <div className="pl-2 sm:pl-0 w-5/6 flex flex-col">
        <h1 className="font-bold text-blue-50 text-lg pb-1 capitalize dark:text-blue-50">
          {title}
        </h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardHome;
