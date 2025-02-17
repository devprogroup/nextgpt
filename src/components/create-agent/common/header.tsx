"use client"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FaTimes } from 'react-icons/fa'
import { STEPS } from "@/constants"
import { setStep } from "@/store/agent"
import { StoreType } from "@/types"

export default function ProgressHeader() {
    const step = useSelector((state:StoreType)=>state.agent.step)
    const dispatch = useDispatch()

    return (
        <div className="screen-x-padding py-5 border-b border-gray-200">
            <div className="flex items-center justify-center relative">
                <h3 className="absolute left-0 text-xl">Creating an agent</h3>
                <div className="flex items-center">
                    {
                        STEPS.map((it, i)=>(
                            <div
                                onClick={()=>dispatch(setStep(i))}
                                className={`cursor-pointer rounded-full flex items-center mx-2 ${step === i ? 'bg-gray-100' : 'border border-gray-200'} p-2`} key={i}>
                                <span className="h-5 text-sm w-5 flex justify-center items-center bg-gray-400 text-white rounded-full">{i+1}</span>
                                { step === i && <span className="block mx-1 capitalize">{it.key}</span>}
                            </div>
                        ))
                    }
                </div>
                <div className="absolute right-0 flex items-center">
                    <div className="rounded-full border border-gray-100 py-2 px-4 flex items-center mr-2">
                        <i className="h-3 w-3 rounded-full bg-gray-500 block mr-2"></i>
                        <span className="text-gray-600">Progress saved</span>
                    </div>
                    <button className="rounded-full h-10 w-10 bg-gray-100 text-gray-500 flex justify-center items-center"><FaTimes /></button>
                </div>
            </div>
        </div>
        
    )
}