"use client"

import { setStep } from "@/store/agent";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTask } from "@/store/agent";

export default function Task(){
    const dispatch = useDispatch()
    const task = useSelector((state:any)=>state.agent.task)
    const setTaskValue = (key: string, value: any) => {
        dispatch(setTask({ [key]: value }))
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
                        id="purpose"
                        className="nextgpt__input"
                        value={task.purpose}
                        onChange={(e) => setTaskValue('purpose', e.target.value)}
                    />
                </div>
        </div>
    )
}