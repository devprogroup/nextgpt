"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@/types';
import { setKnowledge } from '@/store/agent';

const AlternativeOther: React.FC = () => {
    const alternativeDescription = useSelector((state: StoreType) => state.agent.knowledge.alternativeDescription);
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setKnowledge({alternativeDescription: e.target.value}));
    };
    
    return (
        <textarea 
            className="nextgpt__input" 
            placeholder="Enter other alternative here" 
            rows={4} 
            value={alternativeDescription} 
            onChange={handleChange} 
        />
    );
};

export default AlternativeOther;