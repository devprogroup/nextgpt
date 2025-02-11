"use client"
import React from "react"
import UploadScript from "./upload-script"
import { useSelector } from "react-redux"
import { AgentStateType, StoreType } from "@/types"
import EditScript from "./edit-script"
export default function Actor() {
    const script = useSelector((state: StoreType) => state.agent.task.script)
    return (
        <div className="nextgpt__form-group">
           
            <label htmlFor="script_upload" className="block">
                Provide a script
            </label>
            <div id="script_upload">
                {script ?  <EditScript /> : <UploadScript />}
                
            </div>
            
        </div>
    )
}