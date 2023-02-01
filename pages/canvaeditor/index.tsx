import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
const CanvaBoard = dynamic(
  () =>
    import("@realworld/components/canvaeditor/CanvaBoard").then(
      (comp) => comp.CanvaBoard
    ),
  {
    ssr: false,
  }
);
const Index = () => {
  const [images, setImages] = useState<string>("");
  return (
    <div className="cavaeditor flex h-full">
      <div className="w-1/4">
        <Image
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
          alt="img"
          draggable="true"
          onDragStart={(e) => {
            setImages(
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            );
          }}
          height={100}
          width={100}
        />
      </div>
      <div className="editor w-3/4 border h-full">
        <CanvaBoard pickedImage={images} />
      </div>
    </div>
  );
};

export default Index;
