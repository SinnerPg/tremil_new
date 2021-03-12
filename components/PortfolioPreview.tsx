import moment from "moment";
import Link from "next/link";
import { getStrapiMedia } from "../lib/media";

export default function PortfolioPreview({portfolio}: any) {
    moment.locale(`it`);
    
    return (
        <>
        <Link href="/portfolio/" as={`/portfolio/${portfolio.slug}`}>
            <div className="hidden 2xl:flex flex-col 2xl:w-1/3 2xl:mb-10 2xl:mr-12 max-w-desktop bg-cover cursor-pointer" 
            style={{backgroundImage: `url(${getStrapiMedia(portfolio.cover)})`,
            width: 466, height: 370}}>
                <div className="flex flex-col w-full h-full justify-center items-center bg-black bg-opacity-60">
                    <p className="text-white font-bold 2xl:text-2xl">{portfolio.title}</p>
                    <p className="text-white 2xl:text-xl 2xl:mt-6 mt-3 w-11/12 text-center">{portfolio.description.substring(0, 70)}...</p>
                    <p className="text-white 2xl:text-xl 2xl:mt-6 mt-3">{moment(portfolio.publishDate).format(`LL`)}</p>
                </div>
            </div>
        </Link>
        </>
    )
}
