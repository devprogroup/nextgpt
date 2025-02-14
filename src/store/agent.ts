import { createSlice } from "@reduxjs/toolkit";
import { AgentStateType } from "../types";


const initialState: AgentStateType = {
    step: 0,
    identity: {
        firstName: '',
        lastName: '',
        role: '',
        organization: '',
        organizationDescription: '',
        llm: '',
        avatarUrl: null
    },
    task: {
        purpose: '',
        activities: '',
        type: null,
        script: null,
        collections: null
    },
    knowledge: {
        alternativeType: null,
        alternatives: [],
        alternativeDescription: '',
        parameters: [],
        topics: [],
    },
    skills: [],
    personality: {
        blacklist: [],
        communicationStyles: {
            preset: [
            { key: 'professional', name: 'Professional' },
            { key: 'friendly', name: 'Friendly' },
            { key: 'expert', name: 'Expert' },
            { key: 'conversational', name: 'Conversational' },
        ],
        custom: [
            { key: 'custom', name: 'Custom style name' }
        ]
    }
        
    }
};

const appSlice = createSlice({
    name: "agent",
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload
        },
        setIdentity: (state, action) => {
            state.identity = {
                ...state.identity,
                ...action.payload
            }
        },
        setTask: (state, action) => {
            state.task = {
                ...state.task,
                ...action.payload
            }
        },
        setKnowledge: (state, action) => {
            state.knowledge = {
                ...state.knowledge,
                ...action.payload
            }
        },
        setPersonality: (state, action) => {
            state.personality = {
                ...state.personality,
                ...action.payload
            }
        },
        setSkills: (state, action) => {
            state.skills = action.payload
        }
    }
});

export const { setStep, setIdentity, setTask, setKnowledge, setPersonality, setSkills } = appSlice.actions;
export default appSlice.reducer;
