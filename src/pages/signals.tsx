import Header from "../../components/HeaderImage";

export default function signals() {
    return (
        <div className="flex h-full w-full flex-col 2xl:pt-20">
            <Header image="signals_header.png" title="SEGNALETICA E CARTELLONISTICA" />
            <div className="flex xl:flex-row w-full justify-between xl:px-40">
              <div className="xl:text-2xl flex flex-col mt-14 xl:w-5/12">
                <p className="text-black font-bold my-10">SEGNALETICA STRADALE E ARREDO URBANO</p>
                <p className="text-gray-700 whitespace-pre-line ">Comfort, funzionalità ed estetica nei progetti urbani di Tremil, attenti alla salvaguardia 
                all’armonia e alla compatibilità con le facciate degli edifici e gli altri spazi all’aperto.{`\n`}{`\n`}

                La nostra azienda opera attraverso una politica di qualità totale nel settore della segnaletica e dell’arredo urbano. Ci occupiamo della produzione e 
                della installazione di segnaletica stradale verticale e orizzontale integrando le nostre soluzioni nell’architettura urbana in cui vengono inserite. 
                Il design e l’altissima qualità dei prodotti permettono a Tremil di confermarsi come punto di riferimento in Italia nel settore della realizzazione e 
                installazione di segnaletica stradale, arredo urbano, pensiline, panche, portabici ecc.{`\n`}{`\n`}

                CONTATTACI
                </p>
              </div>
              <div className="hidden xl:flex flex-col justify-between xl:w-4/12 xl:mt-20 xl:ml-20">
                    <img className="w-10/12 mb-6" src="signals_1.png" alt="signals" />
                    <img className="w-10/12 mb-6" src="signals_2.png" alt="signals" />
                    <img className="w-10/12 mb-6" src="signals_3.png" alt="signals" />
              </div>
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
