/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { fetchAPI } from "../../lib/api";
import PortfolioPreview from "../../components/PortfolioPreview";

export default function portfolioPage({ portfolios }: any) {
    const [page, setPage] = useState(1);

    console.log(portfolios);
    
    return (
        <div className="flex flex-col w-full h-full justify-center items-center overflow-hidden">
            <p className="2xl:text-6xl text-gray-700 2xl:mt-48 font-bold">Portfolio</p>
            <p className="2xl:text-5xl text-gray-700 2xl:mt-6 font-bold text-center xl:w-4/12 xl:mb-20">Scopri le soluzioni proposte ai nostri clienti</p>
            <div className="flex justify-center flex-wrap flex-row 2xl:w-full 2xl:mt-20">
                {portfolios.map((portfolio: any) => <PortfolioPreview portfolio={portfolio} />)}
            </div>
            <div className="flex flex-row justify-between xl:w-1/12 xl:my-20">
                <p onClick={()=>setPage(page - 1)} className="cursor-pointer text-gray-400">{`<`} Prev</p>
                <p onClick={()=>setPage(1)} className={"cursor-pointer " + (page === 1 ? 'text-yellow-500' : 'text-gray-400')}>1</p>
                <p onClick={()=>setPage(2)} className={"cursor-pointer " + (page === 2 ? 'text-yellow-500' : 'text-gray-400')}>2</p>
                <p onClick={()=>setPage(3)} className={"cursor-pointer " + (page === 3 ? 'text-yellow-500' : 'text-gray-400')}>3</p>
                <p onClick={()=>setPage(page + 1)} className="cursor-pointer text-yellow-500">Next {`>`}</p>
            </div>
            <div className="flex items-center bg-blue-800
            2xl:py-20 2xl:px-20">
                <div className="flex justify-between items-center 2xl:w-11/12 flex-row">
                <p className="text-white font-bold
                2xl:text-6xl 2xl:w-7/12 whitespace-pre-line">Contattaci per realizzare un progetto e per scoprire le nostre soluzioni su misura</p>
                <div className="border-4 border-white flex justify-center items-center 
                2xl:h-32 2xl:px-28">
                    <p className="text-white font-semibold 2xl:text-3xl">Contattaci</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const portfolios = await fetchAPI(`/portfolios`);
  
  
    return {
        props: { portfolios },
        revalidate: 1,
    };
  }
