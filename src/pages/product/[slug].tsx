/* eslint-disable no-shadow */
/* eslint-disable prefer-template */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from "next/image"; 
import { SRLWrapper } from "simple-react-lightbox";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import ArticlePreview from "../../../components/ArticlePreview";
import { fetchAPI } from "../../../lib/api";
import { getStrapiMedia } from "../../../lib/media";

export default function product({ product }: any) {
    const [productNumber, setProductNumber] = useState(1);

    console.log(product);

    const options = {
        buttons: {
          showAutoplayButton: false,
          showCloseButton: false,
          showDownloadButton: false,
          showFullscreenButton: false,
          showThumbnailsButton: false,
        },
        caption: {
          showCaption: false
        }
      }

    return (
        <div className="w-full xl:pt-56 flex justify-center items-center">
            <div className="flex flex-col xl:w-10/12 justify-center items-center">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-1/2">
                        <SRLWrapper options={options}>
                            <Image width={550} height={550} src={getStrapiMedia(product.image)} />
                            <div className="flex flex-row w-9/12 justify-center">
                            {product.sliderImages.map((image: any, index: number) => <Image key={index} width={120} height={130} src={getStrapiMedia(image)} />)}
                            </div>
                        </SRLWrapper>
                    </div>
                    <div className="flex flex-col w-5/12">
                        <p className="text-gray-500 xl:text-6xl font-bold xl:leading-normal">{product.title}</p>
                        <p className="text-gray-800 xl:text-4xl xl:my-6">€{product.price.toFixed(2)}</p>
                        {product.oldPrice && <p className="text-red-500 text-lg xl:mb-6">invece di €{product.oldPrice.toFixed(2)}</p>}
                        <p className="text-gray-800 xl:text-2xl">DESCRIZIONE</p>
                        <p className="text-gray-500 xl:text-2xl xl:leading-normal xl:mt-6 xl:w-9/12">{product.shortDescription}</p>
                        {product.quantity > 0 && <><div className="flex flex-row xl:w-4/12 justify-between items-center xl:mt-10">
                            <div className={"rounded-full w-14 h-14 cursor-pointer flex justify-center items-center " + 
                            (productNumber === 1 ? "bg-gray-100" : "bg-gray-400")}
                            onClick={productNumber > 1 ? () => setProductNumber(productNumber - 1) : () => null}>
                                <img src="/minus.svg" alt="minus" />
                            </div>
                            <p className="text-black xl:text-2xl">{productNumber}</p>
                            <div className={"rounded-full w-14 h-14 cursor-pointer flex justify-center items-center " + 
                            (productNumber === product.quantity ? "bg-gray-100" : "bg-gray-400")}
                            onClick={productNumber < product.quantity ? () => setProductNumber(productNumber + 1) : () => null}>
                                <img src="/plus.svg" alt="plus" />
                            </div>
                        </div>
                        <div className="bg-gray-700 text-white flex items-center cursor-pointer font-bold
                        xl:w-5/12 xl:py-4 xl:px-6 xl:mt-10 xl:text-xl">
                            <img src="/white_cart.svg" alt="cart" className="xl:mr-6"/>
                            AGGIUNGI
                        </div></>}
                    </div>
                </div>
                <p className="text-gray-500 xl:text-4xl font-bold xl:my-32">Descrizione</p>
                <div className="text-gray-600 xl:text-2xl xl:w-full">
                    <ReactMarkdown parserOptions={{ commonmark: true }} source={product.longDescription}/>
                </div>
                <p className="font-bold text-gray-700
                2xl:text-6xl 2xl:my-20">Prodotti consigliati</p>
                <div className="flex flex-row mt-8 xl:mb-16 2xl:w-full">
                    {product.relatedProducts && product.relatedProducts.map((product: any) => 
                    <ArticlePreview product={product.product} />)}
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const products = await fetchAPI("/products");
  
    return {
      paths: products.map((product: any) => ({
        params: {
          slug: product.slug,
          id: product.id.toString(),
        },
      })),
      fallback: false,
    };
  }
  
export async function getStaticProps({ params }: any) {
    const product = await fetchAPI(`/products?slug=${params.slug}`);


    return {
        props: { product: product[0] },
        revalidate: 1,
    };
}