import Image from "next/image";
import moment from "moment";
import { getStrapiMedia } from "../lib/media";

export default function BlogArticlePreview({news}: any) {
    moment.locale(`it`);

    return (
        <div>
            <Image width={810} height={500} src={getStrapiMedia(news.cover)} />
            <p className="text-yellow-500 xl:my-10">{moment(news.publishDate).format(`LL`)}/0 Commenti/in {news.blog_category.name}/da {news.author.name}</p>
            <p className="2xl:text-3xl text-gray-700 font-bold">HospitalitySud 2019: Tremil al salone per l’hotellerie e l’extralberghiero</p>
            <p className="2xl:text-xl 2xl:mt-10 2xl:w-10/12 whitespace-pre-line text-gray-600">Il 27 e 28 febbraio 2019 Tremil sarà presente a Napoli per 
            partecipare all’edizione 2019 del salone dedicato alle aziende che si occupano di forniture e servizi per il settore alberghiero.</p>
            <div className="bg-black text-white 2xl:text-2xl text-3xl xl:mt-12 py-4 xl:w-4/12 md:w-5/12 justify-center flex">
                <p>LEGGI ANCORA</p>
            </div>
        </div>
    )
}
