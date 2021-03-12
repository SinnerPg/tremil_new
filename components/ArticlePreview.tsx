import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../lib/media";

export default function ArticlePreview({product}: any) {
    return (
        <Link href="/product/" as={`/product/${product.slug}`}>
            <div className="flex flex-col justify-between min-w-desktop max-w-desktop 2xl:mx-8 xl:mb-6 h-auto shadow-xl cursor-pointer">
                <Image width={450} height={500} src={getStrapiMedia(product.image)} />
                <div className="flex flex-col 2xl:mt-20 2xl:px-8 border-l border-b border-r border-gray-300">
                    <div className="flex flex-row items-center">
                        <p className="text-black 2xl:text-2xl 2xl:w-10/12 font-semibold">{product.title}</p>
                        <img className="mb-4" alt="hearth" src="/heart_off.svg" />
                    </div>
                    <p className="text-gray-700 xl:text-xl xl:my-5">{product.shortDescription}</p>
                    <p className="text-gray-600 2xl:text-4xl 2xl:mb-7 2xl:w-10/12 font-bold">€{product.price.toFixed(2)}</p>
                </div>
            </div>
        </Link>
    )
}
