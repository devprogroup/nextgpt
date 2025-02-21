"use client"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FaTimes } from 'react-icons/fa'
import { STEPS } from "@/constants"
import { setStep } from "@/store/agent"
import { StoreType } from "@/types"
import { MdClose } from "react-icons/md"

export default function ProgressHeader() {
    const step = useSelector((state:StoreType)=>state.agent.step)
    const dispatch = useDispatch()

    return (
        <div className="nextgpt__container border-b border-gray-200">
            <div className="min-h-[80px] flex items-center justify-center relative">
                <h3 className="absolute left-0 text-[16px] nextgpt__font_semibold">Creating an agent</h3>
                <div className="flex items-center">
                    {
                        STEPS.map((it, i)=>(
                            <div
                                onClick={()=>dispatch(setStep(i))}
                                className={`cursor-pointer rounded-full flex items-center mx-2 ${step === i ? 'nextgpt__bg_surface' : 'border border-gray-200'} p-[6px]`} key={i}>
                                <span className="h-[17px] text-[11px] w-[17px] flex justify-center items-center bg-gray-400 text-white rounded-full"><span>{i+1}</span></span>
                                { step === i && <span className="block mx-1 capitalize">{it.key}</span>}
                            </div>
                        ))
                    }
                </div>
                <div className="absolute right-0 flex items-center">
                    <div className="rounded-full border border-gray-100 h-[32px] px-4 flex items-center mr-2">
                        <i className="h-3 w-3 rounded-full nextgpt__bg_secondary block mr-2"></i>
                        <span className="nextgpt__text-color_sub">Progress saved</span>
                    </div>
                    <button className="rounded-full h-[32px] w-[32px] nextgpt__bg_neutral-50 text-[#868B98] flex justify-center items-center"><MdClose /></button>
                </div>
            </div>
        </div>
    )
}