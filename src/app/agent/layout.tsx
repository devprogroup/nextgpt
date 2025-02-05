"use client"
import React from "react"

import { useSelector } from "react-redux"
const STEPS = [
    {
        title: "Create your agent's identity",
        subtitle: "Enter the following details to create your agent's identity."
    },
    {
        title: "Define your agent's tasks",
        subtitle: "We will use this to define your agent's purpose and daily tasks"
    }
]
export default function Agent({children}:{children:React.ReactNode}){
    const identity = useSelector((state:any)=>state.agent.identity)
    const step = useSelector((state:any)=>state.agent.step)
    return (
        <div className="grid gap-8 md:grid-cols-[1fr,1fr]">
            <div className="space-y-10">
                <div>
                    <h1 className="nextgpt__agent_title">{STEPS[step].title}</h1>
                    <p className="nextgpt__agent_subtitle">{STEPS[step].subtitle}</p>
                </div>
                {children}
                
            </div>
            {/* Preview Card */}
            <div className="h-full flex justify-center items-center bg-gray-50 rounded-3xl">
                <div className="rounded-3xl bg-white p-6  min-w-2/3 shadow-lg">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gray-100 text-3xl font-medium">
                            {identity.firstName[0]}
                            {identity.lastName[0]}
                        </div>
                        <div className="text-center text-gray-400">
                            <h3 className="text-4xl font-medium">
                                {identity.firstName || 'John'} {identity.lastName || 'Doe'}
                            </h3>
                            <p className="text-2xl">{identity.role || 'Job title'} @ {identity.organization || 'Company'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
