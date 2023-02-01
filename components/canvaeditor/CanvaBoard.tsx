import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Text, Image as KnovaImage } from "react-konva";
import useImage from "use-image";

interface CanvaBoardProps {
  pickedImage: string;
}

const URLImage = ({ image }: any) => {
  const [img] = useImage(image.url);

  return (
    <KnovaImage
      image={img}
      x={image?.x}
      y={image?.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

export const CanvaBoard = ({ pickedImage }: CanvaBoardProps) => {
  const stageRef = useRef<any>(null);
  const [images, setImages] = useState<any[]>([]);
  const [dimension, setDimension] = useState({
    width: 1080,
    height: 1190,
  });

  useEffect(() => {
    const checkSize = () => {
      if (window.screen.width <= 1440) {
        setDimension({
          width: window.screen.width - 0.25 * window.screen.width,
          height: window.screen.height,
        });
      }
    };

    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);
  return (
    <>
      <div
        className="editor"
        onDrop={(e) => {
          e.preventDefault();

          setImages((prev) => [
            ...prev,
            {
              x: e.clientX,
              y: e.clientY,
              url: pickedImage,
            },
          ]);
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage ref={stageRef} width={dimension.width} height={dimension.height}>
          <Layer>
            {images.map((image, index) => {
              return <URLImage key={index} image={image} />;
            })}
          </Layer>
        </Stage>
      </div>
    </>
  );
};
