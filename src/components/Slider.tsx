import Image from "next/image";
import React from "react";

function Slider() {
  return (
    // CONTAINER
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col font-bold items-center justify-center gap-8 text-red-500">
        <h1 className="text-5xl text-center uppercase p-4">Test</h1>
        <button
          className="bg-red-500 py-4 text-white px-8 border rounded-full"
          type="submit"
        >
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative">
        <Image className="object-cover" src="/slide1.png" alt="banner" fill />
      </div>
    </div>
  );
}

export default Slider;
