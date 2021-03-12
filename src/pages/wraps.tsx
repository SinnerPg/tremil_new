import Header from "../../components/HeaderImage";

export default function wraps() {
    return (
        <div className="flex h-full w-full flex-col 2xl:pt-20">
            <Header image="wraps_header.png" title="PELLICOLE SOLARI-ANTI UV" />
            <div className="flex xl:flex-row xl:justify-between w-full xl:px-24">
              <div className="xl:text-2xl flex flex-col my-14 xl:w-7/12">
                <p className="text-black font-bold my-10">PELLICOLE PER SUPERFICI IN VETRO</p>
                <p className="text-gray-700 whitespace-pre-line ">L’innovazione continua è il nostro segreto. Possiamo cambiare le caratteristiche fisiche e visive 
                di qualsiasi vetro. Grazie all’applicazione di speciali pellicole, sia in ambito industriale che domestico si migliorano le caratteristiche dei vetri 
                in termini di risparmio energetico, controllo solare, privacy e sicurezza.{`\n`}{`\n`}
                
                Nella provincia di Salerno e in tutto il resto del territorio italiano abbiamo curato già diverse installazioni di pellicole di sicurezza e antisolari 
                per per finestre, vetrine e lucernai. Le pellicole riflettenti si sono dimostrate ideali per qualsiasi ambiente: edilizia civile, edilizia industriale, 
                uffici e negozi.{`\n`}{`\n`}

                i sono immediati e trasversali, dal risparmio energetico alla tutela dei prodotti che possono rovinarsi al sole e alle temperature alte.{`\n`}{`\n`}
                </p>
                <p className="text-black font-bold my-10">PELLICOLE ANTISOLARI RIFLETTENTI</p>
                <p className="text-gray-700 whitespace-pre-line ">Le pellicole antisolari consentono di mantenere un ambiente a temperatura mite, fresco e quindi 
                accogliente. Permettono un notevole risparmio energetico e quindi sulla fornitura di energia elettrica.{`\n`}{`\n`}

                Ideali sia per abitazioni private che per ampie strutture architettoniche. Il costo delle pellicole si ammortizza in brevissimo tempo. La loro 
                garanzia è di 10 anni.{`\n`}{`\n`}
                </p>
                <p className="text-black font-bold my-10">COSA SI GUADAGNA:</p>
                <p className="text-gray-700 whitespace-pre-line ">Riduzione della temperatura interna{`\n`}
                Riduzione dell’abbaglio solare{`\n`}
                Ambienti confortevoli{`\n`}
                Abbattimento dei raggi UV{`\n`}
                Nessuna manutenzione{`\n`}
                Nessuna modifica agli infissi{`\n`}
                Costi contenuti{`\n`}
                Inoltre sono possibili le seguenti pellicole:{`\n`}{`\n`}
                Pellicole di sicurezza: sono pellicole che consentono di trasformare un vetro normale in un vetro di sicurezza.{`\n`}
                Pellicole per auto: tutela della privacy, maggiore sicurezza e prevenzione per il deterioramento interno.{`\n`}
                Pellicole anti UV: hanno la capacità di respingere il 99% dei raggi dannosi.{`\n`}
                Pellicole per vetrine: evitano il deterioramento dei prodotti e delle merci. Evitano il surriscaldamento degli ambienti e quindi riducono l’utilizzo dei climatizzatori.
                </p>
              </div>
              <div className="hidden xl:flex flex-col xl:w-4/12 xl:mt-20">
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
