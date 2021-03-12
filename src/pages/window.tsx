import Header from "../../components/HeaderImage";

export default function window() {
    return (
        <div className="flex h-full w-full flex-col 2xl:pt-20">
            <Header image="window_header.png" title="VETROFANIE" />
            <div className="flex xl:flex-row w-full justify-between xl:px-40">
              <div className="xl:text-2xl flex flex-col my-14 xl:w-5/12">
                <p className="text-black font-bold my-10">VETROFANIE</p>
                <p className="text-gray-700 whitespace-pre-line ">
                Le vetrofanie sono decorazioni che consentono di sfruttare le superfici vetrate (ma anche superfici opache e lisce – laminate, laccate o smaltate) 
                come spazi pubblicitari. Si tratta di una vera e propria “etichetta” adesiva contenente informazioni pubblicitarie da applicare sulle superfici 
                espositive di un locale pubblico per comunicare qualcosa ai passanti che si trovano in strada oppure ai passeggeri di un autobus.{`\n`}{`\n`}

                Questa particolare forma di pubblicità è così utile da venir usata sin dalla prima metà del XIX secolo, quando i negozi e le abitazioni facevano 
                dipingere le lastre di vetro per lanciare un messaggio all’esterno.{`\n`}{`\n`}

                Con il passar degli anni la tecnologia ha fatto passi da gigante e noi di Tremil, che da anni lavoriamo per tantissime aziende italiane e della 
                provincia di Salerno, utilizziamo la tecnica della stampa digitale su supporti adesivi e del plotter da taglio per decorare vetri ed altre superfici 
                con fotografie e grafiche complesse.{`\n`}{`\n`}

                CONTATTACI
                </p>
              </div>
              <div className="hidden xl:flex flex-col xl:w-4/12 xl:mt-20 xl:ml-20">
                    <img className="w-10/12 mb-6" src="signals_1.png" alt="signals" />
                    <img className="w-10/12 mb-6" src="signals_2.png" alt="signals" />
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
