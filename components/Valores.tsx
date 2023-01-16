import React from "react";

interface Props {
  title: string;
}

const Valores: React.FC<Props> = ({title}) => {
  return (
    <div className="flex">
      <div className="shrink w-96">
        <p className="inline-block bg-blue-50 rounded-md px-4 text-white capitalize text-lg">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Valores;
