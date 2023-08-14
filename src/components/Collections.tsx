import React from "react";

type CollectionProps = {
  url: string;
  name: string;
  
};

function Collection(props: CollectionProps) {
  return (
    <div>
      <div className="flex relative group md:w-[300px] md:h-[300px] md:min-w-[300px] md:min-h-[300px] w-[150px] h-[150px] min-w-[150px] min-h-[150px]  overflow-hidden ">
        <img
          src={props.url}
          alt=""
          className="group-hover:scale-150 object-cover h-full w-full transition-all duration-500"
        />
        <div className=" absolute w-full top-[48%] text-center md:px-[20%] px-[15%] flex justify-centertransition-all duration-500">
          <div className="opacity-100  md:text-4xl text-xl text-white font-caslon transition-all duration-500">
            {props.name}
          </div>
        </div>
      </div>

      
       
      
    </div>
  );
}

export default  Collection;
