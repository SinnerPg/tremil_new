import Slider from "../../components/SliderComponent";
import ImageCaption from "../../components/ImageCaption";
import ArticlePreview from "../../components/ArticlePreview";
import Article from "../../components/Article";

export default function Home() {
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
    <div className="flex justify-center items-center h-full w-full flex-col">
      <Slider />
      <p className="font-bold text-gray-700
      2xl:text-6xl 2xl:my-14">Scopri tutti i nostri prodotti e servizi</p>
      <p className="text-gray-500 text-center
      2xl:text-4xl 2xl:w-9/12">Dal 1979 Tremil si occupa di progettazione, produzione e installazione di sistemi di comunicazione indoor e outdoor</p>
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
        <ArticlePreview image="/product1.png" title="Sample Product" price="€200.00" />
        <ArticlePreview image="/product2.png" title="Sample Product" price="€200.00" />
        <ArticlePreview image="/product3.png" title="Sample Product" price="€200.00" />
      </div>
      <p className="font-bold text-gray-700
      2xl:text-6xl 2xl:my-14">I nostri servizi</p>
      <p className="text-gray-500 text-center
      2xl:text-2xl 2xl:w-6/12">I nostri prodotti sono unici, pensati per ogni soluzione ed esigenza comunicativa e commerciale. Scopri tutta la gamma di soluzioni 
      pensate appositamente per l’arredo e la comunicazione.</p>
      <div className="bg-blue-800 flex justify-center items-center 
      2xl:h-16 2xl:px-16 2xl:my-20">
        <p className="text-white">SCOPRI</p>
      </div>
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
        <ArticlePreview image="/product1.png" title="Sample Product" price="€200.00" />
        <ArticlePreview image="/product2.png" title="Sample Product" price="€200.00" />
        <ArticlePreview image="/product3.png" title="Sample Product" price="€200.00" />
        <ArticlePreview image="/product1.png" title="Sample Product" price="€200.00" />
        <ArticlePreview image="/product2.png" title="Sample Product" price="€200.00" />
        <ArticlePreview image="/product3.png" title="Sample Product" price="€200.00" />
      </div>
      <div className="flex flex-row justify-between
      2xl:w-9/12 2xl:my-20">
        <div className="flex border-2 border-gray-700 justify-center items-center
        2xl:w-3/12">
          <p className="border-gray-700">Consegna in 24H</p>
        </div>
        <div className="flex border-2 border-gray-700 justify-center items-center
        2xl:w-3/12">
          <p className="border-gray-700">Consegna in 24H</p>
        </div>
        <div className="flex border-2 border-gray-700 justify-center items-center
        2xl:w-3/12">
          <p className="border-gray-700">Consegna in 24H</p>
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
          2xl:h-24 2xl:px-28">
            <p className="text-white font-semibold 2xl:text-2xl">Scopri</p>
          </div>
        </div>
      </div>
    </div>
  );
}
