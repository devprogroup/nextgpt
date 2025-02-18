"use client"

import BottomNav from "@/components/create-agent/common/bottom-nav"
import React from "react"
import { FaArrowLeft } from "react-icons/fa"

export default function Review() {
    return (
        <div className="h-full flex flex-col justify-center px-32">
            <h1 className="text-[40px] nextgpt__font_bold">Almost there!</h1>
            <p className="nextgpt__text-color_sub nextgpt__text-size_lg">Review all of your agent skills, description and objective before creating it</p>
            <div className="h-40"></div>
            <div className="flex gap-4">
                <button className="nextgpt__btn_primary nextgpt__btn_size_md nextgpt__text-color_sub w-9 flex justify-center items-center"><FaArrowLeft /></button>
                <button className="nextgpt__btn_dark nextgpt__btn_size_md flex-grow">Create Ivan</button>
            </div>
        </div>
    )
}