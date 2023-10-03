
import type { JSX } from "preact";


export interface BannerProps {
  svg: JSX.Element; // Specify the type for the svg prop
  title: string;
  description: string;
}

export function Banner({ svg, title, description }: BannerProps) {
  return (
    <div className="flex flex-row">
      <div className="mx-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#534444]">
        {svg}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg font-bold text-gray-700">{title}</p>
        <p className="text-base font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export function InformativeBanners2() {
  return (
    <div className="mb-[70px] flex w-full justify-center bg-[#EDECEC] py-[50px] gap-6 mt-4">
      <Banner
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#534444"
            className="h-[30px] w-[30px]"
          >
            {/* SVG path here */}
          </svg>
        }
        title="Loja física"
        description="18 anos de mercado"
      />
      {/* Other banners */}
    </div>
  );
}

export default InformativeBanners2;
