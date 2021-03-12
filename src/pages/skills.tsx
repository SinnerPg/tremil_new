import Slider from "../../components/SliderComponent";
import RoundedAvatar from "../../components/RoundedAvatar";
import { fetchAPI } from "../../lib/api";

export default function skills({ skill }: any) {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center overflow-hidden">
            <p className="2xl:text-6xl text-gray-700 2xl:mb-32 2xl:mt-48 font-bold">Competenze</p>
            <div className="w-10/12">
                <Slider slides={skill.slider}/>
            </div>
            <p className="2xl:text-6xl text-gray-700 2xl:mt-32 2xl:mb-10 font-bold">Come nasce un progetto</p>
            <div className="w-1/12 bg-blue-400 h-2" />
            <p className="text-gray-700 2xl:text-2xl w-6/12 2xl:my-20 2xl:leading-relaxed whitespace-pre-line">
            Dal sopralluogo fino alla realizzazione, i nostri progetti prendono forma senza trascurare nulla. Ogni fase del nostro lavoro è fondamentale per la 
            realizzazione di progetti originali e ricercati. {`\n`}
            Il sopralluogo di una location è essenziale per capire le esigenze da soddisfare e le questioni tecniche 
            da rispettare. Successivamente, la fase della progettazione prevede il disegno con la definizione delle misure e la scelta dei materiali da utilizzare. 
            </p>
            <div className="flex flex-row 2xl:w-8/12">
                <div className="flex flex-col 2xl:w-1/2 ml-10">
                    <p className="text-blue-800 font-bold 2xl:text-4xl">La realizzazione</p>
                    <p className="text-gray-700 2xl:text-2xl 2xl:w-9/12 2xl:mt-10 2xl:leading-relaxed whitespace-pre-line">Passo dopo passo, la realizzazione dei diversi progetti avviene con il coinvolgimento di tutte le 
                    figure professionali dell’azienda combinando tecnologia e manualità artigianale. Infine, i nostri preziosi operai provvedono al montaggio dei 
                    progetti che daranno nuova vita al brand e all'azienda!</p>
                </div>
                <div className="bg-cover w-1/2" style={{backgroundImage: `url(skills_bg.png)`}} />
            </div>
            <div className="w-10/12 2xl:my-20" style={{borderWidth: 1, borderColor: `#c7c7c7`}}/>
            <p className="2xl:text-7xl text-gray-700 font-bold">Team</p>
            <p className="text-gray-700 2xl:text-2xl text-center w-4/12 2xl:mt-8 whitespace-pre-line 2xl:leading-relaxed">
            Un team competente e affiatato per rispondere prontamente alle esigenze di chi ci sceglie. {`\n`} Sono le persone a costruire un’azienda di successo!
            </p>
            <div className="flex flex-row overflow-x-auto w-full 2xl:my-32 2xl:pl-64">
                {skill.staff.map((staff: any) => <RoundedAvatar staff={staff} />)}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const skill = await fetchAPI(`/skills`);

    return {
        props: { skill },
        revalidate: 1,
    };
}
