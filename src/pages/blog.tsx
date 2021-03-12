/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { fetchAPI } from "../../lib/api";
import BlogArticlePreview from "../../components/BlogArticlePreview";
import BlogArticleSide from "../../components/BlogArticleSide";

export default function blog({ blogNews }: any) {
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState(`News`);

    console.log(blogNews);
    return (
        <div className="flex flex-col w-full h-full justify-center items-center overflow-hidden">
            <p className="2xl:text-6xl text-gray-700 2xl:mt-48 font-bold">Blog</p>
            <div className="flex flex-row justify-between xl:w-2/12 xl:mt-10">
                <p onClick={()=>setCategory(`News`)} className={"cursor-pointer " + (category === "News" ? 'text-black underline font-bold' : 'text-gray-400')}>News</p>
                <p onClick={()=>setCategory(`Cat 1`)} className={"cursor-pointer " + (category === "Cat 1" ? 'text-black underline font-bold' : 'text-gray-400')}>Cat 1</p>
                <p onClick={()=>setCategory(`Cat 2`)} className={"cursor-pointer " + (category === "Cat 2" ? 'text-black underline font-bold' : 'text-gray-400')}>Cat 2</p>
            </div>
            <div className="xl:px-36 px-10 pt-24 flex flex-row">
                <div className="flex flex-col xl:w-8/12">
                    {blogNews.map((news: any, index: number) => <BlogArticlePreview news={news} key={index} />)}
                </div>
                <div className="hidden xl:flex flex-col xl:ml-12 h-full xl:w-3/12">
                    <div className="w-full border-2 border-gray-300 xl:px-10">
                        <div className="flex justify-center items-center xl:mt-10">
                            <input type="text" placeholder="Search" className="outline-none text-center" />
                        </div>
                        <div className="flex flex-col justify-between xl:w-full xl:mb-10" style={{height: 550}}>
                            <p className="2xl:text-2xl text-gray-700 2xl:mt-16 font-bold">TUTTI GLI ARTICOLI</p>
                            <p className="underline text-yellow-500">→ Fabric opening</p>
                            <p className="underline font-semibold text-gray-700">→ Applied Dna Sciences, WestPoint Home Sign</p>
                            <p className="underline font-semibold text-gray-700">→ HanesBrands Awarded Ninth</p>
                            <p className="underline font-semibold text-gray-700">→ HanesBrands Awarded Ninth</p>
                            <p className="underline font-semibold text-gray-700">→ HanesBrands Awarded Ninth</p>
                            <p className="underline font-semibold text-gray-700">→ HanesBrands Awarded Ninth</p>
                            <p className="underline font-semibold text-gray-700">→ HanesBrands Awarded Ninth</p>
                        </div>
                    </div>
                    <div className="w-full border-2 border-gray-300 xl:px-10 xl:mt-14">
                        <div className="flex flex-col xl:w-full xl:mb-10" style={{height: 550}}>
                            <p className="2xl:text-2xl text-gray-700 2xl:my-10 font-bold">POST RECENTI</p>
                            <BlogArticleSide />
                            <BlogArticleSide />
                            <BlogArticleSide />
                            <BlogArticleSide />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between xl:w-1/12 xl:my-20">
                <p onClick={()=>setPage(page - 1)} className="cursor-pointer text-gray-400">{`<`} Prev</p>
                <p onClick={()=>setPage(1)} className={"cursor-pointer " + (page === 1 ? 'text-yellow-500' : 'text-gray-400')}>1</p>
                <p onClick={()=>setPage(2)} className={"cursor-pointer " + (page === 2 ? 'text-yellow-500' : 'text-gray-400')}>2</p>
                <p onClick={()=>setPage(3)} className={"cursor-pointer " + (page === 3 ? 'text-yellow-500' : 'text-gray-400')}>3</p>
                <p onClick={()=>setPage(page + 1)} className="cursor-pointer text-yellow-500">Next {`>`}</p>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const blogNews = await fetchAPI(`/blog-news`);


    return {
        props: { blogNews },
        revalidate: 1,
    };
}
