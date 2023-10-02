import { useState } from "preact/hooks";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";

export interface Image {
  image: ImageType;
  altText: string;
}

export interface Props {
  title?: string;
  description?: string;
  images?: Image[];
  layout?: {
    headerAlignment?: "center" | "left";
  };
}

const IMAGES = [
  {
    altText: "deco",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fe7cd8ba-c954-45d6-9282-ee7d8ca8e3c7",
  },
  {
    altText: "deco",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
  },
];

function Partners(props: Props) {
  const { title, description, images, layout } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const circularIndex = (index: number) => {
    const numImages = images ? images.length : IMAGES.length;
    if (index < 0) {
      return numImages - 1;
    }
    if (index >= numImages) {
      return 0;
    }
    return index;
  };

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      circularIndex(prevIndex - 1)
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      circularIndex(prevIndex + 1)
    );
  };

  const list = images && images.length > 0 ? images : IMAGES;

  // Obtém os índices das imagens para exibição
  const imageIndices = [
    circularIndex(currentImageIndex - 2),
    circularIndex(currentImageIndex - 1),
    currentImageIndex,
    circularIndex(currentImageIndex + 1),
    circularIndex(currentImageIndex + 2),
  ];

  return (
    <div className="w-full bg-[#edecec] px-4 py-8 flex flex-row justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="h-[50px] w-[50px] cursor-pointer"
        onClick={handlePreviousClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      <div className="w-[80%] flex items-center overflow-hidden">
        {imageIndices.map((index) => (
          <div
            key={index}
            className={`inline-block align-middle transform transition-transform`}
          >
            <div className="flex items-center justify-center">
              <Image
                width={200}
                height={200}
                src={list[index].image}
                alt={list[index].altText || ""}
                className="w-auto h-auto"
              />
            </div>
          </div>
        ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="h-[50px] w-[50px] cursor-pointer"
        onClick={handleNextClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}

export default Partners;
