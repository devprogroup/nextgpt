"use client"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { FaTimes } from 'react-icons/fa'
import { STEPS } from "@/constants"
import { setStep } from "@/store/agent"
import { StoreType } from "@/types"
import { MdClose } from "react-icons/md"

export default function ProgressHeader() {
    const step = useSelector((state: StoreType) => state.agent.step)
    const dispatch = useDispatch()

    return (
        <div className="nextgpt__container">
            <h3 className="absolute left-0 text-[16px] nextgpt__font_semibold">Creating an agent</h3>
            <div className="flex items-center space-x-[12px]">
                {
                    STEPS.map((it, i) => (
                        <div
                            onClick={() => dispatch(setStep(i))}
                            className={`group p-2 cursor-pointer rounded-full flex items-center ${step === i ? 'bg-[#F7F7F8] border-transparent' : 'border-[#EEEFF1]'} border`} key={i}>
                            <span className="h-4 text-[11px] w-4 flex justify-center items-center bg-[#868B98] text-white rounded-full"><span>{i + 1}</span></span>
                            <span className={`${i === step ? 'block' : 'hidden'} group-hover:block mx-1 capitalize leading-none`}>{it.key}</span>
                        </div>
                    ))
                }
            </div>
            <div className="absolute right-0 flex items-center">
                <div className="rounded-full border border-[#EEEFF1] h-[32px] px-3 flex items-center mr-2">
                    <i className="h-2 w-2 rounded-full nextgpt__bg_secondary block mr-2"></i>
                    <span className="nextgpt__text-color_sub">Progress saved</span>
                </div>
                <button className="rounded-full h-[32px] w-[32px] nextgpt__bg_neutral-50 text-[#868B98] flex justify-center items-center"><MdClose /></button>
            </div>
        </div>
    )
}