import React from 'react'

export default function CartTable({ products }: any) {

    const priceSum = products.reduce((acc: any, currentValue: any) => acc + currentValue.price, 0);

    return (
        <>
        {/* Table header */}
            <div className="w-full border-gray-200 border-l border-t border-r flex">
                <div className="flex xl:w-6/12 justify-center items-center xl:py-4 border-gray-200 border-r">
                    <p className="text-black font-bold text-center">NOME PRODOTTO</p>
                </div>
                <div className="flex xl:w-2/12 justify-center items-center xl:py-4 border-gray-200 border-r">
                    <p className="text-black font-bold text-center">PREZZO</p>
                </div>
                <div className="flex xl:w-1/12 justify-center items-center xl:py-4 border-gray-200 border-r">
                    <p className="text-black font-bold text-center">QNT</p>
                </div>
                <div className="flex xl:w-2/12 justify-center items-center xl:py-4 border-gray-200 border-r">
                    <p className="text-black font-bold text-center">TOTALE</p>
                </div>
            </div>
            {/* Rows */}
            {products.map((product: any, index: any) =>
            <div key={index}>
                <div className="w-full border-gray-200 border-l border-r flex">
                    <div className="flex xl:w-6/12 xl:py-8 xl:px-8 items-center border-gray-200 border-r border-b">
                        <input type="checkbox" className="w-8 h-8 xl:mr-20" />
                        <div className="w-40 h-40 bg-gray-200 xl:mr-10" />
                        <div className="flex flex-col">
                            <p className="font-semibold text-gray-500">{product.name}</p>
                            <p className="font-semibold text-gray-500">Color : {product.color}</p>
                            <p className="font-semibold text-gray-500">Size : {product.size}</p>
                        </div>
                    </div>
                    <div className="flex xl:w-2/12 xl:py-4 xl:px-8 justify-center items-center border-gray-200 border-r border-b">
                        <p className="text-black font-bold text-center">€{product.price}</p>
                    </div>
                    <div className="flex xl:w-1/12 xl:py-4 xl:px-8 justify-center items-center border-gray-200 border-r border-b">
                        <p className="text-black font-bold text-center">{product.quantity}</p>
                    </div>
                    <div className="flex xl:w-2/12 xl:py-4 xl:px-8 justify-center items-center border-gray-200 border-r border-b">
                        <p className="text-black font-bold text-center">€{product.total}</p>
                    </div>
                    <div className="flex xl:w-1/12 justify-center items-center border-gray-200 border-b">
                        <img src="/trash_can.svg" alt="remove" className="cursor-pointer" />
                    </div>
                </div>
            </div>
            )}
            <div className="w-full bg-gray-300 border-gray-300 border-l border-b border-r flex">
                <div className="flex xl:w-9/12 justify-end items-center xl:py-7 border-gray-200 border-r">
                    <p className="text-black xl:text-xl font-bold text-center xl:mr-10">TOTALE</p>
                </div>
                <div className="flex xl:w-3/12 justify-center items-center xl:py-7 border-gray-200 border-r">
                    <p className="text-black xl:text-xl font-bold text-center">€{priceSum}</p>
                </div>
            </div>
        </>
    )
}
