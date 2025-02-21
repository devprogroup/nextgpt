"use client"
import React from "react";
import { FaArrowLeft } from 'react-icons/fa'
import { useSelector } from "react-redux";
import { setStep } from "@/store/agent";
import { useDispatch } from "react-redux";
import { STEPS } from "@/constants";
import { StoreType } from "@/types";

interface PropType {
    valid: boolean,
    canSkip?: boolean
}

const BottomNav: React.FC<PropType> = ({ valid, canSkip = false }: PropType) => {
    const step = useSelector((state: StoreType) => state.agent.step);
    const dispatch = useDispatch();
    const onNext = () => {
        if (valid) {
            dispatch(setStep(step + 1));
        }
    }
    const onBack = () => {
        dispatch(setStep(step - 1));
    }
    return (
        <div className="flex items-center justify-between">
            {step > 0 ? (
                <button
                    className="text-gray-600 hover:text-gray-900"
                    onClick={onBack}
                >
                    <FaArrowLeft />
                </button>
            ) : <span></span>}
            <div className="flex gap-4 items-center">
                {canSkip && (
                    <button
                        onClick={onNext}
                        className="nextgpt__btn_primary nextgpt__btn_size_md"
                    >Skip & continue</button>
                )}
                {step < STEPS.length - 1 && (
                    <button
                        onClick={onNext}
                        className="nextgpt__btn_dark nextgpt__btn_size_md"
                    >Continue</button>
                )}


            </div>
        </div>
    )
}

export default BottomNav