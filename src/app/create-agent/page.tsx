"use client"
import React from "react"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import Header from "@/components/create-agent/common/header"
import Identity from "@/components/create-agent/identity"
import Task from "@/components/create-agent/task"
import Knowledge from "@/components/create-agent/knowledge"
import Skills from "@/components/create-agent/skills"
import Personality from "@/components/create-agent/personality"
import Review from "@/components/create-agent/review"
import BottomNav from "@/components/create-agent/common/bottom-nav"


import { STEPS } from "@/constants"
import { StoreType } from "@/types"
import { setIdentity } from "@/store/agent"

const CreateAgent: React.FC = () => {
    const agent = useSelector((state: StoreType) => state.agent)
    const step = useSelector((state: StoreType) => state.agent.step)
    const dispatch = useDispatch()
    const onAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            dispatch(setIdentity({
                avatarUrl: URL.createObjectURL(file)
            })) 
        }
    }

    return (
        
            <div className="h-screen w-screen flex flex-col">
                <Header />
                <div className="nextgpt__container flex-grow py-12">
                    <div className="grid gap-16 md:grid-cols-2">
                        <div className="space-y-10 flex flex-col">
                            <div className="space-y-10 flex-grow">
                                {step !== 5 && (
                                    <div>
                                        <h1 className="nextgpt__title">{STEPS[step].title}</h1>
                                        <p className="nextgpt__subtitle">{STEPS[step].subtitle}</p>
                                    </div>
                                )}
                                    
                                {step === 0 && <Identity />}
                                {step === 1 && <Task />}
                                {step === 2 && <Knowledge />}
                                {step === 3 && <Skills />}
                                {step === 4 && <Personality />}
                                {step === 5 && <Review />}
                            </div>
                            <BottomNav
                                valid={true}
                                canSkip={step === 3}
                            />
                            </div>
                        <input type="file" accept="image/*" hidden id="avatar-selector" onChange={onAvatarChange} />

                        {/* Preview Card */}
                        <div className="h-full flex justify-center items-center nextgpt__bg_surface rounded-3xl">
                            <div className="rounded-3xl bg-white p-6  min-w-2/3 shadow-lg">
                                <div className="flex flex-col items-center gap-4">
                                    {agent.identity.avatarUrl ? (
                                        <Image
                                            width={112}
                                            height={112}
                                            src={agent.identity.avatarUrl || ''} alt="Avatar" className="rounded-full h-28 h-28" />
                                    ) : (
                                        <div className="flex h-28 w-28 items-center justify-center rounded-full nextgpt__bg_neutral-100 text-3xl font-medium">
                                        {agent.identity.firstName[0]}
                                        {agent.identity.lastName[0]}
                                    </div>
                                    )}
                                    
                                    
                                    <div className="text-center">
                                        <h3 className="text-[32px] font-semibold">
                                            {agent.identity.firstName ? (<span>{agent.identity.firstName}</span>) : <span className="nextgpt__text-color_placeholder">John</span>}
                                            &nbsp;
                                            {agent.identity.lastName ? (<span>{agent.identity.lastName}</span>) : <span className="nextgpt__text-color_placeholder">Doe</span>}
                                        </h3>
                                        <p className="text-[24px]">
                                            {agent.identity.role ? (<span>{agent.identity.role}</span>) : <span className="nextgpt__text-color_placeholder">Job Title</span>}
                                            <span className={`mx-2 ${agent.identity.organization && agent.identity.role ? '' : 'nextgpt__text-color_placeholder'}`}>@</span>
                                            {agent.identity.organization ? (<span>{agent.identity.organization}</span>) : <span className="nextgpt__text-color_placeholder">Company</span>}
                                        </p>
                                    </div>
                                    {agent.task.purpose && (
                                        <>
                                            <hr className="dotted-hr w-full"></hr>
                                            <div className="w-full space-y-2 nextgpt__text-size_lg">
                                                <div className="">
                                                    <p className="nextgpt__text-color_sub">Main objective</p>
                                                    <p className="">{agent.task.purpose}</p>
                                                </div>
                                                <div className="">
                                                    <p className="nextgpt__text-color_sub">Agent type</p>
                                                    <p className="">{agent.task.type}</p>
                                                </div>
                                                
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}


export default CreateAgent