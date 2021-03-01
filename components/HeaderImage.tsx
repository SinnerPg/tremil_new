
export default function HeaderImage({image, title, description}) {
    return (
        <div className="w-full flex flex-col justify-center items-center bg-cover bg-no-repeat" style={{height: 570, backgroundImage: `url(${image})`}}>
            <p className="text-white 2xl:text-6xl 2xl:my-14 font-bold">{title}</p>
            <p className="text-white 2xl:text-3xl">{description}</p>
        </div>
    )
}
