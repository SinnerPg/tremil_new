import Header from "../../components/HeaderImage";

export default function insegne() {
    return (
        <div className="flex h-full w-full flex-col 2xl:pt-20">
            <Header image="insegne_header.png" title="INSEGNE" />
            <div className="flex xl:flex-row xl:justify-between w-full xl:px-24">
              <div className="xl:text-2xl flex flex-col mt-14 xl:w-7/12">
                <p className="text-black font-bold my-10">Insegne</p>
                <p className="text-gray-700 whitespace-pre-line ">Le insegne tridimensionali possono essere realizzate con diverse tecniche di illuminazione e con diversi materiali. 
                Le lettere sono di solito gli elementi fondamentali di un’insegna pubblicitaria e possono essere scatolate oppure in massello.{`\n`}{`\n`}

                Lettere Scatolate in plexiglass e altri materiali: in un’insegna realizzata con lettere scatolate il lettering e gli elementi che compongono il vostro 
                logo sono costituiti da elementi (lettere) singoli e indipendenti. Questi possono essere illuminati dall’interno, con luce indiretta (in questi due casi, 
                ogni elemento scatolato è dotato del proprio impianto di illuminazione interno) o non illuminati. I materiali con i quali è possibile realizzare un’insegna 
                a lettere scatolate sono molteplici e variano a seconda dell’effetto che si desidera ottenere, della collocazione e delle dimensioni.{`\n`}{`\n`}

                Lettere in Massello: le lettere piane sono la soluzione ideale per realizzare insegne di grandi dimensioni. Per realizzare la versione luminosa, le 
                lettere intagliate vengono illuminate con faretti posizionati in testa o alla base del pannello o della superficie sui quali sono ancorate le lettere. 
                L’assenza di un impianto di illuminazione all’interno dell’insegna consente la massima libertà nelle forme, nell’impiego dei materiali che costituiscono 
                le lettere, nella scelta dei colori e nella disposizione di logotipi e lettering.{`\n`}{`\n`}

                Tra le diverse tipologie di insegne luminose quelle più evolute e moderne sono sicuramente quelle che utilizzano i sistemi a LED perché garantiscono 
                una maggiore efficienza energetica e una maggiore luminosità.{`\n`}{`\n`}

                Tremil, grazie alle speciali tecnologie di cui dispone, è in grado di fornire lettere scatolate con sistema di illuminazione a led anche in dimensioni 
                ridotte, sfruttando potenzialità come prezzo contenuto, elevata efficienza e ottima affidabilità.{`\n`}{`\n`}

                Tra le nostre numerose realizzazioni ci sono insegne di ogni forma e dimensione si va dai grandi impianti realizzati per i grandi centri commerciali 
                ad altri progetti come croci e pannelli informativi per farmacie, orologi per interni ed esterni, giornali luminosi monolinea e multilinea.{`\n`}{`\n`}
                </p>
              </div>
              <div className="hidden xl:flex flex-col justify-between xl:w-4/12 xl:mt-20">
                    <img className="w-10/12 mb-6" src="insegne_1.png" alt="insegne" />
                    <img className="w-10/12 mb-6" src="insegne_2.png" alt="insegne" />
                    <img className="w-10/12 mb-6" src="insegne_3.png" alt="insegne" />
                    <img className="w-10/12 mb-6" src="insegne_4.png" alt="insegne" />
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
