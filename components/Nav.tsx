/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full flex justify-center items-center z-30 fixed bg-white 2xl:py-10">
            <div className="md:w-11/12 w-10/12 ">
                <nav className="flex justify-between items-center w-full h-full">
                
                    <ul className="hidden 2xl:flex flex-row items-center w-full h-full justify-between">
                        <Link href="/"><img className="cursor-pointer 2xl:w-auto md:w-1/12 w-1/6" src="/logo.svg" alt="logo" /></Link>
                        <li className="hidden 2xl:block 2xl:pr-5 relative" onClick={() => {if(activeIndex !== 1) setActiveIndex(1); else setActiveIndex(0)}}>
                            <a className="text-blue-800 font-bold 2xl:text-xl cursor-pointer hidden 2xl:block">CHI SIAMO</a>
                            <div className="flex flex-col w-64 px-6 py-6 bg-white absolute" style={{animation: activeIndex === 1 ? `easeInNavSection 0.3s` : `easeOutNavSection 0.3s`, top: activeIndex === 1 ? 64 : -288}}>
                                <Link href="/about-us"><p className="text-gray-600 mb-3 cursor-pointer">COMPANY</p></Link>
                                <Link href="/skills"><p className="text-gray-600 mb-3 cursor-pointer">COMPETENZE</p></Link>
                                <Link href="/blog"><p className="text-gray-600 cursor-pointer">BLOG</p></Link>
                            </div>
                        </li>
                        <Link href="/shop"><li className="hidden 2xl:block 2xl:pr-5"><a className="text-blue-800 font-bold 2xl:text-xl cursor-pointer hidden 2xl:block">SHOP</a></li></Link>
                        <li className="2xl:pr-5 hidden 2xl:block relative" onClick={() => {if(activeIndex !== 2) setActiveIndex(2); else setActiveIndex(0)}}>
                            <a className="text-blue-800 font-bold 2xl:text-xl cursor-pointer hidden 2xl:block">SU MISURA</a>
                            <div className="flex flex-col w-64 px-6 py-6 bg-white absolute" style={{animation: activeIndex === 2 ? `easeInNavSection 0.3s` : `easeOutNavSection 0.3s`, top: activeIndex === 2 ? 64 : -288}}>
                                <Link href="/portfolios"><p className="text-gray-600 mb-3 cursor-pointer">PORTFOLIO</p></Link>
                                <Link href="/solutions"><p className="text-gray-600 mb-3 cursor-pointer">SOLUZIONI</p></Link>
                            </div>
                        </li>
                        <li className="hidden 2xl:block 2xl:pr-5 relative" onClick={() => {if(activeIndex !== 3) setActiveIndex(3); else setActiveIndex(0)}}>
                            <a className="text-blue-800 font-bold 2xl:text-xl cursor-pointer hidden 2xl:block">SERVIZI</a>
                            <div className="flex flex-col w-64 px-6 py-6 bg-white absolute" style={{animation: activeIndex === 3 ? `easeInNavSection 0.5s` : `easeOutNavSection 0.5s`, top: activeIndex === 3 ? 64 : -800}}>
                                <Link href="/insegne"><p className="text-gray-600 mb-3 cursor-pointer">INSEGNE</p></Link>
                                <Link href="/signals"><p className="text-gray-600 mb-3 cursor-pointer">SEGNALETICA E CARTONELLISTICA</p></Link>
                                <Link href="/digitalPrint"><p className="text-gray-600 mb-3 cursor-pointer">STAMPA DIGITALE</p></Link>
                                <Link href="/customWall"><p className="text-gray-600 mb-3 cursor-pointer">PARATI PERSONALIZZATI</p></Link>
                                <Link href="/furnishing"><p className="text-gray-600 mb-3 cursor-pointer">ELEMENTI D'ARREDO</p></Link>
                                <Link href="/intern"><p className="text-gray-600 mb-3 cursor-pointer">DESIGN INTERNI</p></Link>
                                <p className="text-gray-600 mb-3 cursor-pointer">ZERBINI PERSONALIZZATI</p>
                                <Link href="/window"><p className="text-gray-600 mb-3 cursor-pointer">VETROFANIE</p></Link>
                                <Link href="/fittings"><p className="text-gray-600 mb-3 cursor-pointer">ALLESTIMENTI FIERISTICI</p></Link>
                                <Link href="/merchandising"><p className="text-gray-600 mb-3 cursor-pointer">VISUAL MERCHANDISING</p></Link>
                                <p className="text-gray-600 mb-3 cursor-pointer">SISTEMI ESPOSITIVI</p>
                                <Link href="/carWrapping"><p className="text-gray-600 mb-3 cursor-pointer">CAR WRAPPING E RESTYLING DI ROTABILI</p></Link>
                                <Link href="/wraps"><p className="text-gray-600 mb-3 cursor-pointer">PELLICOLE SOLARI-ANTI UV</p></Link>
                            </div>
                        </li>
                        <Link href="/faq"><li className="hidden 3xl:block 2xl:pr-5"><a className="text-blue-800 font-bold 2xl:text-xl cursor-pointer hidden 2xl:block">FAQ</a></li></Link>
                        <Link href="/contacts"><li className="2xl:pr-5 hidden 2xl:block"><a className="text-blue-800 font-bold 2xl:text-xl cursor-pointer hidden 2xl:block">CONTATTI</a></li></Link>
                        <input type="text" className="relative rounded-full border-2 pl-10 py-2 bg-no-repeat bg-left" placeholder="Ricerca" 
                        style={{borderColor: `#BDC0CE`, backgroundImage: `url(lens.svg)`}} />
                        <Link href="/cart"><img src="/shopping_cart.svg" alt="shopping_cart" className="cursor-pointer" /></Link>
                        <Link href="/login"><div className="bg-blue-900 text-white flex justify-center items-center cursor-pointer font-bold
                        2xl:w-32 2xl:h-12 2xl:text-xl">LOGIN</div></Link>
                    </ul>
                </nav>  
            </div>
        </div>
    )
}
