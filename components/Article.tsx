import moment from "moment";
import Link from "next/link";
import Image from "next/image";

export default function Article({article}: any) {
    moment.locale(`it`);
    
    return (
        <>
        <Link className="cursor-pointer" href="/article/" as={`/article/${article.slug}`}>
            <div className="hidden 2xl:flex flex-col 2xl:w-1/3 2xl:mb-10 2xl:mr-12 max-w-desktop">
                <Image width={500} height={340} src="/img1_home.png"/>
                <p className="text-black 2xl:text-2xl 2xl:my-10">{article.title}</p>
                <div className="flex flex-row justify-between 2xl:w-9/12">
                    <p className="text-black 2xl:text-lg font-bold">28 Nov 2020</p>
                    <div className="w-px 2xl:h-6 border-r border-l border-black" />
                    <p className="text-black 2xl:text-lg font-bold">{article.author.name}</p>
                    <div className="w-px 2xl:h-6 border-r border-l border-black" />
                    <p className="text-black 2xl:text-lg font-bold">{article.category.name}</p>
                </div>
                <p className="text-black 2xl:text-xl 2xl:mt-6 mt-3 w-11/12">{article.description}</p>
            </div>
        </Link>
        </>
    )
}