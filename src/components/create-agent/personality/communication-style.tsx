import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { CommunicationStyleType } from '@/types'
import CommunicationStyleModal from './comminication-style-modal'
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
                    className="relative block w-full rounded-lg border bg-white text-left text-sm/6 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                >
                    <div className="h-10 flex items-center justify-between px-4">
                        <span>{selected?.name}</span>
                        <FaChevronDown
                            className="group pointer-events-none  size-4 fill-gray-400"
                            aria-hidden="true"
                        />
                    </div>

                </ListboxButton>
                <ListboxOptions
                    anchor="bottom"
                    transition
                    className="bg-white w-[var(--button-width)] rounded-xl border [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 border"
                >
                    {PRESETS.map((person) => (
                        <ListboxOption
                            key={person.key}
                            value={person}
                            className="group flex cursor-default items-center gap-2 rounded-lg p-1 select-none data-[focus]:bg-white"
                        >
                            <FaChevronDown className="invisible size-4 fill-white group-data-[selected]:visible" />
                            <div className="text-sm/6">{person.name}</div>
                        </ListboxOption>

                    ))}
                    <div
                        className="border-t py-2 px-7 text-sm flex items-center text-gray-600 gap-2 cursor-pointer"
                        onClick={() => setShowCommunicationStyleModal(true)}
                    >
                        <MdEdit />
                        <span>Create a custom style</span>
                    </div>
                </ListboxOptions>
            </Listbox>
            <CommunicationStyleModal isOpen={showCommunicationStyleModal} close={() => setShowCommunicationStyleModal(false)} />
        </div>

    )
}