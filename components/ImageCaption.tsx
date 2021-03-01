
export default function ImageCaption({ image, caption }: any) {
    return (
        <div className="flex flex-col justify-end items-center max-w-desktop w-9/12 h-full bg-cover bg-no-repeat" style={{backgroundImage: `url(${image})`}}>
            <p className="text-white 2xl:text-4xl text-center 2xl:mb-12 2xl:w-10/12">{caption}</p>
        </div>
    )
}
