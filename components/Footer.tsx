import Link from 'next/link'

export default function Footer() {
    return (
        <div className="hidden 2xl:flex flex-col 2xl:pt-20 2xl:pb-10 justify-center items-center w-full h-full" style={{backgroundColor: `#262626`}}>
            <div className="flex flex-row w-full justify-between 2xl:pb-8 2xl:px-32">
                <div className="flex flex-col 2xl:w-2/12">
                    <img src="/logo_white.svg" alt="logo_white" />
                    <p className="text-white 2xl:mt-10">Dal 1979 soddisfiamo le esigenze di chi vuole esaltare il proprio business con differenti sistemi di 
                    comunicazione visiva. Siamo a Cava de’ Tirreni, in provincia di Salerno e siamo specializzati nella progettazione e realizzazione di insegne 
                    e segnaletica aziendale.</p>
                </div>
                <div className="flex flex-col 2xl:w-3/12">
                    <p className="font-semibold text-blue-400 2xl:text-3xl">COME TROVARCI</p>
                    <p className="text-white font-bold 2xl:text-xl 2xl:mt-10">TRE.MIL. S.r.l.</p>
                    <p className="text-white 2xl:text-xl">VIA CESARO, 1</p>
                    <p className="text-white 2xl:text-xl">84013 CAVA DE' TIRRENI (SA)</p>
                    <p className="text-white 2xl:text-xl">P.I. 03572970659</p>
                    <p className="text-white 2xl:text-xl">SDI: SUBM70N</p>
                    <p className="text-white 2xl:text-xl">Tel. +39 089466546</p>
                    <p className="text-white 2xl:text-xl">089 345003</p>
                    <p className="text-white 2xl:text-xl">Fax 0892144421</p>
                </div>
                <div className="flex flex-col 2xl:w-2/12">
                    <p className="font-semibold text-blue-400 2xl:text-3xl">L'AZIENDA</p>
                    <p className="text-white font-bold 2xl:text-xl 2xl:mt-10">ORARI</p>
                    <p className="text-white 2xl:text-xl">Lunedì-Venerdì</p>
                    <p className="text-white 2xl:text-xl">8:30-13:00</p>
                    <p className="text-white 2xl:text-xl">14:00-17:30</p>
                </div>
                <div className="flex flex-col 2xl:w-2/12">
                    <p className="font-semibold text-blue-400 2xl:text-3xl">SEGUICI</p>
                    <div className="flex flex-row 2xl:mt-5">
                        <img className="mr-5" src="/facebook_footer.svg" alt="facebook" />
                        <img className="mr-5" src="/instagram_footer.svg" alt="instagram" />
                        <img className="mr-5" src="/linkedin_footer.svg" alt="linkedin" />
                        <img className="mr-5" src="/twitter_footer.svg" alt="twitter" />
                    </div>
                    <p className="font-semibold text-blue-400 2xl:text-3xl 2xl:mt-10">Iscrizione alla newsletter</p>
                    <input type="text" placeholder="Inserisci la tua mail" className="outline-none 2xl:h-14 2xl:mt-6 2xl:pl-8" />
                    <div className="flex flex-row 2xl:mt-24">
                        <img className="mr-3" src="/maestro_footer.svg" alt="maestro" />
                        <img className="mr-3" src="/mastercard_footer.svg" alt="mastercard" />
                        <img className="mr-3" src="/paypal_footer.svg" alt="maestro" />
                        <img className="mr-3" src="/visa_footer.svg" alt="visa" />
                    </div>
                </div>
            </div>
            <div className="h-px 2xl:w-10/12 border-gray-400" style={{borderWidth: 1}} />
            <div className="flex flex-row 2xl:w-10/12 2xl:mt-8 justify-between items-center">
                <p className="text-white text-xl">Privacy Policy</p>
                <p className="text-white text-xl">Cookie Policy</p>
                <p className="text-white text-xl">Condizioni d'uso</p>
                <p className="text-white text-xl">Termini e condizioni di vendita</p>
            </div>
        </div>
    )
}
