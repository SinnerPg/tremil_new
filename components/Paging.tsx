/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */


export default function Paging({page, totalPage, setPage}: any) {
    if(totalPage === 1)
    {
        return (
            <div className="flex justify-end">
                <div className="flex flex-row items-right justify-between xl:w-2/12 xl:my-20">
                    <p onClick={()=>page > 1 && setPage(page - 1)} className="cursor-pointer text-gray-400">{`<`} Prev</p>
                    <p className="cursor-pointer text-yellow-500">1</p>
                    <p onClick={()=>page < totalPage && setPage(page + 1)} className="cursor-pointer text-yellow-500">Next {`>`}</p>
                </div>
            </div>
        )
    }
    if(totalPage === 2)
    {
        return(
            <div className="flex justify-end">
                <div className="flex flex-row items-right justify-between xl:w-2/12 xl:my-20">
                    <p onClick={()=>page > 1 && setPage(page - 1)} className="cursor-pointer text-gray-400">{`<`} Prev</p>
                    <p onClick={()=>setPage(1)} className={`cursor-pointer ${  page === 1 ? `text-yellow-500` : `text-gray-400`}`}>1</p>
                    <p onClick={()=>setPage(2)} className={`cursor-pointer ${  page === 2 ? `text-yellow-500` : `text-gray-400`}`}>2</p>
                    <p onClick={()=>page < totalPage && setPage(page + 1)} className="cursor-pointer text-yellow-500">Next {`>`}</p>
                </div>
            </div>
        )
    }
    if(totalPage >= 3)
    {
        <div className="flex justify-end">
            <div className="flex flex-row items-right justify-between xl:w-2/12 xl:my-20">
                <p onClick={()=>page > 1 && setPage(page - 1)} className="cursor-pointer text-gray-400">{`<`} Prev</p>
                {page < 2 &&
                    <>
                        <p onClick={()=>setPage(1)} className={`cursor-pointer ${  page === 1 ? `text-yellow-500` : `text-gray-400`}`}>1</p>
                        <p onClick={()=>setPage(2)} className={`cursor-pointer ${  page === 2 ? `text-yellow-500` : `text-gray-400`}`}>2</p>
                        <p onClick={()=>setPage(3)} className={`cursor-pointer ${  page === 3 ? `text-yellow-500` : `text-gray-400`}`}>3</p>
                    </>
                }
                {page > 2 && page < totalPage &&
                    <>
                        <p onClick={()=>setPage(page-1)} className="cursor-pointer text-gray-400">{page-1}</p>
                        <p className="cursor-pointer text-yellow-500">{page}</p>
                        <p onClick={()=>setPage(page+1)} className="cursor-pointer text-gray-400">{page+1}</p>
                    </>
                }
                {page === totalPage &&
                    <>
                        <p onClick={()=>setPage(page-2)} className="cursor-pointer text-gray-400">{page-2}</p>
                        <p onClick={()=>setPage(page-1)} className="cursor-pointer text-gray-400">{page-1}</p>
                        <p className="cursor-pointer text-yellow-500">{page}</p>
                    </>
                }
                <p onClick={()=>page < totalPage && setPage(page + 1)} className="cursor-pointer text-yellow-500">Next {`>`}</p>
            </div>
        </div>
    }
    return <></>;
}