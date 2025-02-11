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
        llm: ''
    },
    task: {
        purpose: '',
        activities: '',
        type: null,
        script: null,
        collections: null
    },
    knowledge: {
        alternative: '',
        parameters: []
    },
    skills: {},
    personality: {
        blacklist: [],
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
        }
    }
});

export const { setStep, setIdentity, setTask, setKnowledge, setPersonality } = appSlice.actions;
export default appSlice.reducer;
