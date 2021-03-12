
export default function HeaderImage({image, title, description}: any) {
    return (
        <div className="w-full flex bg-cover bg-no-repeat" style={{height: 570, backgroundImage: `url(${image})`}}>
            <div className="bg-black justify-center items-center flex flex-col w-full h-full bg-opacity-60">
                <p className="text-white 2xl:text-6xl 2xl:my-14 font-bold text-center w-6/12">{title}</p>
                <p className="text-white 2xl:text-3xl">{description}</p>
            </div>
        </div>
    )
}
