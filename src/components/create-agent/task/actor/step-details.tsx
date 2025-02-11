"use client"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { StoreType } from "@/types"
import { setTask } from "@/store/agent"
interface PropsType {
    stepIndex: number,
}

export default function ScriptDetails ({ stepIndex }: PropsType) {
    const script = useSelector((state: StoreType) => state.agent.task.script)
    const dispatch = useDispatch()
    const setStepValue = (key: string, value: string) => {
        if (script && stepIndex >= 0) {
            dispatch(setTask({
                script: {
                    ...script,
                    steps: script.steps.map((it, i) => {
                        if (i === stepIndex) {
                            return {
                                ...it,
                                [key]: value
                            }
                        }
                        return it
                    })
                }
            }))
        }

    }
    return script ? (
        <div className="space-y-4">
            <div className="nextgpt__form-group">
                <label htmlFor="title" className="block">
                    Step title
                </label>
                <input
                    id="title"
                    className="nextgpt__input"
                    value={script.steps[stepIndex].title}
                    onChange={(e) => { setStepValue('title', e.target.value) }}
                />
            </div>
            <div className="nextgpt__form-group">
                <label htmlFor="context" className="block">
                    Context
                </label>
                <textarea
                    id="description"
                    className="nextgpt__input"
                    value={script.steps[stepIndex].context}
                    onChange={(e) => { setStepValue('context', e.target.value) }}
                />
            </div>
            <div className="nextgpt__form-group">
                <label htmlFor="prompt" className="block">
                    Propmt for this step
                </label>
                <div className="nextgpt__agent_border rounded-lg overflow-hidden">
                    <textarea
                        id="prompt"
                        rows={7}
                        className="w-full p-4"
                        value={script.steps[stepIndex].prompt}
                        onChange={(e) => { setStepValue('prompt', e.target.value) }}
                    />
                    <div className="bg-gray-100 px-4 py-2">
                        <p className="nextgpt__text-muted">Type <span className="inline-block px-2 mx-1 border  rounded">/</span> to attach skills in your prompt.</p>
                    </div>
                </div>
            </div>
            <div className="nextgpt__form-group">
                <label className="block">Skills used</label>
                <div className="space-y-2">
                    {script.steps[stepIndex].skills.map((it, i) => (
                        <div
                            key={it}
                            className="flex items-center nextgpt__agent_border px-4 py-2 rounded-lg"
                        >
                            <img src="/create-agent/airtable.png" className="w-8 p-1 border rounded-md" />
                            <label className="ml-2">{it}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) : null
}