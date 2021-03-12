import Header from "../../components/HeaderImage";

export default function fittings() {
    return (
        <div className="flex h-full w-full flex-col 2xl:pt-20">
            <Header image="fittings_header.png" title="ALLESTIMENTI FIERISTICI" />
            <div className="flex xl:flex-row w-full justify-between xl:px-40">
              <div className="xl:text-2xl flex flex-col my-14 xl:w-5/12">
                <p className="text-black font-bold my-10">ALLESTIMENTI FIERISTICI</p>
                <p className="text-gray-700 whitespace-pre-line ">
                Con la nostra esperienza e le giuste soluzioni ingegneristiche dedicate progettiamo, sviluppiamo e costruiamo vetrine e allestimenti museali.{`\n`}{`\n`}

                Nel corso degli anni, abbiamo collaborato con architetti e professionisti di ogni tipo per risolvere ogni problema museografico e valorizzare 
                gli oggetti d’arte.{`\n`}{`\n`}

                Allestimenti con pellicola vinilica adesiva{`\n`}{`\n`}

                Per decorare ambienti di ogni tipologia utilizziamo spesso la pellicola vinilica adesiva con diverse tipologie di calandratura per rivestire, 
                all’occorrenza, anche la pavimentazione.
                </p>
              </div>
              <div className="hidden xl:flex flex-col xl:w-4/12 xl:mt-20 xl:ml-20">
                <img className="w-10/12 mb-6" src="fittings_1.png" alt="fittings" />
                <img className="w-10/12 mb-6" src="fittings_2.png" alt="fittings" />
                <img className="w-10/12 mb-6" src="fittings_3.png" alt="fittings" />
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
    );
}
