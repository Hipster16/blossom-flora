import React from 'react'
import Image from 'next/image'

type catalogProps = {
    url: string;
    name: string;
  }
  
function Collection(props: catalogProps) {
  return (
    <div className="relative group w-[300px] min-w-[300px] min-h-[300px] h-[300px] rounded-[30px] overflow-hidden">
    <Image
      src={props.url}
      alt=""
      width={300}
      height={300}
      className="group-hover:scale-125 group-hover:brightness-75 object-cover h-full w-full transition-all duration-500"
    />
    <div className="p-3 absolute left-0 right-0 bottom-[35%] mx-auto w-full text-center transition-all duration-500">
      <h2 className="opacity-100 text-white  font-semibold transition-all text-6xl duration-500">{props.name}</h2>
    </div>
  </div>
  )
}

export default Collection


