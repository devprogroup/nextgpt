"use client"

import BottomNav from "@/components/create-agent/common/bottom-nav";
import { setKnowledge } from "@/store/agent";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const PARAMETERS = [
    {
        key: "limit_to_provided_knowledge",
        label: "Limit to provided knowledge?",
    },
    {
        key: 'allow_flexibility_around_the_script',
        label: 'Allow flexibility around the script'
    },
    {
        key: 'allow_flexibility_around_order_of_information',
        label: 'Allow flexibility around order of information'
    },
]
const ALTERNATIVES = ['Escalate', 'Offer alternative', 'Other']

export default function Knowledge(){
    const knowledge = useSelector((state:any) => state.agent.knowledge)
    const dispatch = useDispatch()
    const setKnowledgeValue = (key: string, value: string) => {
        dispatch(setKnowledge({ [key]: value }))
    }
    const onParameterChange = (key:string, value:boolean) => {
        let newParameters
        if(value){
            newParameters = [...knowledge.parameters, key]
        }else{
            newParameters = knowledge.parameters.filter((it:string)=>it !== key)
        }
        dispatch(setKnowledge({ parameters: newParameters }))
    }
    return (
        <div>
            <div className="nextgpt__form-container">
                <div className="nextgpt__form-group">
                    <label htmlFor="topic" className="block">
                        What topic should this agent have knowledge about?
                    </label>
                    <div id="topic" className="nextgpt__agent_border border-dashed py-6 rounded-md text-center">
                        <p className="text-center font-semibold">Add your first knowledge source</p>
                        <p className="nextgpt__agent_text-muted mb-6">Give your agent more context and resource to handle tasks.</p>
                        <button className="bg-gray-200 py-1 px-3 rounded-lg">New knowledge</button>
                    </div>
                </div>
                <div className="nextgpt__form-group">
                    <label htmlFor="no-answer" className="block">
                        What if agent can't answer a question?
                    </label>
                    <div id="no-answer">
                        <div className="flex flex-wrap gap-2">
                        {ALTERNATIVES.map((it) => (
                            <button
                                key={it}
                                onClick={() => { setKnowledgeValue('alternative', it) }}
                                className={`nextgpt__btn-rounded ${knowledge.alternative === it && "active"}`}
                            >
                                {it}
                            </button>
                        ))}
                    </div>
                    
                    </div>
                </div>
                <div className="nextgpt__form-group">
                    <label htmlFor="parameters" className="block">
                        Set parameters
                    </label>
                    <div id="parameters">
                        <ul>
                            {
                                PARAMETERS.map((it, i)=>(
                                    <li key={it.key}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                onChange={(e)=>{onParameterChange(it.key, e.target.checked)}}
                                                checked={knowledge.parameters.includes(it.key)}
                                            /> {it.label}
                                        </label>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}