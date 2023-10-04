
export interface BannersProps {
    title1: string;
    description1: string;
    title2: string;
    description2: string;
    title3: string;
    description3: string;
}

function CardBanners({ title1, description1, title2, description2, title3, description3 }: BannersProps) {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <div className="flex flex-col items-center justify-center px-[15px]">
                    <a href="https://imgur.com/tDMbJ3j"><img src="https://i.imgur.com/tDMbJ3j.png" alt="source: imgur.com" /></a>
                </div>
                <div className="flex h-[165px] flex-col items-center justify-center p-[30px] gap-2">
                    <h1 className="text-2xl font-bold text-[#534444]">{title1}</h1>
                    <p className="text-[#534444] text-[10px]">{description1}</p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col items-center justify-center px-[15px]">
                    <a href="https://imgur.com/l7sTuh8"><img src="https://i.imgur.com/l7sTuh8.png" alt="source: imgur.com" /></a>
                </div>
                <div className="flex h-[165px] flex-col items-center justify-center p-[30px] gap-2">
                    <h1 className="text-2xl font-bold text-[#534444] ">{title2}</h1>
                    <p className="text-[#534444] text-[10px]">{description2}</p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col items-center justify-center px-[15px]">
                    <a href="https://imgur.com/mhk8LD8"><img src="https://i.imgur.com/mhk8LD8.png" alt="source: imgur.com" /></a>
                </div>
                <div className="flex h-[165px] flex-col items-center justify-center p-[30px] gap-2">
                    <h1 className="text-2xl font-bold text-[#534444]">{title3}</h1>
                    <p className="text-[#534444] text-[10px]">{description3}</p>
                </div>
            </div>
        </div>
    );
}

export default CardBanners;
