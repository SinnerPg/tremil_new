import Header from "../../components/HeaderImage";

export default function furnishing() {
    return (
        <div className="flex h-full w-full flex-col 2xl:pt-20">
            <Header image="furnishing_header.png" title="ELEMENTI D'ARREDO" />
            <div className="flex xl:flex-row xl:justify-between w-full xl:px-24">
              <div className="xl:text-2xl flex flex-col mt-14 xl:w-7/12">
                <p className="text-black font-bold my-10">Elementi di arredo</p>
                <p className="text-gray-700 whitespace-pre-line ">Combinando la lavorazione del metacrilato con materiali raffinati ed eleganti come l’acciaio e 
                l’alluminio, Tremil è in grado di realizzare arredamento in plexiglass e sistemi espositivi di diversa tipologia, di grandi e piccole dimensioni.{`\n`}
                Il polimetilmetacrilato, comunemente noto come plexiglass, è un tipo di plastica composta da polimeri del metacrilato di metile che fu sviluppato e 
                prodotto per la prima volta in Germania nel 1928. Il suo successo è dovuto essenzialmente alla sua duttilità, resistenza e trasparenza. Sembra 
                impossibile da credere, ma il plexiglass è addirittura più trasparente del vetro e da questo punto di vista può essere paragonato addirittura alla 
                fibra ottica.{`\n`}{`\n`}

                È facile da lavorare e, a seconda della sua “mescola”, può essere reso infrangibile e utilizzato per la realizzazione di vetri di sicurezza e altri 
                presidi antinfortunistici. Nell’ambito dell’arredamento e dell’interior design, viene utilizzato per la possibilità di effettuare la personalizzazione 
                di elementi d’arredo di ogni genere.{`\n`}{`\n`}

                Tremil, nella sua sede a Cava de’ Tirreni in provincia di Salerno, lavora da anni questo materiale con tecniche all’avanguardia e combinandolo 
                all’occorrenza con alluminio composito, legno, policarbonato, PVC e altre materie prime. Le modalità e i settori di utilizzo sono davvero tantissimi 
                e per i nostri clienti abbiamo ideato diverse soluzioni per l’arredamento di uffici e attività commerciali.{`\n`}{`\n`}

                Con la nostra dotazione tecnologica e il know how delle diverse risorse interne, usiamo il plexiglass anche per la creazione di segnaletica aziendale, 
                espositori e per costruire insegne luminose, targhe e pannelli retroilluminati. Insomma, non ci sono limiti all’uso di questo materiale e spesso 
                realizziamo soluzioni estremamente personalizzate per le diverse esigenze dei nostri clienti.
                </p>
              </div>
              <div className="hidden xl:flex flex-col justify-between xl:w-4/12 xl:mt-20">
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
