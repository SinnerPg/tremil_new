
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

export default function CollapsibleDiv({caption, description, value, index, setIndex}: any) {
    return (
        <div className="flex flex-col 2xl:px-20 2xl:py-14 2xl:mb-8 bg-gray-100 border-gray-500 rounded-2xl" style={{borderWidth: 1}}>
            <div className="flex justify-between items-center">
                <p className="font-bold 2xl:text-2xl text-gray-600">{caption}</p>
                {index === value ? <img src="arrow_up.svg" alt="arrow_up" onClick={()=> setIndex(0)} /> : 
                <img src="arrow_down.svg" alt="arrow_down" onClick={()=> setIndex(value)} />}
            </div>
            <div className="overflow-hidden" style={{maxHeight: index === value ? 500 : 0, transition: `max-height 0.2s ease-out`}}>
                <p className="2xl:text-xl 2xl:mt-10 2xl:w-10/12 whitespace-pre-line text-gray-600">{description}</p>
            </div>
        </div>
    )
}
