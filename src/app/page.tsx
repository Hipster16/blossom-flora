"use client";
import { useState, useRef } from "react";
import product from "../../public/products.json";
import Slider from "@/components/Slider";
import Catalog from "../components/Catalog";
import Thumbnails from "@/components/Thumbnails";
import Collection from "@/components/Collection";
import gsap from "gsap";

export default function Home() {

  const [filter, setFilter] = useState("");
  const wrapperRef = useRef(null);

  const handleFilterChange = (filterString: string, location: string) => {
    let same=false;
    if(filterString === filter) same=true
    setFilter(filterString);
    gsap.to(wrapperRef.current, {x: location, duration: 1, ease: "ease.InOut"})
    if(!same) {
      gsap.to(wrapperRef.current, {scaleX: "140%", duration: 0.2, ease: "ease.In"})
      gsap.to(wrapperRef.current, {scaleX: "100%", duration: 0.2, ease: "ease.Out", delay: 0.5})
    }
  };


  return (
    <main className="overflow-x-hidden ">
      <nav className="flex w-full flex-col p-10 justify-between bg-slate-100 rounded-[10px]">
        <div className="flex w-full text-6xl text-center items-center justify-center font-caslon">
          Blossom Flora
        </div>
        <div className="flex w-full text-2xl font-thin items-center text-center justify-center gap-4 mt-3 ">
          <div className="hover:font-medium hover:cursor-pointer transition-all">
            HOME
          </div>
          <div className="hover:font-medium hover:cursor-pointer transition-all">
            SHOP
          </div>
          <div className="hover:font-medium hover:cursor-pointer transition-all">
            SERVICES
          </div>
          <div className="hover:font-medium hover:cursor-pointer transition-all">
            CONTACT US
          </div>
        </div>
      </nav>
      <Slider />

      <section id="catalog" className="mt-12">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-semibold font-caslon">Best Sellers</h1>
          <div className="font-light my-5 text-sm">VIEW ALL</div>
          <div className=" flex w-full pl-[1200px] md:pl-0 my-10  justify-center gap-10  overflow-scroll p-5 md:flex-wrap">
            
          
            <Catalog
              url="/pexels-enes-çelik-7748484.jpg"
              name="Item name1"
              description="Here comes the description"
            />
            <Catalog
              url="/pexels-enes-çelik-7748484.jpg"
              name="Item name"
              description="Here comes the description"
            />
            <Catalog
              url="/pexels-enes-çelik-7748484.jpg"
              name="Item name"
              description="Here comes the description"
            />
            <Catalog
              url="/pexels-enes-çelik-7748484.jpg"
              name="Item name"
              description="Here comes the description"
            />
            
          </div>
        </div>
      </section>
      <section id="about" className="w-full flex flex-col md:flex-row mt-8">
        <div className="flex justify-center  md:w-[50%] h-full items-center">
          <Thumbnails />
        </div>
        <div className="flex flex-col items-center md:w-[50%]">
          <div className="my-[50px] text-black text-6xl font-caslon">
            About Us
          </div>
          <div className=" text-2xl font-light items-center w-full md:w-[80%] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </section>

      <section id="collections">
        <div className="mt-[80px] text-center text-black text-6xl font-caslon">
          Collections
        </div>
        <div className="relative w-[60%] mx-auto flex justify-between gap-8 mt-10 bg-gray-100 p-1 rounded-[40px]">
          <div
            className="bg-red-200 w-[16%] h-full z-0 top-0 left-0 rounded-[40px] absolute"
            ref={wrapperRef}
          ></div>
          <button
            id="button1"
            className="h-full w-[15%] z-10 p-3 rounded-[40px] relative"
            onClick={() => handleFilterChange("", "0%")}
          >
            All
          </button>
          <button
            id="button2"
            className="h-full w-[15%] z-10 p-3 rounded-[40px] relative"
            onClick={() => handleFilterChange("type 1", "175%")}
          >
            Flower
          </button>
          <button
            id="button3"
            className="h-full w-[15%] z-10 p-3 rounded-[40px] relative"
            onClick={() => handleFilterChange("type 2", "350%")}
          >
            Candles
          </button>
          <button
            id="button4"
            className="h-full w-[15%] z-10 p-3 rounded-[40px] relative"
            onClick={() => handleFilterChange("type 3", "525%")}
          >
            Gifts
          </button>
        </div>
        <div className="mt-10 max-w-[75%] flex flex-wrap mx-auto justify-between gap-6 ease-in-out duration-700 transition-all">
          {product.map((Item) => {
            console.log(filter);
            if (filter === "")
              return <Collection url={Item.url} name={Item.name} />;
            else if (Item.type === filter)
              return <Collection url={Item.url} name={Item.name} />;
          })}
        </div>
      </section>
    </main>
  );
}
