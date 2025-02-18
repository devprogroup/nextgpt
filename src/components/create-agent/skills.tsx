'use client';

import BottomNav from '@/components/create-agent/common/bottom-nav';
import React, { useState } from 'react';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, ComboboxButton } from '@headlessui/react'
import { MdEmail, MdPhone, MdSearch, MdWhatsapp } from 'react-icons/md';

import { SkillType, StoreType } from '@/types';
import { useDispatch, useSelector } from 'react-redux';
import { setSkills } from '@/store/agent';

const SKILLS: SkillType[] = [
    {
        name: 'Email',
        key: 'email',
        
        description: 'Send and receive emails'
    },
    {
        name: 'Phone',
        key: 'phone',
        description: 'Make and receive phone calls'
    },
    {
        name: 'Whatsapp',
        key: 'whatsapp',
        description: 'Send and receive whatsapp messages'
    }
]
const ICONS: { [key: string]: React.ReactNode } = {
    email: <MdEmail size={24} className="text-indigo-500" />,
    phone: <MdPhone size={24} className="text-indigo-500" />,
    whatsapp: <MdWhatsapp size={24} className="text-indigo-500" />
}
export default function Skills() {
    const [selected, setSelected] = useState<SkillType | null>(null)
    const skills = useSelector((state: StoreType) => state.agent.skills)
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')

    const filteredSkills =
        query === ''
            ? SKILLS
            : SKILLS.filter((skill) => {
                return skill.name.toLowerCase().includes(query.toLowerCase())
            })
    const onCreateSkill = (e:SkillType) => {
        dispatch(setSkills([...skills, e]))
    }
    return (
        <div>
            <div className="space-y-4">
            
                <Combobox value={selected} onChange={onCreateSkill} onClose={() => setQuery('')}>
                    <div className="relative border rounded-lg">
                        <ComboboxButton className="group absolute inset-y-0 left-0 px-2.5">
                            <MdSearch size={24} className="text-gray-500 group-hover:text-gray-400" />
                        </ComboboxButton>
                        <ComboboxInput
                            className="w-full pl-9 rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                            displayValue={(person:SkillType) => person?.name}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search over 100+ tasks agents can perform"
                        />
                    </div>

                    <ComboboxOptions
                        anchor="bottom"
                        transition
                        className="w-[var(--input-width)] [--anchor-gap:var(--spacing-2)] empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 shadow-lg rounded-lg bg-white mt-2 p-2 border"
                    >

                            {filteredSkills.map((skill) => (
                                <ComboboxOption
                                    key={skill.key}
                                    value={skill}
                                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-100"
                                >
                                    <div className="text-sm flex gap-2 items-center">

                                        {ICONS[skill.key]}
                                        <span>{skill.name}</span>
                                    </div>
                                </ComboboxOption>
                            ))}
                
                    </ComboboxOptions>
                </Combobox>
                { skills.length > 0 ? (
                    <ul className="space-y-2">
                        {skills.map((skill) => (
                            <li key={skill.key} className="py-2 px-3 gap-2 border rounded-lg flex">
                                <div className="flex items-center">{ICONS[skill.key]}</div>
                                <div>
                                    <h2>{skill.name}</h2>
                                    <p className="text-sm text-gray-500">{skill.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="nextgpt__agent_border border-dashed py-6 rounded-md text-center">
                        <p className="text-center font-semibold">Add your first skill</p>
                        <p className="nextgpt__text-color_sub mb-6">Give your agent more context and resource to handle tasks.</p>
                        <button className="nextgpt__btn_primary">Create skill</button>
                    </div>    
                )}
                
            </div>
        </div>
    );
};

