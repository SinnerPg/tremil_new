import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function SliderComponent() {
    return (
        <div className="w-full relative">
            <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={35}
            totalSlides={3}
            >
                <Slider>
                    <Slide index={0}>
                        <div className="w-full h-full bg-cover bg-no-repeat" style={{backgroundImage: `url(slider1.png)`}}>
                            <div className="w-full h-full bg-black bg-cover bg-opacity-60 flex justify-center items-center flex-col">
                                <div className="w-5/12 h-2/4 flex justify-between items-start flex-col">
                                    <p className="text-white text-xl">PROGETTAZIONE</p>
                                    <p className="text-white text-6xl font-bold">Realizza in 48h il restyling del tuo punto vendita</p>
                                    <div className="border-2 border-white flex justify-center items-center w-3/12 h-12">
                                        <p className="text-white">SCOPRI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={1}>
                        <div className="w-full h-full flex justify-end items-center bg-cover bg-no-repeat" style={{backgroundImage: `url(slider1.png)`}}>
                            <div className="w-3/12 flex flex-col 2xl:mr-56">
                                <p className="text-white text-6xl font-bold text-right">Progetti senza limiti</p>
                                <p className="text-black text-4xl text-right 2xl:mt-14">La giusta dimensione al tuo brand, per essere un punto di riferimento per i tuoi clienti</p>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={2}>
                        <div className="w-full h-full bg-cover bg-no-repeat" style={{backgroundImage: `url(slider1.png)`}}>
                            <div className="w-full h-full bg-black bg-cover bg-opacity-60 flex justify-center items-center flex-col">
                                <div className="w-5/12 h-2/4 flex justify-between items-start flex-col">
                                    <p className="text-white text-xl">PROGETTAZIONE</p>
                                    <p className="text-white text-6xl font-bold">Realizza in 48h il restyling del tuo punto vendita</p>
                                    <div className="border-4 border-white flex justify-center items-center w-3/12 h-12">
                                        <p className="text-white">SCOPRI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Slider>
                {/* <div className="absolute left-1/2 top-2/4">
                    <Dot slide={0}>
                        <div className="rounded-full bg-white w-4 h-4" />
                    </Dot>
                    <Dot className="rounded-full bg-white w-4 h-4" slide={1} />
                    <Dot className="rounded-full bg-white w-4 h-4" slide={2} />
                </div> */}
                <ButtonBack className="absolute top-80 left-28"><img alt="back" src="left_arrow.svg" /></ButtonBack>
                <ButtonNext className="absolute top-80 right-28"><img alt="back" src="right_arrow.svg" /></ButtonNext>
            </CarouselProvider>
        </div>
    )
}
