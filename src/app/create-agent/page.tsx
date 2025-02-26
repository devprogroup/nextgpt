"use client"
import React, { useEffect } from "react"
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
import { setIdentity, setStep } from "@/store/agent"
import { TASKS } from "@/components/create-agent/task"
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

    useEffect(() => {
        dispatch(setStep(0))
    }, [])

    return (

        <div className="h-screen w-screen flex flex-col">
            <div className="border-b border-gray-200 h-[80px] fixed top-0 left-0 right-0">
                <Header />
            </div>
            <div className="h-[calc(100vh-80px)] mt-[80px] overflow-y-auto">
                <div className="h-full nextgpt__container py-12">
                    <div className="grid gap-16 md:grid-cols-2 h-full w-full">
                        <div className="flex flex-col">
                            <div className="space-y-10 min-h-[calc(100vh-276px)]">
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
                        <div className="h-full flex justify-center items-center nextgpt__bg_surface rounded-[24px]">
                            <div className="rounded-[24px] bg-white p-8 shadow-lg w-[448px]">
                                <div>
                                    {agent.identity && (
                                        <div className="flex flex-col justify-center items-center gap-4">
                                            {agent.identity.avatarUrl ? (
                                                <img
                                                    src={agent.identity.avatarUrl || ''} alt="Avatar" className="rounded-full h-24 h-24" />
                                            ) : (
                                                <div className="flex h-24 w-24 items-center justify-center rounded-full nextgpt__bg_neutral-100 text-3xl font-medium">
                                                    {agent.identity.firstName[0]}
                                                    {agent.identity.lastName[0]}
                                                </div>
                                            )}


                                            <div className="text-center tracking-[-0.01em]">
                                                <h3 className="text-[32px] nextgpt__font_semibold">
                                                    {agent.identity.firstName ? (<span>{agent.identity.firstName}</span>) : <span className="nextgpt__text-color_placeholder">John</span>}
                                                    &nbsp;
                                                    {agent.identity.lastName ? (<span>{agent.identity.lastName}</span>) : <span className="nextgpt__text-color_placeholder">Doe</span>}
                                                </h3>
                                                <p className="text-[20px] font-[400]">
                                                    {agent.identity.role ? (<span className="nextgpt__text-color_sub">{agent.identity.role}</span>) : <span className="nextgpt__text-color_placeholder">Job Title</span>}
                                                    <span className={`mx-2 ${agent.identity.organization && agent.identity.role ? 'nextgpt__text-color_sub' : 'nextgpt__text-color_placeholder'}`}>@</span>
                                                    {agent.identity.organization ? (<span className="nextgpt__text-color_sub">{agent.identity.organization}</span>) : <span className="nextgpt__text-color_placeholder">Company</span>}
                                                </p>
                                            </div>
                                        </div>
                                    )}


                                    {agent.task && (
                                        <>
                                            <hr className="dotted-hr w-full my-6"></hr>
                                            <div className="w-full space-y-2 nextgpt__text-size_lg">
                                                <div className="">
                                                    <p className="nextgpt__text-color_sub">Main objective</p>
                                                    {agent.task.purpose ? (<p>{agent.task.purpose}</p>) : <p className="nextgpt__text-color_placeholder">None added</p>}
                                                </div>
                                                <div className="">
                                                    <p className="nextgpt__text-color_sub">Agent type</p>
                                                    {agent.task.type ? (<p>{TASKS.find(it => it.type === agent.task?.type)?.title}</p>) : <p className="nextgpt__text-color_placeholder">None added</p>}
                                                </div>

                                            </div>
                                        </>
                                    )}
                                    {agent.knowledge && (
                                        <>
                                            <hr className="dotted-hr w-full my-6"></hr>
                                            <div className="w-full space-y-2 nextgpt__text-size_lg">
                                                <div className="space-y-1">
                                                    <p className="nextgpt__text-color_sub">Knowledge</p>

                                                    {agent.knowledge.topics.length > 0 ? (
                                                        <div className="space-x-2">
                                                            {
                                                                agent.knowledge.topics.map((topic, index) => (
                                                                    <span key={index} className="nextgpt__text-size-sm nextgpt__text-color_sub py-1 px-2 nextgpt__bg_surface rounded-[6px]">{topic.name}</span>
                                                                ))}
                                                        </div>
                                                    ) : (
                                                        <p className="nextgpt__text-color_placeholder">None added</p>
                                                    )}

                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {agent.skills && (
                                        <div className="w-full space-y-2 nextgpt__text-size_lg mt-2">
                                            <div className="space-y-1">
                                                <p className="nextgpt__text-color_sub">Skills</p>
                                                {agent.skills.length > 0 ? (
                                                        <div className="space-x-2">
                                                            {
                                                                agent.skills.map((topic, index) => (
                                                                    <span key={index} className="nextgpt__text-size-sm nextgpt__text-color_sub py-1 px-2 nextgpt__bg_surface rounded-[6px]">{topic.name}</span>
                                                                ))}
                                                        </div>
                                                    ) : (
                                                        <p className="nextgpt__text-color_placeholder">None added</p>
                                                    )}

                                            </div>
                                        </div>
                                    )}
                                    {agent.personality && (
                                        <>
                                            <hr className="dotted-hr w-full my-6"></hr>
                                            <div className="w-full space-y-2 nextgpt__text-size_lg">
                                                <div className="">
                                                    <p className="nextgpt__text-color_sub">Personality</p>
                                                    {agent.personality ? (<p>{agent.identity?.firstName} is extremely professional and to the point. He does not beat around the bush or present humor.</p>) : <p className="nextgpt__text-color_placeholder">None added</p>}
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


        </div>

    )
}


export default CreateAgent