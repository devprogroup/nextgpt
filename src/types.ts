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

export interface DocumentType{
    name: string,
    size: string,
}

export interface TopicType {
    name: string,
    description: string,
    documents: DocumentType[],
}

export interface CollectionType {
    name: string,
    description: string,
    compulsory: boolean,
    validations: string[],
    exampleResponse: string,
}
export interface KnowledgeAlternativeType {
    method: 'whatsapp' | 'email' | 'phone',
    name: string,
    value: string,
    description: string,
}

export interface SkillType {
    name: string,
    key: string,
    description: string,
}
export interface CommunicationStyleType {
    key: string,
    name: string,
}
export interface AgentStateType{
    step: number,
    identity: {
        firstName: string,
        lastName: string,
        role: string,
        organization: string,
        organizationDescription: string,
        llm: string,
        avatarUrl: string | null
    },
    task: {
        purpose: string,
        activities: string,
        type: TaskTypeType,
        script: ScriptType | null,
        collections: CollectionType[] | null
    },
    knowledge: {
        alternativeType: 'escalate' | 'offer_alternative' | 'other' | null,
        alternatives: KnowledgeAlternativeType[],
        alternativeDescription: string,
        parameters: string[],
        topics: TopicType[],
    },
    skills: SkillType[],
    personality: {
        blacklist: string[],
        communicationStyles: {
            preset: CommunicationStyleType[],
            custom: CommunicationStyleType[]
        }
        
    }
}

export interface StoreType {
    agent: AgentStateType
}

