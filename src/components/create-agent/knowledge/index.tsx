"use client"

import BottomNav from "@/components/create-agent/common/bottom-nav";
import { setKnowledge } from "@/store/agent";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SubscriptionModal from "./subscription-modal";
import { StoreType } from "@/types";
import { TopicIcon } from "../svg";
import OfferAlternative from "./offer-alternative";
import AlternativeOther from "./alternative-other";
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
const ALTERNATIVES = [
    {
        key: 'escalate',
        label: 'Escalate',
    },
    {
        key: 'offer_alternative',
        label: 'Offer alternative',
    },
    {
        key: 'other',
        label: 'Other',
    }
]

export default function Knowledge() {
    const knowledge = useSelector((state: StoreType) => state.agent.knowledge)
    const [showSubscriptionModal, setShowSubscriptionModal] = React.useState(false);
   

    const dispatch = useDispatch()
    const setKnowledgeValue = (key: string, value: string) => {
        dispatch(setKnowledge({ [key]: value }))
    }
    const onParameterChange = (key: string, value: boolean) => {
        let newParameters
        if (value) {
            newParameters = [...knowledge.parameters, key]
        } else {
            newParameters = knowledge.parameters.filter((it: string) => it !== key)
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
                    {knowledge.topics.length === 0 ? (
                        <div id="topic" className="nextgpt__agent_border border-dashed py-6 rounded-md text-center">
                            <p className="text-center font-semibold">Add your first knowledge source</p>
                            <p className="nextgpt__agent_text-muted mb-6">Give your agent more context and resource to handle tasks.</p>
                            <button className="nextgpt__btn_primary" onClick={() => { setShowSubscriptionModal(true) }}>New knowledge</button>
                        </div>
                    ) : (
                        <div>{
                            knowledge.topics.map((topic, i) => (
                                <div className="flex items-center gap-2 border rounded-lg p-2" key={i}>
                                    <span className="bg-gray-400 flex items-center justify-center p-0.5 rounded"><TopicIcon width={24} height={24} /></span>
                                    <div>
                                        <h2>{topic.name}</h2>
                                        <p className="nextgpt__text-muted text-sm">{topic.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
                <div className="nextgpt__form-group">
                    <label htmlFor="no-answer" className="block">
                        What if agent can't answer a question?
                    </label>
                    <div id="no-answer" className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                            {ALTERNATIVES.map((it) => (
                                <button
                                    key={it.key}
                                    onClick={() => { setKnowledgeValue('alternativeType', it.key) }}
                                    className={`nextgpt__btn-rounded ${knowledge.alternativeType === it.key && "active"}`}
                                >
                                    {it.label}
                                </button>
                            ))}
                        </div>
                        {knowledge.alternativeType === 'offer_alternative' && (
                            <OfferAlternative />
                        )}
                        {knowledge.alternativeType === 'other' && (
                            <AlternativeOther />
                        )}

                        
                    </div>
                </div>
                <div className="nextgpt__form-group">
                    <label htmlFor="parameters" className="block">
                        Set parameters
                    </label>
                    <div id="parameters">
                        <ul className="space-y-2">
                            {
                                PARAMETERS.map((it, i) => (
                                    <li key={it.key}>
                                        <label className="nextgpt__font_regular">
                                            <input
                                                type="checkbox"
                                                onChange={(e) => { onParameterChange(it.key, e.target.checked) }}
                                                checked={knowledge.parameters.includes(it.key)}
                                            />
                                            <span className="ml-3">{it.label}</span>
                                        </label>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <SubscriptionModal isOpen={showSubscriptionModal} close={() => setShowSubscriptionModal(false)} />
        </div>
    )
}