"use client"
import React, {useState, useRef, useEffect} from "react"
import Upload from "@/components/create-agent/common/upload"
import { ProgressModal } from "@/components/create-agent/common/progress-modal";
import { useDispatch } from "react-redux";
import { setTask } from "@/store/agent";
import { CollectionType } from "@/types";

const COLLECTIONS:CollectionType[] = [
    {
        name: "email",
        description: "The name of the person",
        compulsory: true,
        validations: ["email", "min:3", "max:50"],
        exampleResponse: "sample@sample.com"
    },
    {
        name: "phone",
        description: "The email of the person",
        compulsory: true,
        validations: ["phone", "min:3", "max:50"],
        exampleResponse: "112312323"
    }
]

interface PropType {
    onAddManually: () => void
}

export default function UploadCsv({onAddManually}:PropType) {
    const [progress, setProgress] = useState<number | null>(null);
    const [completed, setCompleted] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout>(null)
    const dispatch = useDispatch()

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
                dispatch(setTask({ collections: COLLECTIONS }))
            }
        }, [completed])

    return (
        <div>
            <Upload
                title="Add your first info field"
                subtitle="Drag & drop a CSV or add fields manually."
            >
                <div className="flex justify-center items-center">
                    <button className="nextgpt__agent_btn-primary" onClick={onAddManually}>Add manually</button>
                    <span className="mx-4">or</span>
                    <div className="relative">
                        <button className="nextgpt__agent_btn-secondary">Import a CSV</button>
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
                title="converting your CSV"
                bannerImg="/create-agent/converting-csv.png"
            >
                <div className="space-y-2 w-[440px] text-center mt-4 nextgpt__text-muted">
                    <p>{(40 * (100-(progress||0))/ 100).toFixed(0)} remaining...</p>
                </div>
            </ProgressModal>
        </div>
    )
}