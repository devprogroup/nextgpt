export type TaskTypeType = 'actor' | 'collector' | 'operator' | 'supporter' | null
export interface StepType {
    name: string,
    required: boolean,
    title: string,
    context: string,
    prompt: string,
    skills: string[],
}
export interface ScriptType {
    name: string,
    allowFlexibility: boolean,
    modifiedAt: string,
    steps: StepType[]
}

export interface CollectionType {
    name: string,
    description: string,
    compulsory: boolean,
    validations: string[],
    exampleResponse: string,
}
export interface AgentStateType{
    step: number,
    identity: {
        firstName: string,
        lastName: string,
        role: string,
        organization: string,
        organizationDescription: string,
        llm: string
    },
    task: {
        purpose: string,
        activities: string,
        type: TaskTypeType,
        script: ScriptType | null,
        collections: CollectionType[] | null
    },
    knowledge: {
        alternative: string,
        parameters: string[]
    },
    skills: {},
    personality: {
        blacklist: string[],
    }
}

export interface StoreType {
    agent: AgentStateType
}

