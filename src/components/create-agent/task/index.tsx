"use client"

import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCheckBox, MdEmail, MdLocationOn, MdPhone, MdBolt, MdInfo } from "react-icons/md"

import { setTask } from "@/store/agent";
import { StoreType } from "@/types";
import { TaskModal } from "./task-modal";
import { TaskItemType } from "./types";
import { Circuit, Notebook, Listing, HeadPhone } from "../svg"
import UploadCsv from "./collector/upload-csv";
import Actor from "./actor";
import Collector from "./collector";

export const TASKS: TaskItemType[] = [
    {
        type: 'actor',
        label: 'Actor',
        icon: <Circuit />,
        title: 'Following a script',
        subtitle: 'Execute a predefined scripted interaction with users.',
        useCases: [
            'interviewing candidates',
            'onboarding new members onto your service'
        ],
        maskImage: '/create-agent/actor.png',
        bannerComponent: (
            <div className="w-48 rounded-xl bg-white p-3 shadow-md">
                <label className="flex items-center nextgpt__text-secondary nextgpt__text-size_sm"><MdCheckBox /><span className="ml-2">ST-1.2</span></label>
                <h1 className="nextgpt__text-size_md">Title of step</h1>
                <p className="nextgpt__text-muted nextgpt__text-size_sm">Description of this step</p>
            </div>
        )
    },
    {
        type: 'collector',
        label: 'Collector',
        icon: <Notebook />,
        title: 'Collecting information',
        subtitle: 'Collect a checklist of information from users in order to do something.',
        useCases: [
            'collecting new customer details'
        ],
        maskImage: '/create-agent/collector.png',
        bannerComponent: (
            <div className="flex flex-col items-center  nextgpt__text-size_sm">
                <div className="rounded-xl bg-white px-4 py-1 flex items-center shadow-md">
                    <MdLocationOn fill="#00B8A7" />
                    <span className="ml-2">Address</span>
                </div>
                <div className="rounded-xl bg-white px-4 py-1 my-2 flex items-center shadow-md">
                    <MdPhone fill="#FB6D27" />
                    <span className="ml-2">Phone number</span>
                </div>
                <div className="rounded-xl bg-white px-4 py-1 flex items-center shadow-md">
                    <MdEmail fill="#25C1FF" />
                    <span className="ml-2">Email</span>
                </div>
            </div>
        )
    },
    {
        type: 'operator',
        label: 'Operator',
        icon: <Listing />,
        title: 'Copiloting a job',
        subtitle: 'Perform specific tasks to support users in their work (e.g., research, write, etc.).',
        useCases: [
            'performing market research',
            'creating social media ads'
        ],
        maskImage: '/create-agent/operator.png',
        bannerComponent: (
            <div className="w-full p-10">
                <div className="rounded-xl bg-white px-4 py-3 show-md flex items-center">
                    <label className="bg-[#25C1FF] p-0.5 rounded-md"><MdBolt fill="#FFFFFF" /></label>
                    <span className="ml-2 font-semibold  nextgpt__text-size_sm">Research a company</span>
                </div>
            </div>

        )
    },
    {
        type: 'supporter',
        label: 'Supporter',
        icon: <HeadPhone />,
        title: 'Answering questions',
        subtitle: 'Respond with accurate knowledge to clarify customer inquiries.',
        useCases: [
            'customer support for your business',
        ],
        maskImage: '/create-agent/supporter.png',
        bannerComponent: (
            <div className="w-full px-10 space-y-4 nextgpt__text-size_sm">
                <div className="flex justify-end">
                    <p className="bg-gray-900 text-white py-2 px-4 rounded-full rounded-br-none">How long does a delivery take?</p>
                </div>
                <div className="flex justify-start">
                    <p className="bg-white py-2 px-4 rounded-full rounded-bl-none">Typically between 5-10 business days</p>
                </div>


            </div>
        )

    },
]

export default function Task() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const dispatch = useDispatch()
    const task = useSelector((state: StoreType) => state.agent.task)
    const name = useSelector((state: StoreType) => state.agent.identity.firstName)

    const setTaskValue = (key: string, value: any) => {
        dispatch(setTask({ [key]: value }))
    }

    return (
        <div className="nextgpt__form-container">
            <div className="nextgpt__form-group">
                <label htmlFor="purpose" className="block">
                    Describe the main purpose of {name}
                </label>
                <input
                    id="purpose"
                    className="nextgpt__input"
                    value={task.purpose}
                    placeholder="“To answer inquiries about customer’s purchase”"
                    onChange={(e) => setTaskValue('purpose', e.target.value)}
                />
            </div>
            <div className="nextgpt__form-group">
                <label htmlFor="purpose" className="block">
                    Share a few daily activities {name} can expect to encounter
                </label>
                <input
                    id="purpose"
                    className="nextgpt__input"
                    value={task.activities}
                    onChange={(e) => setTaskValue('activities', e.target.value)}
                />
            </div>
            <div className="nextgpt__form-group">
                <label htmlFor="purpose" className="block">
                    What type of agent do you want {name} to be?
                </label>
                <div className="nextgpt__input flex justify-between items-center">
                    <div className="flex items-center">
                        {task.type && TASKS.find(it => it.type === task.type)?.icon}
                        <span className="ml-2">{task.type && TASKS.find(it => it.type === task.type)?.label}</span>
                        {task.type === null && <span className="nextgpt__text-color_placeholder">No type selected</span>}
                    </div>
                    <button
                        className="nextgpt__btn_secondary nextgpt__btn_size_sm"
                        onClick={() => setIsOpen(true)}
                    >{task.type ? 'Change' : 'Select type'}</button>
                </div>
                {task.type === 'actor' && (
                    <div className="flex h-12 justify-between items-center rounded-lg overflow-hidden nextgpt__agent_border">
                        <div className="flex items-center h-full">
                            <label className="text-xl nextgpt__bg_neutral-100 h-full w-12 flex items-center justify-center"><MdInfo fill="#B4B7C1" /></label>
                            <span className="ml-2">Start from our script template</span>
                        </div>
                        <button className="mr-3 nextgpt__text-color_secondary">Download template</button>
                    </div>
                )}
                {task.type === 'collector' && (
                    <div className="flex h-12 justify-between items-center rounded-lg overflow-hidden nextgpt__agent_border">
                        <div className="flex items-center h-full">
                            <label className="text-xl nextgpt__bg_neutral-100 h-full w-12 flex items-center justify-center"><MdInfo fill="#B4B7C1" /></label>
                            <span className="ml-2">Start from our excel template</span>
                        </div>
                        <button className="mr-3 nextgpt__text-color_secondary">Download template</button>
                    </div>
                )}
                

            </div>
            {task.type === 'actor' && <Actor /> }
            {task.type === 'collector' && <Collector />}
            {task.type === 'operator' && (
                <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                    <MdInfo fill="#B4B7C1" size={32} />
                    <span className="ml-3">
                        You can add skills to this agent in Step 4. See you there 😄
                    </span>

                </div>
            )}
            {task.type === 'supporter' && (
                <div className="flex items-center bg-gray-100 p-4 rounded-lg">
                    <MdInfo fill="#B4B7C1" size={32} />
                    <span className="ml-3">
                        You can add relevant knowledge to this agent for answering customer inquiries in Step 3. See you there 😄.
                    </span>

                </div>
            )}

            <TaskModal isOpen={isOpen} close={() => setIsOpen(false)} />
        </div>
    )
}