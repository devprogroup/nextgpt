"use client"

import { useState } from "react"
import { FaArrowLeft, FaUpload } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux"
import { setIdentity } from "@/store/agent"
import Link from "next/link"

export default function AgentForm() {
    const identity = useSelector((state: any) => state.agent.identity)
    const dispatch = useDispatch()
    const [showOther, setShowOther] = useState(false)

    const roles = [
        "Brand manager",
        "Business analyst",
        "Business developer",
        "HR support",
        "Customer onboarding",
        "Customer support",
        "Marketing manager",
        "Interviewer",
    ]
    const onClickRole = (role: string) => {
        if (role === identity.role) {
            dispatch(setIdentity({ role: '' }))
        } else {
            dispatch(setIdentity({ role }))
        }
        setShowOther(false)
    }
    const onClickOther = () => {
        if (!showOther) {
            dispatch(setIdentity({ role: '' }))
        }
        setShowOther(!showOther)
    }
    const setIdentityValue = (key: string, value: any) => {
        dispatch(setIdentity({ [key]: value }))
    }
    return (
        <div className="space-y-8">
            {/* Name Fields */}
            <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="block">
                        First name
                    </label>
                    <input
                        id="firstName"
                        className="w-full rounded-md focus:outline-none text-3xl"
                        value={identity.firstName}
                        placeholder="John"
                        onChange={(e) => setIdentityValue('firstName', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="block">
                        Last name
                    </label>
                    <input
                        id="lastName"
                        className="w-full rounded-md focus:outline-none text-3xl"
                        value={identity.lastName}
                        placeholder="Doe"
                        onChange={(e) => setIdentityValue('lastName', e.target.value)}
                    />
                </div>
                <div className="flex items-center">
                    <span className="mr-4 text-gray-500">Max 3MB</span>
                    <button className="w-16 h-16 flex bg-gray-100 rounded-full border border-dashed justify-center items-center text-gray-300">
                        <FaUpload />
                    </button>
                </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-4">
                <label className="block">What is your agent's role in your company?</label>
                <div className="flex flex-wrap gap-2">
                    {roles.map((it) => (
                        <button
                            key={it}
                            onClick={() => { onClickRole(it) }}
                            className={`nextgpt__btn-rounded ${identity.role === it && "active"}`}
                        >
                            {it}
                        </button>
                    ))}
                    <button onClick={onClickOther} className={`rounded-full px-3 py-1 text-md ${showOther ? "bg-gray-900 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}>Other</button>
                </div>
                {showOther && (
                    <input
                        className="nextgpt__input"
                        value={identity.role}
                        placeholder="Role name here"
                        onChange={(e) => { setIdentityValue('role', e.target.value) }}
                    />
                )}
            </div>

            {/* Organization Fields */}
            <div className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="organization" className="block">
                        What organization does your agent work at?
                    </label>
                    <input
                        id="organization"
                        className="nextgpt__input"
                        value={identity.organization}
                        onChange={(e) => setIdentityValue('organization', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="orgDescription" className="flex justify-between">
                        <span>What does this organization do?</span>
                        <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                        id="orgDescription"
                        className="nextgpt__input"
                        value={identity.organizationDescription}
                        onChange={(e) => setIdentityValue('organizationDescription', e.target.value)}
                    />
                </div>
            </div>

            {/* LLM Selection */}
            <div className="grid grid-cols-2">
                <div className="flex items-center">
                    <label className="block font-medium">Select LLM</label>
                </div>
                <select
                    className="nextgpt__input"
                    value={identity.llm}
                    onChange={(e) => { setIdentityValue('llm', e.target.value) }}
                >
                    <option value="">GPT 4e, Llama etc.</option>
                    <option value="gpt4">GPT-4</option>
                    <option value="llama">Llama</option>
                    <option value="claude">Claude</option>
                </select>
            </div>
            {/* Navigation */}
            <div className="flex items-center justify-between pt-6">
                <button className="text-gray-600 hover:text-gray-900">
                    <FaArrowLeft />
                </button>
                <Link href="/agent/task" className="nextgpt__btn-dark">Continue</Link>
            </div>
            
        </div>
    )
}

