/* eslint-disable jsx-a11y/iframe-has-title */

export default function contacts() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row w-full">
                <img src="map.png" alt="map" />
                <div className="flex flex-col 2xl:mt-72 2xl:ml-40">
                    <p className="font-bold text-6xl text-black">Contatti</p>
                    
                    <p className="font-bold text-2xl text-black 2xl:mt-14">Indirizzo</p>
                    <p className="text-1xl text-black 2xl:mt-6">Via Giovanni Cesaro, 1</p>
                    <p className="text-1xl text-black">84013 Cava de' Tirreni SA</p>

                    <p className="font-bold text-2xl text-black 2xl:mt-8">Email</p>
                    <p className="text-1xl text-black 2xl:mt-6">info@tremil.it</p>

                    <p className="font-bold text-2xl text-black 2xl:mt-8">Telefono</p>
                    <p className="text-1xl text-black 2xl:mt-6">Tel. +39 089466546</p>
                    <p className="text-1xl text-black 2xl:mt-6">089 345003</p>
                    <p className="text-1xl text-black 2xl:mt-6">Fax 0892144421</p>
                </div>
            </div>
            <div className="flex w-full h-full text-black justify-center items-start">
                <div className="flex flex-col 2xl:w-8/12 w-full 2xl:my-20 my-10 px-10 2xl:px-0 h-full">
                    <p className="text-2xl">Contattaci</p>
                    <p className="2xl:text-5xl text-2xl font-bold 2xl:mt-6 2xl:mb-0 my-16">Facci una richiesta</p>
                    <input type="text" placeholder="Email" className="rounded-xl 2xl:mt-10 text-black font-jost font-normal items-center px-6 2xl:py-4 py-5 flex placeholder-black focus:outline-none border-2 border-gray-300" />
                    <input type="number" placeholder="Telefono" className="rounded-xl 2xl:mt-10 text-black font-jost font-normal items-center px-6 2xl:py-4 py-5 flex placeholder-black focus:outline-none border-2 border-gray-300" />
                    <div className="flex flex-row w-full justify-between">
                        <input type="text" placeholder="Azienda" className="w-5/12 rounded-xl 2xl:mt-10 text-black font-jost font-normal items-center px-6 2xl:py-4 py-5 flex placeholder-black focus:outline-none border-2 border-gray-300" />
                        <input type="text" placeholder="Indirizzo" className="w-1/2 rounded-xl 2xl:mt-10 text-black font-jost font-normal items-center px-6 2xl:py-4 py-5 flex placeholder-black focus:outline-none border-2 border-gray-300" />
                    </div>
                    <textarea placeholder="Messaggio" className="rounded-xl my-10 text-black font-jost font-normal items-center px-6 2xl:py-2 py-5 flex placeholder-black focus:outline-none border-2 border-gray-300 h-72 resize-none" />
                    <div className="bg-black text-white 2xl:text-2xl text-3xl 2xl:py-2 py-4 2xl:w-2/12 md:w-5/12 justify-center flex">
                        <p>Invia subito</p>
                    </div>
                    <div className="flex w-full justify-center items-center 2xl:mt-10">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftremilsrl&tabs=timeline&width=500&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=981116659087446"
                    width="500" height="200" scrolling="no" frameBorder="0" allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
                    </div>
                </div>
            </div>
        </div>
    )
}
