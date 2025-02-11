import { TaskTypeType } from '@/types'
export interface TaskItemType{
    type: TaskTypeType,
    label: string,
    icon: React.ReactNode,
    title: string,
    subtitle: string,
    useCases: string[],
    maskImage: string,
    bannerComponent: React.ReactNode
}

