import Link from "next/link";
import Slider from "../../components/SliderComponent";
import ImageCaption from "../../components/ImageCaption";
import ArticlePreview from "../../components/ArticlePreview";
import Article from "../../components/Article";
import { fetchAPI } from "../../lib/api";

export default function Home({ home }: any) {
  const articles = [{
    slug: "articolo-1",
    title: "Titolo 1",
    author: {
      name: "Admin"
    },
    category: {
      name: "Category"
    },
    description: "Li European lingues es membres del sam familie. Lor separat existentie es un myth. Port scientie."
  },
  {
    slug: "articolo-1",
    title: "Titolo 1",
    author: {
      name: "Admin"
    },
    category: {
      name: "Category"
    },
    description: "Li European lingues es membres del sam familie. Lor separat existentie es un myth. Port scientie."
  },
  {
    slug: "articolo-1",
    title: "Titolo 1",
    author: {
      name: "Admin"
    },
    category: {
      name: "Category"
    },
    description: "Li European lingues es membres del sam familie. Lor separat existentie es un myth. Port scientie."
  }]

  return (
    <div className="flex justify-center items-center h-full w-full flex-col 2xl:pt-20">
      <Slider slides={home.slider}/>
      <p className="font-bold text-blue-800 text-center
      2xl:text-5xl 2xl:w-10/12 2xl:my-14">Dal 1997 Tremil si occupa di progettazione, produzione e installazione di sistemi di comunicazione indoor e outdoor</p>
      <p className="text-gray-500 text-center
      2xl:text-4xl 2xl:w-9/12">Scopri tutti i nostri prodotti e servizi</p>
      <div className="flex justify-between flex-row
      2xl:w-9/12 2xl:my-10" style={{height: 575}}>
        <ImageCaption image="img1.png" caption="Insegne" />
        <ImageCaption image="img2.png" caption="Visual communication" />
        <ImageCaption image="img3.png" caption="Arredo d'interni" />
      </div>
      <div className="flex items-center bg-blue-800
      2xl:py-20 2xl:px-20 2xl:mb-20">
        <div className="flex justify-between items-center 2xl:w-11/12 flex-row">
          <p className="text-white font-bold
          2xl:text-6xl 2xl:w-7/12 whitespace-pre-line">Scopri tutta la nostra gamma di servizi e prodotti {`\n`} per la comunicazione visiva</p>
          <div className="border-4 border-white flex justify-center items-center 
          2xl:h-24 2xl:px-28">
            <p className="text-white font-semibold 2xl:text-2xl">Scopri</p>
          </div>
        </div>
      </div>
      <p className="font-bold text-gray-700
      2xl:text-6xl 2xl:my-14">I nostri prodotti</p>
      <p className="text-gray-500 text-center
      2xl:text-2xl 2xl:w-5/12">Grazie ad un'esperienza di oltre 40 anni offriamo prodotti pronti all'uso per comunicazione, arredo e pubblicità!</p>
      <div className="flex justify-between flex-row
      2xl:w-10/12 2xl:my-20">
        {home.relatedProducts && home.relatedProducts.slice(0,3).map((product: any, index: number) => <ArticlePreview key={index} product={product.product} />)}
      </div>
      <p className="font-bold text-gray-700
      2xl:text-6xl 2xl:my-14">I nostri servizi</p>
      <p className="text-gray-500 text-center
      2xl:text-2xl 2xl:w-6/12">I nostri prodotti sono unici, pensati per ogni soluzione ed esigenza comunicativa e commerciale. Scopri tutta la gamma di soluzioni 
      pensate appositamente per l’arredo e la comunicazione.</p>
      <Link href="services"><div className="bg-blue-800 flex justify-center items-center 
      2xl:h-16 2xl:px-16 2xl:my-20 cursor-pointer">
        <p className="text-white">SCOPRI</p>
      </div></Link>
      <div className="flex flex-row w-full">
        <div className="flex bg-cover bg-no-repeat 2xl:w-1/2" style={{backgroundImage: `url(img1_home.png)`}}>
          <div className="w-full h-full bg-black bg-cover bg-opacity-50 flex flex-col
          2xl:py-20 2xl:px-16">
            <p className="text-white font-bold 2xl:text-6xl 2xl:w-5/12">Progetti su misura</p>
            <p className="text-white 2xl:text-xl 2xl:w-1/3 2xl:my-10">Non solo prodotti pronti a essere utilizzati, ma anche su misura per rispondere ad ogni esigienza.</p>
            <p className="text-white font-semibold 2xl:text-2xl 2xl:mt-5 underline">Contattaci</p>
          </div>
        </div>
        <div className="flex bg-cover bg-no-repeat 2xl:w-1/2" style={{backgroundImage: `url(img2_home.png)`}}>
          <div className="w-full h-full bg-black bg-cover bg-opacity-50 flex flex-col
          2xl:py-20 2xl:px-16">
            <p className="text-white font-bold 2xl:text-6xl 2xl:w-5/12">Lasciati ispirare</p>
            <p className="text-white 2xl:text-xl 2xl:w-1/3 2xl:my-10">Scopri le soluzioni che abbiamo pensato e realizzato per i nostri clienti.</p>
            <p className="text-white font-semibold 2xl:text-2xl 2xl:mt-5 underline">Portfolio</p>
          </div>
        </div>
      </div>
      <p className="font-bold text-gray-700
        2xl:text-6xl 2xl:my-14">Prodotti che ti stupiranno</p>
      <div className="flex flex-row overflow-x-auto mt-8 2xl:w-full">
        {home.relatedProducts && home.relatedProducts.map((product: any, index: number) => <ArticlePreview key={index} product={product.product} />)}
      </div>
      <div className="flex flex-row items-center ml-72
      2xl:w-10/12 2xl:my-20">
        <div className="flex border-2 border-gray-700 items-center
        2xl:w-3/12 2xl:py-4 2xl:px-10 2xl:mr-10">
          <img className="2xl:mr-8" src="48h.svg" alt="48h" />
          <p className="text-gray-700 font-bold 2xl:w-3/12">Consegna in 24H</p>
        </div>
        <div className="flex border-2 border-gray-700 items-center
        2xl:w-3/12 2xl:py-4 2xl:px-10 2xl:mr-10">
          <img className="2xl:mr-8" src="shield.svg" alt="shield" />
          <p className="text-gray-700 font-bold 2xl:w-7/12">Pagamenti tracciati e garantiti</p>
        </div>
        <div className="flex border-2 border-gray-700 items-center
        2xl:w-3/12 2xl:py-4 2xl:px-10 2xl:mr-10">
          <img className="2xl:mr-8" src="callcenter.svg" alt="callcenter" />
          <p className="text-gray-700 font-bold 2xl:w-7/12">Assistenza sette giorni su sette</p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-blue-800
      2xl:py-20 2xl:px-20 2xl:mb-20">
        <div className="flex justify-center items-center flex-col 2xl:w-7/12">
          <p className="text-white font-bold text-center
          2xl:text-6xl whitespace-pre-line">Iscriviti alla nostra Newsletter per rimanere aggiornato su sconti e novità!</p>
          <input type="text" placeholder="Inserisci la tua mail" className="outline-none 2xl:h-14 2xl:w-7/12 2xl:mt-10 2xl:pl-8" />
          <div className="flex flex-row text-white justify-center items-center mt-6">
            <input type="checkbox" id="policy" name="policy" className="mr-2"/>
            <label htmlFor="policy">Ho preso visione della <span className="underline">Privacy Policy.*</span></label>
          </div>
          <div className="border-4 border-white flex justify-center items-center 
          xl:h-20 xl:px-16 xl:mt-10 cursor-pointer">
            <p className="text-white font-semibold 2xl:text-2xl">Iscriviti</p>
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-center
      2xl:text-4xl 2xl:w-6/12">Blog</p>
      <p className="font-bold text-gray-700
      2xl:text-6xl 2xl:my-6">Su di noi</p>
      <p className="text-gray-500 text-center
      2xl:text-2xl 2xl:w-6/12">Rimani aggiornato su tutte le nostre iniziative</p>
      <div className="flex flex-row overflow-x-auto ml-8 2xl:mt-16">
        {articles.map((article, index) => <Article key={index} article={article} /> )}
      </div>
      <div className="flex items-center bg-blue-400
      2xl:py-20 2xl:px-20 2xl:mt-20">
        <div className="flex justify-between items-center 2xl:w-11/12 flex-row">
          <p className="text-white font-bold
          2xl:text-6xl 2xl:w-7/12 whitespace-pre-line">Scopri tutta la nostra gamma di servizi e prodotti {`\n`} per la comunicazione visiva</p>
          <div className="border-4 border-white flex justify-center items-center 
          2xl:h-24 2xl:px-28 cursor-pointer">
            <p className="text-white font-semibold 2xl:text-2xl">Scopri</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const home = await fetchAPI(`/home`);

  return {
    props: { home },
    revalidate: 1,
  };
}
