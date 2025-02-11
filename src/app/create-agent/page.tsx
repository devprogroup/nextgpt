"use client"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import Header from "@/components/create-agent/common/header"
import Identity from "@/components/create-agent/identity"
import Task from "@/components/create-agent/task"
import Knowledge from "@/components/create-agent/knowledge"
import Skills from "@/components/create-agent/skills"
import Personality from "@/components/create-agent/personality"
import Review from "@/components/create-agent/review"
import BottomNav from "@/components/create-agent/common/bottom-nav"

import { STEPS } from "@/constants"

export default function CreateAgent({ children }: { children: React.ReactNode }) {
    const agent = useSelector((state: any) => state.agent)
    const step = useSelector((state: any) => state.agent.step)

    return (
        <div>
            <Header />
            <div className="screen-x-padding py-16">
                <div className="grid gap-8 md:grid-cols-[1fr,1fr]">
                    <div className="space-y-10">
                        <div>
                            <h1 className="nextgpt__agent_title">{STEPS[step].title}</h1>
                            <p className="nextgpt__agent_subtitle">{STEPS[step].subtitle}</p>
                        </div>
                        {step === 0 && <Identity />}
                        {step === 1 && <Task />}
                        {step === 2 && <Knowledge />}
                        {step === 3 && <Skills />}
                        {step === 4 && <Personality />}
                        {step === 5 && <Review />}
                        <BottomNav
                            valid={true}
                        />
                    </div>
                    {/* Preview Card */}
                    <div className="h-full flex justify-center items-center bg-gray-50 rounded-3xl">
                        <div className="rounded-3xl bg-white p-6  min-w-2/3 shadow-lg">
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gray-100 text-3xl font-medium">
                                    {agent.identity.firstName[0]}
                                    {agent.identity.lastName[0]}
                                </div>
                                <div className="text-center text-gray-400">
                                    <h3 className="text-4xl font-medium">
                                        {agent.identity.firstName || 'John'} {agent.identity.lastName || 'Doe'}
                                    </h3>
                                    <p className="text-2xl">{agent.identity.role || 'Job title'} @ {agent.identity.organization || 'Company'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
