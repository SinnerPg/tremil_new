import Image from "next/image";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { SRLWrapper } from "simple-react-lightbox";
import { fetchAPI } from "../../../lib/api";
import { getStrapiMedia } from "../../../lib/media";

export default function portfolioDescription ({ portfolio }: any) {
    moment.locale(`it`);
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
        <div className="flex w-full xl:pt-32 flex-col items-center">
          <div className="xl:w-9/12 flex flex-col xl:mt-20">
            <p className="text-black xl:text-5xl font-bold">{portfolio.title}</p>
            <div className="text-black xl:text-xl xl:mt-10 whitespace-pre-line xl:mb-24">
                <ReactMarkdown parserOptions={{ commonmark: true }} source={portfolio.description}/>
            </div>
            <SRLWrapper options={options}>
              <Image width={1920} height={1024} className="cursor-pointer" src={getStrapiMedia(portfolio.cover)} />
              <div className="flex justify-between flex-row xl:w-full xl:mt-10 xl:mb-24">
                {portfolio.media.map((media: any) => <Image width={420} height={360} className="cursor-pointer" src={getStrapiMedia(media)} />)}
              </div>
            </SRLWrapper>
          </div>
          <div className="flex items-center bg-blue-800
          2xl:py-20 2xl:px-20">
              <div className="flex justify-between items-center 2xl:w-11/12 flex-row">
              <p className="text-white font-bold
              2xl:text-6xl 2xl:w-7/12 whitespace-pre-line">Contattaci per realizzare un progetto e per scoprire le nostre soluzioni su misura</p>
              <div className="border-4 border-white flex justify-center items-center 
              2xl:h-32 2xl:px-28">
                  <p className="text-white font-semibold 2xl:text-3xl">Contattaci</p>
              </div>
              </div>
          </div>
        </div>
    )
}

export async function getStaticPaths() {
  const portfolios = await fetchAPI(`/portfolios`);

  return {
    paths: portfolios.map((portfolio: any) => ({
      params: {
        slug: portfolio.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const portfolio = await fetchAPI(`/portfolios?slug=${params.slug}`);


  return {
      props: { portfolio: portfolio[0] },
      revalidate: 1,
  };
}
