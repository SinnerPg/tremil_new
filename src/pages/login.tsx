/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prefer-template */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function login() {
    const [type, setType] = useState("login");

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);

    console.log(errors);


    return (
        <div className="bg-gray-200 w-full flex justify-center items-center xl:pt-32 xl:px-96">
            <div className="bg-white flex-col xl:my-32 w-10/12 flex justify-center items-center">
                <div className="flex flex-row w-full xl:mb-32">
                    <p className={"text-black font-semibold xl:font-xl text-center w-1/2 xl:py-6 cursor-pointer " + (type === "login" ? 
                    "border-b-2 border-red-600" : "")} onClick={() => setType("login")}>Login</p>
                    <p className={"text-black font-semibold xl:font-xl text-center w-1/2 xl:py-6 cursor-pointer " + (type === "signup" ? 
                    "border-b-2 border-red-600" : "")} onClick={() => setType("signup")}>Registrazione</p>
                </div>
                {type === "login" && 
                <>
                    <form onSubmit={handleSubmit(onSubmit)} className="xl:w-8/12 flex flex-col">
                        <p className={"text-gray-900 font-semibold " + (errors.loginEmail ? "text-red-600" : "")}>Il mio indirizzo e-mail</p>
                        <input type="text" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="loginEmail" ref={register({ required: true })} />
                        <p className={"text-gray-900 font-semibold " + (errors.loginPassword ? "text-red-600" : "")}>La mia password</p>
                        <input type="password" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="loginPassword" ref={register({ required: true, minLength: 8 })} />
                        <div className="flex flex-row items-center">
                            <input type="checkbox" id="check" name="check" />
                            <label htmlFor="check" className="text-gray-900 ml-2 ">Resta collegato</label>
                        </div>
                        {Object.entries(errors).length !== 0 && <p className="text-red-600 text-sm mt-4 text-center font-semibold">Per entrare devi inserire tutti i dati</p>}
                        <div className="flex justify-center w-full">
                            <input type="submit" className="bg-blue-400 text-white flex justify-center items-center cursor-pointer font-bold
                            xl:w-7/12 xl:h-12 xl:text-xl xl:my-10" value="LOGIN" />
                        </div>
                    </form>
                    <div className="flex justify-end w-full xl:mb-8 xl:mr-20">
                        <p className="text-gray-800 underline">Dimenticato la password?</p>
                    </div>
                </>}
                {type === "signup" &&
                <>
                    <form onSubmit={handleSubmit(onSubmit)} className="xl:w-8/12 flex flex-col">
                        <p className={"text-gray-900 font-semibold " + (errors.email ? "text-red-600" : "")}>Il mio indirizzo e-mail</p>
                        <input type="text" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="email" ref={register({ required: true })} />
                        <p className={"text-gray-900 font-semibold " + (errors.password ? "text-red-600" : "")}>La mia password (minimo 8 caratteri)</p>
                        <input type="password" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="password" ref={register({ required: true, minLength: 8 })} />
                        <div className="flex flex-row items-center mb-2">
                            <input type="checkbox" id="check" name="check" />
                            <label htmlFor="check" className="text-gray-900 ml-2">Iscrizione alla newsletter per ricevere sconti e promozioni</label>
                        </div>
                        <p className={"text-gray-900 font-semibold " + (errors.society ? "text-red-600" : "")}>Società</p>
                        <input type="text" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="society" ref={register({ required: true })} />
                        <p className={"text-gray-900 font-semibold " + (errors.pIva ? "text-red-600" : "")}>P.Iva</p>
                        <input type="number" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="pIva" ref={register({ required: true })} />
                        <p className={"text-gray-900 font-semibold " + (errors.name ? "text-red-600" : "")}>Nome</p>
                        <input type="text" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="name" ref={register({ required: true })} />
                        <p className={"text-gray-900 font-semibold " + (errors.surname ? "text-red-600" : "")}>Cognome</p>
                        <input type="text" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="surname" ref={register({ required: true })}/>
                        <p className={"text-gray-900 font-semibold " + (errors.fiscalCode ? "text-red-600" : "")}>Codice Fiscale</p>
                        <input type="text" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="fiscalCode" ref={register({ required: true })}/>
                        <p className={"text-gray-900 font-semibold " + (errors.billAddress ? "text-red-600" : "")}>Indirizzo Fatturazione</p>
                        <input type="text" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="billAddress" ref={register({ required: true })} />
                        <p className={"text-gray-900 font-semibold " + (errors.cap ? "text-red-600" : "")}>C.A.P.</p>
                        <input type="text" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="cap" ref={register({ required: true })} />
                        <p className={"text-gray-900 font-semibold " + (errors.city ? "text-red-600" : "")}>Città</p>
                        <input type="text" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="city" ref={register({ required: true })}/>
                        <p className={"text-gray-900 font-semibold " + (errors.tel ? "text-red-600" : "")}>Recapito telefonico</p>
                        <input type="text" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="tel" ref={register({ required: true })}/>
                        <p className={"text-gray-900 font-semibold " + (errors.shipAddress ? "text-red-600" : "")}>Indirizzo di consegna</p>
                        <input type="text" className="w-full outline-none xl:my-4 xl:py-2" style={{borderWidth: 1}} name="shipAddress" ref={register({ required: true })}/>
                        <div className="flex flex-row items-center">
                            <input type="checkbox" id="protection" name="protection" ref={register({ required: true })}/>
                            <label htmlFor="protection" className="text-gray-900 ml-2 font-semibold">Ho preso visione della Protezione dei dati e li accetto</label>
                        </div>
                        <div className="flex justify-center w-full">
                            <input type="submit" className="bg-blue-400 text-white flex justify-center items-center cursor-pointer font-bold
                            xl:w-5/12 xl:h-12 xl:text-xl xl:my-10" value="REGISTRATI" />
                        </div>
                        {Object.entries(errors).length !== 0 && <p className="text-red-600 text-sm mb-10">Per registrarti devi inserire tutti i dati e prendere visione della protezione dei dati</p>}
                    </form>
                </>}
            </div>
        </div>
    )
}
