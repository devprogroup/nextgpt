import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { CommunicationStyleType } from '@/types'
import CommunicationStyleModal from './comminication-style-modal'
import { BsChevronDown } from 'react-icons/bs'
import { MagicEditIcon } from '../svg'
const PRESETS: CommunicationStyleType[] = [
    { key: 'professional', name: 'Professional' },
    { key: 'friendly', name: 'Friendly' },
    { key: 'expert', name: 'Expert' },
    { key: 'conversational', name: 'Conversational' },
    { key: 'custom', name: 'Custom style name' }
]

export default function CommunicationStyle() {
    const [selected, setSelected] = useState<CommunicationStyleType | null>(null)
    const [showCommunicationStyleModal, setShowCommunicationStyleModal] = useState(true)
    return (
        <div>
            <Listbox value={selected} onChange={setSelected}>
                <ListboxButton
                    className="nextgpt__dropdown-header w-full px-[6px]"
                >
                    <span className="px-1">{selected?.name}</span>
                    <BsChevronDown
                        className="group pointer-events-none  size-4 fill-gray-400"
                        aria-hidden="true"
                    />
                </ListboxButton>
                <ListboxOptions
                    anchor="bottom"
                    transition
                    className="bg-white w-[var(--button-width)] nextgpt__dropdown-container p-1"
                >
                    {PRESETS.map((person) => (
                        <ListboxOption
                            key={person.key}
                            value={person}
                            className="group flex cursor-default items-center gap-2 rounded-lg nextgpt__dropdown-item px-2 py-[7px]"
                        >
                            <div className="text-sm/6">{person.name}</div>
                        </ListboxOption>

                    ))}
                    <div
                        className="border-t py-2 px-[6px] text-sm flex items-center text-gray-600 cursor-pointer"
                        onClick={() => setShowCommunicationStyleModal(true)}
                    >
                        <MagicEditIcon />
                        <span className="ml-2">Create a custom style</span>
                    </div>
                </ListboxOptions>
            </Listbox>
            <CommunicationStyleModal isOpen={showCommunicationStyleModal} close={() => setShowCommunicationStyleModal(false)} />
        </div>

    )
}