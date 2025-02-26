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

export interface IdentityType {
    firstName: string,
    lastName: string,
    role: string,
    organization: string,
    organizationDescription: string,
    llm: string,
    avatarUrl: string | null
}

export interface TaskType {
    purpose: string,
    activities: string,
    type: TaskTypeType,
    script: ScriptType | null,
    collections: CollectionType[] | null
}

export interface KnowledgeType {
    alternativeType: 'escalate' | 'offer_alternative' | 'other' | null,
    alternatives: KnowledgeAlternativeType[],
    alternativeDescription: string,
    parameters: string[],
    topics: TopicType[],
}
export interface PersonalityType {
blacklist: string[],
communicationStyles: {
    preset: CommunicationStyleType[],
    custom: CommunicationStyleType[]
}

}
export interface AgentStateType {
    step: number,
    identity: IdentityType | null,
    task: TaskType | null,
    knowledge: KnowledgeType | null,
    skills: SkillType[] | null,
    personality: PersonalityType | null
}

export interface StoreType {
    agent: AgentStateType
}

