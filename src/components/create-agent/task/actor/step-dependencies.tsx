"use client"
import { StoreType } from "@/types"
import React from "react"

import { useSelector } from "react-redux"
import { MdCheck } from "react-icons/md"
import { FaChevronDown } from "react-icons/fa"
interface PropType {
    stepIndex: number,
}
export default function StepDependencies({stepIndex}: PropType) {
    const script = useSelector((state: StoreType) => state.agent.task.script)

    return script && script.steps.length > 0 && stepIndex >= 0 ? (
        <div className="space-y-4">
            <div className="nextgpt__form-group">
                <label htmlFor="pre-requisite" className="block">
                    Pre-requisite step
                </label>
                <p className="nextgpt__text-muted italic">None</p>
            </div>
            <div className="nextgpt__form-group">
                <label htmlFor="next-steps" className="block">
                    Next steps
                </label>
                <div className="rounded-lg overflow-hidden nextgpt__agent_border">
                    <div className="flex justify-between items-center bg-gray-200 p-2">
                        <div className="flex items-center">
                            <div className="p-1 bg-gray-500 rounded">
                                <div className="bg-white">
                                    <MdCheck color="gray" size={10} />
                                </div>
                            </div>
                            <span className="text-gray-500 ml-2">
                                ST-2.2
                            </span>
                        </div>
                    </div>
                    <div className="p-2 flex justify-between items-center nextgpt__text-muted">
                        <span>4 possible triggers</span>
                        <FaChevronDown />
                    </div>
                </div>
            </div>
            <div className="nextgpt__form-group">
                <label htmlFor="next-steps-2">Next steps</label>
                <div className="space-y-2">
                    <div className="flex justify-between items-center bg-gray-200 p-2 nextgpt__text-muted rounded-lg">
                        <div className="flex items-center">
                            <div className="p-1 bg-gray-500 rounded">
                                <div className="bg-white">
                                    <MdCheck color="gray" size={10} />
                                </div>
                            </div>
                            <span className="text-gray-500 ml-2">
                                ST-2.1 (repeat)
                            </span>
                        </div>
                        <button>Jump</button>
                    </div>
                    <div className="flex justify-between items-center bg-gray-200 p-2 nextgpt__text-muted rounded-lg">
                        <div className="flex items-center">
                            <div className="p-1 bg-gray-500 rounded">
                                <div className="bg-white">
                                    <MdCheck color="gray" size={10} />
                                </div>
                            </div>
                            <span className="text-gray-500 ml-2">
                                ST-2.2
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nextgpt__form-group">
                <label htmlFor="follow-up">Follow-up</label>
                <div className="nextgpt__agent_border rounded-lg overflow-hidden" id="follow-up">
                    <div className="bg-gray-100 flex items-center p-2">
                        <div className="bg-indigo-500 w-6 h-6 rounded"></div>
                        <span className="text-indigo-500 ml-2 font-semibold">Ask potential basket adjustment</span>
                    </div>
                    <div className="p-2 flex justify-between items-center nextgpt__text-muted">
                        <span>2 possible triggers</span>
                        <FaChevronDown />
                    </div>
                    <div className="flex justify-end p-2">
                        <div className="bg-gray-100 rounded-lg p-2 space-y-2 flex flex-col items-end">
                            <p className="bg-white rounded-lg px-2 py-1">Can you explain again?</p>
                            <p className="bg-white rounded-lg px-2 py-1">I don't confirm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null
}