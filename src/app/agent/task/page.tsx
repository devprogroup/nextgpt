"use client"

import { setStep } from "@/store/agent";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Task(){
    const dispatch = useDispatch()
    const task = useSelector((state:any)=>state.agent.task)
    const setTaskValue = (key: string, value: any) => {
            dispatch(setIdentity({ [key]: value }))
        }
    useEffect(()=>{
        dispatch(setStep(1))
    },[])
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                    <label htmlFor="organization" className="block">
                        What organization does your agent work at?
                    </label>
                    <input
                        id="organization"
                        className="nextgpt__input"
                        value={task.purpose}
                        onChange={(e) => setTaskValue('organization', e.target.value)}
                    />
                </div>
        </div>
    )
}