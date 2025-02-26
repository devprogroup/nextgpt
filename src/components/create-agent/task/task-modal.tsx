"use client"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { MdCheck, MdCheckBox, MdEmail, MdLocationOn, MdPhone, MdBolt } from "react-icons/md"
import { TaskTypeType, StoreType } from "@/types"
import Modal from "@/components/create-agent/common/modal"

import { setTask } from "@/store/agent"

import { TASKS } from "./index"

export function TaskModal({isOpen, close}:{isOpen: boolean, close: ()=>void}) {
    const task = useSelector((state:StoreType)=>state.agent.task)
    const [type, setType] = React.useState<TaskTypeType>(task?.type || null)
    const dispatch = useDispatch()
    
    
    const setTaskType = (value: TaskTypeType) => {
        dispatch(setTask({ type: value }))
    }
    const onContinueClick = () => {
        close()
        setTaskType(type)
    }
    return (
        <Modal
                isOpen={isOpen}
                close={close}
                title="What type of work will your agent do?"
            >
                <div className="p-6 pt-0 w-[800px]">
                    <div className="grid grid-cols-2 gap-4">
                        {TASKS.map((it, i)=>(
                            <div
                                className={`rounded-2xl border ${type === it.type ? 'border-gray-800' : 'border-gray-200'} p-2 cursor-pointer relative`}
                                onClick={()=>setType(it.type)}
                                key={it.type}
                            >
                                <div className="rounded-xl overflow-hidden relative">
                                    <div className="bg-gray-100 rounded-xl relative">
                                        {type === it.type && (
                                            <label className="absolute right-2 top-2 p-1 rounded-full bg-gray-900 text-white"><MdCheck /></label>
                                        )}
                                        <img src={it.maskImage} className="w-full h-full absolute" />
                                        <div className="h-40 flex items-center justify-center relative">
                                            {it.bannerComponent}
                                        </div>
                                    </div>
                                    <div className="p-4 pt-0 relative">
                                        <div className="-mt-6 mb-1">
                                            {it.icon}
                                        </div>
                                        <h2 className="nextgpt__text-size_lg mb-1 nextgpt__font_semibold">{it.title}</h2>
                                        <div className="nextgpt__text-color_sub">
                                            <p className="mb-1">{it.subtitle}</p>
                                            <p>Use cases include:</p>
                                            <ul className="list-disc list-inside">
                                                {it.useCases.map((it, i)=>(
                                                    <li key={i}>{it}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                        
                    </div>
                    <button
                        onClick={onContinueClick}
                        className="nextgpt__btn_size_md nextgpt__btn_dark w-full mt-2"
                    >Continue</button>
                </div>
                
            </Modal>
    )
}