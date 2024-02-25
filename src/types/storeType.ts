export interface StoreType {
    sectionList: string[]
    selectParentSection: (sectionName: string) => void
    selectChildrenSection: (sectionName: string) => void
    back: () => void
}
