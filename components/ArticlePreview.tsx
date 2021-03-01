import Image from "next/image";

export default function ArticlePreview({image, title, price}: any) {
    return (
        <div className="flex flex-col justify-between min-w-desktop 2xl:mx-8 h-full shadow-xl">
            <Image width={450} height={500} src={image} />
            <div className="flex flex-col 2xl:mt-20 2xl:px-8 border-l border-b border-r border-gray-300">
                <div className="flex flex-row justify-center items-center">
                    <p className="text-black 2xl:text-2xl 2xl:mb-5 2xl:w-10/12 font-semibold">{title}</p>
                    <img className="mb-4" alt="hearth" src="/heart_off.svg" />
                </div>
                <p className="text-gray-600 2xl:text-4xl 2xl:mb-7 2xl:w-10/12 font-bold">{price}</p>
            </div>
        </div>
    )
}
