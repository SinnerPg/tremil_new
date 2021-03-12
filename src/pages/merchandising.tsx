import Header from "../../components/HeaderImage";

export default function merchandising() {
    return (
        <div className="flex h-full w-full flex-col 2xl:pt-20">
            <Header image="merchandising_header.png" title="VISUAL MERCHANDISING" />
            <div className="flex xl:flex-row w-full justify-between xl:px-40">
              <div className="xl:text-2xl flex flex-col my-14 xl:w-5/12">
                <p className="text-black font-bold my-10">VISUAL MERCHANDISING</p>
                <p className="text-gray-700 whitespace-pre-line ">
                Le consolidate collaborazioni nei settori della Grande Distribuzione e del Retail di Grandi Superfici, hanno dotato Tremil di ottime capacità di 
                comprensione delle dinamiche del punto vendita, dal piccolo negozio, al retail mono-marca, al super-store, funzionale alla realizzazione dei migliori 
                sistemi espositivi e del visual merchandising più efficace per promuovere e valorizzare il vostro brand e i vostri prodotti.{`\n`}{`\n`}

                Espositori, isole espositive, sistemi per per i display lineari, cartellonistica e segnaletiche all’interno del punto vendita sono progettati e 
                realizzati con materiali, forme ed accorgimenti che migliorano la brand communication e aumentano la visibilità dei vostri prodotti.
                </p>
              </div>
              <div className="hidden xl:flex flex-col xl:w-4/12 xl:mt-20 xl:ml-20">
                <img className="w-10/12 mb-6" src="merchandising_1.png" alt="merchandising" />
                <img className="w-10/12 mb-6" src="merchandising_2.png" alt="merchandising" />
                <img className="w-10/12 mb-6" src="merchandising_3.png" alt="merchandising" />
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
