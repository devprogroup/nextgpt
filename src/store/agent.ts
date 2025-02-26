import { createSlice } from "@reduxjs/toolkit";
import { AgentStateType, IdentityType, KnowledgeType, PersonalityType, SkillType, TaskType } from "../types";

const initialState: AgentStateType = {
    step: 0,
    identity: null,
    task: null,
    knowledge: null,
    skills: null,
    personality: null
}
const validState: {
    idendity: IdentityType,
    task: TaskType,
    knowledge: KnowledgeType,
    skills: SkillType[],
    personality: PersonalityType
} = {
    idendity: {
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
    
}
const appSlice = createSlice({
    name: "agent",
    initialState,
    reducers: {
        setStep: (state, action: { payload: number }) => {
            state.step = action.payload;
            if (action.payload === 0) {
                state.identity = validState.idendity;
            } else if (action.payload === 1) {
                state.task = validState.task
            } else if (action.payload === 2) {
                state.knowledge = validState.knowledge
            } else if (action.payload === 3) {
                state.skills = validState.skills
            } else if (action.payload === 4) {
                state.personality = validState.personality
            }

        },
        setIdentity: (state, action: { payload: Partial<IdentityType> }) => {
            state.identity = {
                ...(state.identity ? state.identity : validState.idendity),
                ...action.payload
            }
        },
        setTask: (state, action: { payload: Partial<TaskType> }) => {
            state.task = {
                ...(state.task ? state.task : validState.task),
                ...action.payload
            }
        },
        setKnowledge: (state, action: { payload: Partial<KnowledgeType> }) => {
            state.knowledge = {
                ...(state.knowledge ? state.knowledge : validState.knowledge),
                ...action.payload
            }
        },
        setPersonality: (state, action: { payload: Partial<PersonalityType> }) => {
            state.personality = {
                ...(state.personality ? state.personality : validState.personality),
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
