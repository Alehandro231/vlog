export enum EContentType {
    SECTION = 'section',
    VIDEO = 'video',
}

export interface IContent {
    id: string
    type: EContentType
    name: string
    cardImage: JSX.Element
    description?: string
    children?: IContent[]
    videoLink?: string
}

export interface CardContentProps extends IContent {
    onClick: (id: string) => void
}

export enum ECardType {
    CHILDREN = 'children',
    PARENT = 'parent',
    SELECTED = 'selected',
}
