import { getStrapiMedia } from "../lib/media";

export default function RoundedAvatar({staff}: any) {
    return (
        <div className="flex flex-col 2xl:mr-20 max-w-desktop 2xl:w-1/4">
            <div className="bg-cover bg-center rounded-full" style={{width: 341, height: 341, backgroundImage: `url(${getStrapiMedia(staff.image)})`}} />
            <p className="text-blue-400 text-2xl text-center font-semibold 2xl:mt-6">{staff.name}</p>
            <p className="text-blue-400 text-2xl text-center font-semibold">{staff.role}</p>
        </div>
    )
}
