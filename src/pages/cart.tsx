import Link from "next/link";
import CartTable from "../../components/CartTable";
import ArticlePreview from "../../components/ArticlePreview";

export default function cart() {

    const products = [{
        name: `Sample Product Image`,
        color: `Red`,
        size: `L`,
        price: 200.00,
        quantity: `1`,
        total: 200.00
    },
    {
        name: `Sample Product Image`,
        color: `Red`,
        size: `L`,
        price: 200.00,
        quantity: `1`,
        total: 200.00
    },
    {
        name: `Sample Product Image`,
        color: `Red`,
        size: `L`,
        price: 200.00,
        quantity: `1`,
        total: 200.00
    },]

    return (
        <div className="w-full xl:pt-56 flex flex-col justify-center items-center">
            <div className="xl:w-10/12">
                <p className="text-black xl:text-3xl font-bold xl:mb-24">CARRELLO</p>
                <CartTable products={products} />
                <p className="text-red-500 my-5">ATTENZIONE: potrai caricare i tuoi file per la stampa solo dopo aver effettuato l'ordine</p>
                <div className="w-full flex justify-end">
                    <Link href="/shop"><div className="bg-white text-black flex justify-center items-center cursor-pointer font-semibold border border-black
                    xl:w-3/12 xl:py-6 xl:px-6 xl:text-xl xl:mr-4">CONTINUA ACQUISTI</div></Link>
                    <div className="bg-gray-700 text-white flex justify-center items-center cursor-pointer font-bold
                    xl:w-3/12 xl:py-4 xl:px-6 xl:text-xl">PAGA</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-gray-700
                    2xl:text-6xl 2xl:my-20">Prodotti consigliati</p>
                    <div className="flex flex-row mt-8 xl:mb-16 2xl:w-full">
                        <ArticlePreview image="/product1.png" title="Sample Product" price="€200.00" />
                        <ArticlePreview image="/product2.png" title="Sample Product" price="€200.00" />
                        <ArticlePreview image="/product3.png" title="Sample Product" price="€200.00" />
                    </div>
                </div>
            </div>
        </div>
    )
}