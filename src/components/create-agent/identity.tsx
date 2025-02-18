"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setIdentity } from "@/store/agent"
import { StoreType } from "@/types"
import { BsUpload, BsChevronDown } from "react-icons/bs"
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react"
import Image from "next/image"

const LLM_OPTIONS = [
    {
        key: 'gpt',
        label: 'GPT-4 Turbo',
        icon: '/create-agent/gpt-4.png',
        isDefault: true
    }
]

export default function AgentForm() {
    const identity = useSelector((state: StoreType) => state.agent.identity)
    const dispatch = useDispatch()
    const [showOther, setShowOther] = useState(false)

    const roles = [
        'Brand manager',
        'Business analyst',
        'Business developer',
        'HR support',
        'Customer onboarding',
        'Customer support',
        'Marketing manager',
        'Interviewer',
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
    const onUploadClick = () => {
        document.getElementById('avatar-selector')?.click()
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
                        className="w-full rounded-md focus:outline-none nextgpt__text-2xl"
                        value={identity.firstName}
                        placeholder="John"
                        onChange={(e) => setIdentityValue('firstName', e.target.value)}
                    />
                </div>
                <div className="space-y-0">
                    <label htmlFor="lastName" className="block">
                        Last name
                    </label>
                    <input
                        id="lastName"
                        className="w-full rounded-md focus:outline-none nextgpt__text-2xl"
                        value={identity.lastName}
                        placeholder="Doe"
                        onChange={(e) => setIdentityValue('lastName', e.target.value)}
                    />
                </div>
                <div className="flex items-center">
                    <span className="mr-4 nextgpt__text-color_sub">Max 3MB</span>
                    <button
                        onClick={onUploadClick}
                        className="w-[56px] h-[56px] flex nextgpt__bg-neutral-25 rounded-full border border-dashed justify-center items-center nextgpt__text-color_icon-default">
                        <BsUpload width={20} height={20} />
                    </button>
                </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-4">
                <label className="block">What is your agent&lsquo;s role in your company?</label>
                <div className="flex flex-wrap gap-2">
                    {roles.map((it) => (
                        <button
                            key={it}
                            onClick={() => { onClickRole(it) }}
                            className={`nextgpt__button-selector ${identity.role === it && 'active'}`}
                        >
                            {it}
                        </button>
                    ))}
                    <button onClick={onClickOther} className={`nextgpt__button-selector ${showOther && 'active'}`}>Other</button>
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
                        placeholder="Apple"
                        value={identity.organization}
                        onChange={(e) => setIdentityValue('organization', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="orgDescription" className="flex justify-between">
                        <span>What does this organization do?</span>
                        <span className="nextgpt__text-color_placeholder nextgpt__font_regular">(optional)</span>
                    </label>
                    <input
                        id="orgDescription"
                        className="nextgpt__input"
                        placeholder="Design consultation"
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
                <Listbox value={identity.llm} onChange={(value) => setIdentityValue('llm', value)}>
                    <ListboxButton
                        className="relative block w-full rounded-lg border bg-white text-left text-sm/6 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    >
                        <div className="h-10 flex items-center justify-between px-4">
                            {LLM_OPTIONS.find(it => it.key === identity.llm) && (
                                <div className="flex items-center gap-2">
                                    <img src={LLM_OPTIONS.find(it => it.key === identity.llm)?.icon} alt="icon" className="w-6 h-6 rounded-full" />  
                                    <span>{LLM_OPTIONS.find(it => it.key === identity.llm)?.label || 'Select LLM'} {LLM_OPTIONS.find(it=>it.key === identity.llm)?.isDefault && '(default)'}</span>
                                </div>
                            )}
                            
                            
                            <BsChevronDown
                                className="group pointer-events-none size-4 fill-gray-400"
                                aria-hidden="true"
                            />
                        </div>

                    </ListboxButton>
                    <ListboxOptions
                        anchor="bottom"
                        transition
                        className="mt-1 bg-white w-[var(--button-width)] rounded-xl border [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 border"
                    >
                        {LLM_OPTIONS.map((it) => (
                            <ListboxOption
                                key={it.key}
                                value={it.key}
                                className="group flex cursor-default items-center gap-2 rounded-lg p-1 select-none data-[focus]:bg-white"
                            >
                                <div className="flex items-center gap-2 px-3 py-1">
                                    <Image width={20} height={20} src={it.icon} alt="icon" className="w-6 h-6 rounded-full" />
                                    <span>{it.label} {it.isDefault && '(default)'}</span>
                                </div>
                            </ListboxOption>

                        ))}
                    </ListboxOptions>
                </Listbox>
            </div>
        </div>
    )
}

