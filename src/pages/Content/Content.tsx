import { FC, useCallback, useMemo } from "react"
import { mainContentList } from '../../constants/mainContentList'
import { CardContent, SelectedContent, ShortContent, VideoContent } from "../../components"
import styles from './styles.module.scss'
import { StoreType } from "../../types/storeType"
import { ECardType, IContent } from "../../types/contentTypes"

interface ContentProps {
    store: StoreType
}

export const Content: FC<ContentProps> = ({ store }) => {
    const { sectionList } = store
    const onClickContent = useCallback((type: ECardType, id: string = 'home') => {
        switch(type) {
            case ECardType.PARENT:
                store.selectParentSection(id)
                break
            case ECardType.SELECTED:
                store.back()
                break
            default:
                store.selectChildrenSection(id)
        }
    }, [store])

    const onClickChildrenCard = useCallback((id: string) => onClickContent(ECardType.CHILDREN, id), [onClickContent])

    const onClickParentCard = useCallback((id: string) => onClickContent(ECardType.PARENT, id), [onClickContent])

    const onClickSelectedCard = useCallback(() => onClickContent(ECardType.SELECTED), [onClickContent])

    const content = useMemo(() => {
        if (!sectionList.length) {
            return <div className={styles.cardListContainer}>
                {mainContentList.map(content => <CardContent key={content.id} onClick={onClickChildrenCard} {...content} />)}
            </div>
        }

        const contentList: JSX.Element[] = []
        let currentList: IContent[] = mainContentList

        for (let i = 0; sectionList.length > i; i += 1) {
            const currentSectionName = sectionList[i]
            const nextSectionName = sectionList[i + 1]
            const currentSectionData = currentList.find(({ id }) => id === currentSectionName)

            if (!currentSectionData) {
                const validSectionName = sectionList[i - 1]
                onClickParentCard(validSectionName)
                break
            }

            const key = currentSectionData.id

            if (currentSectionData && nextSectionName) {
                contentList.push(
                    <ShortContent key={key} onClick={onClickParentCard} {...currentSectionData} />
                )
            }

            if (currentSectionData && !nextSectionName) {
                const children = currentSectionData.children
                    ? <div className={styles.cardListContainer}>
                        {currentSectionData.children?.map(
                            childrenContent => <CardContent key={childrenContent.id} onClick={onClickChildrenCard} {...childrenContent} />
                        ) || []}
                    </div>
                    : <VideoContent key={currentSectionData.videoLink} {...currentSectionData} />

                contentList.push(
                    <SelectedContent key={key} onClick={onClickSelectedCard} {...currentSectionData} />,
                    children
                )
            }

            currentList = currentSectionData?.children || []
        }

        return contentList
    }, [onClickChildrenCard, onClickParentCard, onClickSelectedCard, sectionList])

    return <div className={styles.content}>
        {content}
    </div>
}
