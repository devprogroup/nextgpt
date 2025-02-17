"use client"
import React from "react";
import { FaArrowLeft } from 'react-icons/fa'
import { useSelector } from "react-redux";
import { setStep } from "@/store/agent";
import { useDispatch } from "react-redux";
import { STEPS } from "@/constants";
import { StoreType } from "@/types";

interface PropType {
    valid:boolean
}

const BottomNav: React.FC<PropType> = ({ valid }: PropType) => {
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
        <div className="flex items-center justify-between pt-6">
            {step > 0 ? (
                <button
                    className="text-gray-600 hover:text-gray-900"
                    onClick={onBack}
                >
                    <FaArrowLeft />
                </button>
            ): <span></span>}
            {step < STEPS.length - 1 ? (
                <button
                    onClick={onNext}
                    className="nextgpt__btn-dark"
                >Continue</button>
            ): <span></span>}
            
        </div>
    )
}

export default BottomNav