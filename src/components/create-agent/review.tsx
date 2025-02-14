"use client"

import BottomNav from "@/components/create-agent/common/bottom-nav"
import React from "react"
import { FaArrowLeft } from "react-icons/fa"

export default function Review() {
    return (
        <div className="h-full flex flex-col justify-center px-20">
            <h1 className="text-4xl font-bold">Almost there!</h1>
            <p className="nextgpt__text-muted">Review all of your agent skills, description and objective before creating it</p>
            <div className="h-40"></div>
            <div className="flex gap-4">
                <button className="bg-gray-100 border w-10 flex justify-center items-center rounded-lg text-gray-600"><FaArrowLeft /></button>
                <button className="nextgpt__btn-dark flex-grow">Create Ivan</button>
            </div>
        </div>
    )
}