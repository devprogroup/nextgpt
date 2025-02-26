"use client"
import React, {useState} from "react"
import { useSelector } from "react-redux"
import { StoreType } from "@/types"

import { Circuit, HeadPhone, Listing, Notebook } from "../../svg"
import ScriptModal from "./script-modal"

export default function EditScript() {
    const script = useSelector((state: StoreType) => state.agent.task?.script)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
    return script ? (
        <div>
            <div className="nextgpt__agent_border rounded-lg py-2 px-4 flex cursor-pointer" onClick={()=>{setIsModalOpen(true)}}>
                <Circuit fill="#FF6A25" />
                <div className="ml-2">
                    <label>{script.name}</label>
                    <p className="text-sm nextgpt__text-muted">laset edited {script.modifiedAt}</p>
                </div>
            </div>
            <label className="flex items-center mt-4">
                <input type="checkbox" className="mr-2 accent-gray-500 rounded-lg" />
                <span className="">Allow flexibility around the script</span>
            </label>
            <ScriptModal isOpen={isModalOpen} close={()=>{setIsModalOpen(false)}} />
        </div>
    ) : null
}