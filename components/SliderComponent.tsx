/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useState } from "react";
import { getStrapiMedia } from "../lib/media";

export default function SliderComponent({ slides }: any) {
    const [slideNumber, setSlideNumber] = useState(0);

    return (
        <div className="w-full relative">
            <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={35}
            totalSlides={slides.length}
            dragEnabled={false}
            >
                <Slider>
                    {slides.map((slide: any, index: number) => 
                        <Slide index={index} key={index}>
                            <div className="w-full h-full bg-cover bg-no-repeat" style={{backgroundImage: `url(${getStrapiMedia(slide.img)})`}}>
                                {!slide.isRight ? 
                                    <div className="w-full h-full bg-black bg-cover bg-opacity-60 flex justify-center items-center flex-col">
                                        <div className="w-6/12 flex items-start flex-col">
                                            {slide.category && <p className="text-white text-xl">{slide.category}</p>}
                                            {slide.title && <p className="text-white text-6xl font-bold">{slide.title}</p>}
                                            {slide.description && <p className="text-white text-3xl mt-6">{slide.description}</p>}
                                            {slide.button && <div className="border-2 border-white flex justify-center items-center 2xl:w-2/12 2xl:h-12 2xl:mt-10 cursor-pointer">
                                                <p className="text-white">{slide.button}</p>
                                            </div>}
                                        </div>
                                    </div>
                                :
                                    <div className="w-full h-full flex justify-end items-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${getStrapiMedia(slide.img)})`}}>
                                        <div className="w-3/12 flex flex-col 2xl:mr-56">
                                        {slide.category && <p className="text-white text-xl text-right">{slide.category}</p>}
                                        {slide.title && <p className="text-white text-6xl font-bold text-right">{slide.title}</p>}
                                        {slide.description && <p className="text-black text-4xl text-right 2xl:mt-14">{slide.description}</p>}
                                        {slide.button &&
                                            <div className="flex justify-center items-center">
                                                <div className="border-2 border-white flex justify-center items-center 2xl:w-4/12 2xl:h-12 2xl:mt-10 cursor-pointer">
                                                    <p className="text-white">{slide.button}</p>
                                                </div>
                                            </div>}
                                        </div>
                                    </div>
                                }
                            </div>
                        </Slide>)
                    }
                </Slider>
                {/* <div className="absolute left-1/2 top-2/4">
                    <Dot slide={0}>
                        <div className="rounded-full bg-white w-4 h-4" />
                    </Dot>
                    <Dot className="rounded-full bg-white w-4 h-4" slide={1} />
                    <Dot className="rounded-full bg-white w-4 h-4" slide={2} />
                </div> */}
                {slideNumber !== 0 && <ButtonBack className="absolute top-80 left-28"><img alt="back" src="left_arrow.svg" onClick={() => setSlideNumber(slideNumber-1)} /></ButtonBack>}
                {slideNumber !== slides.length - 1 && <ButtonNext className="absolute top-80 right-28"><img alt="back" src="right_arrow.svg" onClick={() => setSlideNumber(slideNumber+1)} /></ButtonNext>}
            </CarouselProvider>
        </div>
    )
}
