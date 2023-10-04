export interface BannerProps {
  title: string;
  description: string;
  imgUrl: string;
}

export interface CardBannerProps {
  banners: BannerProps[];
}

function CardBanner2({ banners }: CardBannerProps) {
  return (
    <div className="flex flex-row">
      {banners.map((banner, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex flex-col items-center justify-center px-[15px]">
            <a href={banner.imgUrl}>
              <img src={banner.imgUrl} alt={`source: ${banner.imgUrl}`} />
            </a>
          </div>
          <div className="flex h-[165px] flex-col items-center justify-center p-[30px]">
            <h1 className="text-3xl font-bold text-[#534444]">
              {banner.title}
            </h1>
            <p className="text-[#534444]">{banner.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardBanner2;
