
export default function ImageCaption({ image, caption }: any) {
    return (
        <div className="max-w-desktop w-9/12 bg-cover 2xl:mr-4" style={{backgroundImage: `url(${image})`}}>
            <div className="bg-black bg-opacity-60 flex h-full flex-col justify-end items-center">
                <p className="text-white font-bold 2xl:text-4xl text-center 2xl:mb-12 2xl:w-10/12">{caption}</p>
            </div>
        </div>
    )
}
