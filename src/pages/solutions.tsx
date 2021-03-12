import Slider from "../../components/SliderComponent";
import PortfolioPreview from "../../components/PortfolioPreview";
import { fetchAPI } from "../../lib/api";

export default function solutions({ solution }: any) {
    const test = {
        image: `portfolio_1.png`,
        description: `Radicata nella realtà che la circonda, ogni struttura...`,
        title: `Accor Hotels Novòtel`,
     }

    return (
        <div className="flex flex-col w-full h-full justify-center items-center overflow-hidden">
            <p className="2xl:text-6xl text-gray-700 2xl:mt-48 font-bold">Soluzioni</p>
            <p className="text-gray-700 text-lg text-center 2xl:my-14">
                Soluzioni innovative per raccontare in modo originale il proprio brand
            </p>
            <Slider slides={solution.slider} />
            <p className="2xl:text-6xl text-gray-700 2xl:mt-32 2xl:mb-10 text-center font-bold 2xl:w-8/12">
                Tremil offre progetti e servizi versatili con un approccio problem solving rispetto alle esigenze dei clienti
            </p>
            <div className="w-1/12 bg-blue-400 h-2" />
            <p className="text-gray-700 2xl:text-2xl w-6/12 2xl:my-20 text-center">
                Una struttura organizzativa dinamica e qualificata supporta il cliente in tutto il percorso progettuale e realizzativo: dalla fase di scelta delle 
                soluzioni grafiche a quella di ricerca dei materiali, dalla fase di richiesta delle autorizzazioni fino a quelle di montaggio e collaudo delle 
                realizzazioni.
            </p>
            <div className="flex flex-row 2xl:w-10/12">
                <div className="flex flex-col 2xl:w-1/2 ml-10">
                    <p className="text-gray-700 font-bold 2xl:text-6xl">Vision</p>
                    <p className="text-gray-700 2xl:text-2xl 2xl:w-10/12 2xl:mt-10 whitespace-pre-line">La pianificazione delle attività, grazie al sistema di certificazione 
                    ISO 9001:2000, e un’attenta gestione delle risorse umane, permettono di ottenere un’alta competitività e tempi di consegna rapidi, 
                    in linea con le esigenze del cliente.{`\n`} {`\n`}
                    Una pianificazione minuziosa delle attività, unita alla competenza maturata in anni di
                    esperienza, permette di offrire servizi di qualità in grado di accompagnare e consigliare
                    il cliente in ogni fase operativa. {`\n`}
                    Un parco automezzi efficiente consente di effettuare installazioni su tutto il territorio nazionale e in qualsiasi condizioni di operatività.
                    </p>
                </div>
                <div className="bg-cover w-1/2" style={{backgroundImage: `url(img1_home.png)`}} />
            </div>
            <div className="w-10/12 2xl:my-20" style={{borderWidth: 1, borderColor: `#c7c7c7`}}/>
            <p className="2xl:text-5xl text-gray-700 font-bold text-center whitespace-pre-line">Scopri le soluzioni {`\n`}proposte ai nostri clienti</p>
            <div className="flex justify-center flex-wrap flex-row 2xl:w-full 2xl:mt-20">
                <PortfolioPreview portfolio={test} />
                <PortfolioPreview portfolio={test} />
                <PortfolioPreview portfolio={test} />
                <PortfolioPreview portfolio={test} />
                <PortfolioPreview portfolio={test} />
                <PortfolioPreview portfolio={test} />
            </div>
            <div className="xl:w-2/12 border-4 xl:mb-10 cursor-pointer border-blue-800 flex justify-center items-center xl:py-5">
                <p className="text-blue-800 font-semibold xl:text-2xl">Scopri di più</p>
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

export async function getStaticProps() {
    const solution = await fetchAPI(`/solutions`);

    return {
        props: { solution },
        revalidate: 1,
    };
}
