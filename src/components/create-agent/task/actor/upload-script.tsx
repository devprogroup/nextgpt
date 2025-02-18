"use client"
import React, {useState, useRef, useEffect} from "react"
import Upload from "@/components/create-agent/common/upload"
import { ProgressModal } from "@/components/create-agent/common/progress-modal";
import { setTask } from "@/store/agent";
import { useDispatch } from "react-redux";
import { ScriptType } from "@/types";

const SCRIPT:ScriptType = {
    name: 'Script name',
    allowFlexibility: true,
    modifiedAt: 'momoents ago',
    steps: [
        {
            name: 'ST-1.1',
            required: true,
            title: 'Present yourself',
            context: 'To introduce oneself to the user and gather the user’s name.',
            prompt: 'Hello, I’m Nestor , your online assistant. My role is to gather all your personal details for your Orange B2B order intended for businesses & professionals. Once I have everything, I’ll connect you straight away with an Orange advisor who will finalise your request with you on WhatsApp. Let’s get to know each other, what is your name?',
            skills: ['Airtable'],
        },
        {
            name: 'ST-1.2',
            required: true,
            title: 'show yourself',
            context: 'To introduce oneself to the user and gather the user’s name.',
            prompt: 'Hello, I’m Nestor , your online assistant. My role is to gather all your personal details for your Orange B2B order intended for businesses & professionals. Once I have everything, I’ll connect you straight away with an Orange advisor who will finalise your request with you on WhatsApp. Let’s get to know each other, what is your name?',
            skills: ['Airtable'],
        }
    ]
}

export default function UploadScript() {
    const [progress, setProgress] = useState<number | null>(null);
    const [completed, setCompleted] = useState<boolean>(false);
    const dispatch = useDispatch()
    const intervalRef = useRef<NodeJS.Timeout>(null)
    
    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            intervalRef.current = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress && prevProgress > 100) {
                        clearInterval(intervalRef.current!);
                        setCompleted(true)
                        return null;
                    }
                    return prevProgress ? prevProgress + 2 : 2;
                });
            }, 100);
        }
    };

    useEffect(() => {
        return () => {
            if(intervalRef.current){
                clearInterval(intervalRef.current)
            }
        }
    }, [])
    useEffect(() => {
        if(completed){
            dispatch(setTask({ script: SCRIPT }))
        }
    }, [completed])

    return (
        <div>
            <Upload
                title="Add your first script"
                subtitle="Give your agent an exact guide on how to deal with users."
            >
                <div className="flex justify-center items-center">
                    <div className="relative">
                        <button className="nextgpt__btn_primary nextgpt__btn_size_sm">Upload Script</button>
                        <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0"
                            onChange={onFileChange}
                        />
                    </div>
                </div>
            </Upload>
            <ProgressModal
                progress={progress}
                title="Converting your script"
                bannerImg="/create-agent/converting-script.png"
            >
                <div className="space-y-2 w-[440px] text-center mt-4 nextgpt__text-muted">
                    <p>{(40 * (100-(progress||0))/ 100).toFixed(0)} remaining...</p>
                    <p>{(432 * (progress||0) / 100).toFixed()} of 432 lines read</p>
                </div>
            </ProgressModal>
        </div>
    )
}