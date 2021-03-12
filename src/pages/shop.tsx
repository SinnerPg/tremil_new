/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from "react";
import Header from "../../components/HeaderImage";
import RangeComponent from "../../components/RangeComponent";
import ArticlePreview from "../../components/ArticlePreview";
import { fetchAPI } from "../../lib/api";
import Paging from "../../components/Paging";

export default function shop({categories}: any) {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [products, setProducts] = useState();
    const [categoryFilter, setCategoryFilter] = useState(0);
    const [priceFilter, setPriceFilter] = useState([50, 100]);

    useEffect(async () => {
        if(categoryFilter === 0){
            const fetchedProducts = await fetchAPI(`/products?price_gte=${priceFilter[0]}&price_lte=${priceFilter[1]}`);
            if(fetchedProducts.length % 6 === 0)
            {
                setTotalPage(fetchedProducts.length / 6);
            } else
            {
                setTotalPage(Math.round((fetchedProducts.length / 6) + 1));
            }
            setProducts(fetchedProducts);
        } else {
            const fetchedProducts = await fetchAPI(`/products?categories.id=${categoryFilter}&price_gte=${priceFilter[0]}&price_lte=${priceFilter[1]}`);
            if(fetchedProducts.length % 6 === 0)
            {
                setTotalPage(fetchedProducts.length / 6);
            } else
            {
                setTotalPage(Math.round((fetchedProducts.length / 6) + 1));
            }
            setProducts(fetchedProducts);
        }
    }, [categoryFilter, priceFilter]);
    
    const priceFiltering = (value: any) =>
    {
        setPriceFilter(value);
    }

    return (
        <div className="flex h-full w-full flex-col 2xl:pt-20">
            <Header image="shop_header.png" title="Scopri" description="Soluzioni e prodotti per il tuo brand e impresa" />
            <div className="xl:px-36 px-10 pt-24 flex flex-row">
                <div className="flex flex-col xl:w-2/12">
                    <p className="text-gray-700 text-lg">Categorie</p>
                    {categories.map((category: any, index: number) =>
                        <div key={index} className="cursor-pointer" onClick={() => categoryFilter === category.id ? setCategoryFilter(0) : setCategoryFilter(category.id)}>
                            <p className={`${categoryFilter === category.id ? `text-blue-400` : `text-gray-700`  } xl:my-4`}>→ {category.name}</p>
                            <div className="w-full bg-gray-300 h-px" />
                        </div>
                    )}
                    <p className="2xl:text-xl text-gray-700 2xl:mt-12 font-bold">FILTRA PER PREZZO</p>
                    <RangeComponent min={50} max={300} defaultValues={[priceFilter[0], priceFilter[1]]} setPrice={priceFiltering} />
                    <p className="text-gray-700">Prezzo: €{priceFilter[0]}-€{priceFilter[1]}</p>
                </div>
                <div className="flex flex-col xl:w-10/12 xl:ml-24">
                    <div className="flex flex-row w-full xl:pl-10 xl:mb-20">
                        <p className="xl:text-xl">Ordina:</p>
                    </div>
                    <div className="flex flex-wrap">
                        {products?.slice(0 + ((page - 1) * 6), (page * 6)).map((product: any, index: number) => 
                        <ArticlePreview key={index} product={product} />)}
                    </div>
                    <Paging page={page} totalPage={totalPage} setPage={setPage} />
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const categories = await fetchAPI(`/categories`);

    return {
        props: { categories },
        revalidate: 1,
    };
}
