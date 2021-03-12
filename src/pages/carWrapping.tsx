import Header from "../../components/HeaderImage";

export default function carWrapping() {
    return (
        <div className="flex h-full w-full flex-col 2xl:pt-20">
            <Header image="car_header.png" title="CAR WRAPPING E RESTYLING DI ROTABILI" />
            <div className="flex xl:flex-row w-full justify-between xl:px-40">
              <div className="xl:text-2xl flex flex-col my-14 xl:w-5/12">
                <p className="text-black font-bold my-10">CAR WRAPPING</p>
                <p className="text-gray-700 whitespace-pre-line ">
                Decorazione grafica di auto e furgoni pubblici e privati con eccellente tecnica di stampa e successiva protezione attraverso la calandratura di 
                protettivi anti-UV lucidi o opachi.{`\n`}{`\n`}

                Tremil negli anni ha trasformato la logistica distributiva in un efficace veicolo di comunicazione esterna. La tecnologia permette infatti di 
                riprodurre immagini in quadricromia ad alta definizione su film adesivo removibile, senza danni alla carrozzeria. L’applicazione di speciali pellicole 
                sulle fiancate e retro di qualsiasi autoveicolo consente alle moderne imprese di usufruire strategicamente delle proprie flotte commerciali 
                aumentando notevolmente l’impatto visivo. La vestizione grafica dei veicoli può essere eseguita integralmente (applicazione della grafica su tutta 
                la superficie del mezzo) o parzialmente attraverso l’applicazione di adesivi prespaziati.{`\n`}{`\n`}

                Le grafiche possono essere applicate anche sui cristalli del veicolo: in questo caso si utilizza un pellicola microforata denominata “One Way”, 
                che consente la visibilità dall’interno all’esterno dell’abitacolo e non viceversa.{`\n`}{`\n`}

                La nostra officina meccanica, su richiesta del cliente, è in grado di progettare e realizzare supporti e telai per l’eventuale allestimento di una 
                struttura tridimensionale sul mezzo stesso (es. moke up di prodotto) per impieghi promozionali.{`\n`}{`\n`}
                </p>
                <p className="text-black font-bold my-10">RESTYLING ROTABILI</p>
                <p className="text-gray-700 whitespace-pre-line ">
                Tremil è iscritta nel prestigioso albo nazionale dei fornitori Trenitalia e collabora con la prima azienda ferroviaria italiana per il restyling 
                di treni e la fornitura di insegne e materiale segnaletico. La nostra grande esperienza ci sostiene in tutte le operazioni di restyling di treni 
                merci e passeggeri con particolare riguardo sia alla verniciatura che alle operazioni di pellicolatura.
                </p>
              </div>
              <div className="hidden xl:flex flex-col xl:w-4/12 xl:mt-20 xl:ml-20">
                <img className="w-10/12 mb-6" src="car_1.png" alt="car" />
                <img className="w-10/12 mb-6" src="car_2.png" alt="car" />
                <img className="w-10/12 mb-6" src="car_3.png" alt="car" />
                <img className="w-10/12 mb-6" src="car_4.png" alt="car" />
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
