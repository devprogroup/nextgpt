'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BottomNav from '@/components/create-agent/common/bottom-nav';
import { setPersonality } from '@/store/agent';
import CommunicationStyle from './communication-style';

export default function Personality() {
    const name = useSelector((state: any) => state.agent.identity.firstName);
    const personality = useSelector((state: any) => state.agent.personality);
    const dispatch = useDispatch();

    const serPersonalityValue = (key: string, value: any) => {
        dispatch(setPersonality({ [key]: value }));
    }
    const onBlacklistFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const blacklistValue = formData.get('word') as string;
        if (blacklistValue) {
            if (personality.blacklist.includes(blacklistValue)) return;
            serPersonalityValue('blacklist', [...personality.blacklist, blacklistValue]);
        }
        e.currentTarget.reset();
    };
    const removeFromBlackList = (value: string) => {
        serPersonalityValue('blacklist', personality.blacklist.filter((item: string) => item !== value));
    }

    return (
        <div>
            <div className="nextgpt__form-container">
                <div className="nextgpt__form-group">
                    <label htmlFor="target-audience" className="block">
                        Who will the agent be interacting with?
                    </label>
                    <input type="text" id="target-audience" className="nextgpt__input" />
                </div>
                <div className="nextgpt__form-group">
                    <label htmlFor="how-to-address" className="block">
                        How should the agent address the audience?
                    </label>
                    <input type="text" id="how to address" className="nextgpt__input" />
                </div>
                <div className="grid grid-cols-2">

                    <div className="flex items-center">
                        <label>Select {name}'s style of communication</label>
                    </div>
                    <CommunicationStyle />
                </div>
                <div className="nextgpt__form-group">
                    <label htmlFor="lexical-field" className="block">Lexical field</label>
                    <input type="text" id="lexical-field" placeholder="" className="nextgpt__input" />
                </div>
                <div className="nextgpt__form-group">
                    <label htmlFor="blacklist" className="block">Blacklist any words, phrases or terms your company would NEVER say</label>
                    <form onSubmit={onBlacklistFormSubmit}>
                        <input type="text" id="tone" placeholder="" className="nextgpt__input" name="word" />
                    </form>
                    <ul className="flex flex-wrap gap-2">
                        {personality.blacklist.map((it: string) => (
                            <li
                                key={it}
                                className="nextgpt__border rounded-lg nextgpt__text-muted px-2 py-1"
                            >{it}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
