import Slider from "../../components/SliderComponent";

export default function aboutUs() {
    return (
        <div className="flex justify-center items-center h-full w-full flex-col">
            <div className="flex flex-row w-full">
                <div className="2xl:w-1/2">
                    <div className="flex flex-col justify-center items-start 2xl:mx-40 2xl:my-40">
                        <p className="text-blue-700 font-bold 2xl:text-6xl">Affida il tuo brand in mani esperte</p>
                        <p className="text-blue-700 2xl:text-xl 2xl:w-9/12 2xl:my-10 whitespace-pre-line">Un portfolio clienti di spicco, a cui dedicare tutta 
                        l'esperienza accumulata in oltre quarant'anni di attività. {`\n`} Al fianco dei nostri clienti per aiutarli a differenziarsi.</p>
                    </div>
                </div>
                <div className="flex bg-cover bg-no-repeat 2xl:w-1/2" style={{backgroundImage: `url(img2_home.png)`}} />
            </div>
            <Slider />
            <div className="bg-gray-200 flex flex-row items-center justify-between
            2xl:w-10/12 2xl:my-24 2xl:py-24 2xl:px-24">
                <div className="flex flex-col items-center w-3/12">
                    <img alt="package" src="package.svg" width="143" height="148" />
                    <p className="text-gray-700 font-bold text-2xl text-center 2xl:w-9/12 2xl:mt-10">CAMBIA IL TUO STILE IN 48H</p>
                </div>
                <div className="flex flex-col items-center w-3/12">
                    <img alt="package" src="package.svg" width="143" height="148" />
                    <p className="text-gray-700 font-bold text-2xl text-center 2xl:w-9/12 2xl:mt-10">CONSEGNA & MONTAGGIO</p>
                </div>
                <div className="flex flex-col items-center w-3/12">
                    <img alt="package" src="package.svg" width="143" height="148" />
                    <p className="text-gray-800 font-bold text-2xl text-center 2xl:w-9/12 2xl:mt-10">DESIGN E PROGETTAZIONE</p>
                </div>
            </div>
            <div className="flex flex-row
            2xl:w-10/12 2xl:my-24" style={{height: 600}}>
                <div className="flex bg-cover bg-no-repeat 2xl:w-1/2 h-full" style={{backgroundImage: `url(about_us_1.png)`}} />
                <div className="flex flex-col 2xl:w-1/2 2xl:px-24">
                    <p className="text-blue-800 font-bold 2xl:text-6xl">Una famiglia, oltre un'impresa</p>
                    <p className="text-black 2xl:text-xl 2xl:w-9/12 2xl:my-10 whitespace-pre-line 2xl:leading-10">Tremil nasce nel 1979 a Cava de' Tirreni, in provincia di Salerno, 
                    con una mission produttiva volta a soddisfare la crescente domanda di prodotti e servizi nel mercato della comunicazione visiva. Nel corso degli 
                    anni, l'azienda ha conosciuto una crescita costante grazie alla sua capacità di diversificare la propria offerta in un mercato in continua evoluzione.</p>
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
