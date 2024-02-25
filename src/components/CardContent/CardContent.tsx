import { FC, memo, useCallback, useState } from 'react'
import { CardContentProps, EContentType } from '../../types/contentTypes'
import { getVideoCount } from '../../utils/getVideoCount'
import styles from './styles.module.scss'

export const CardContent: FC<CardContentProps> = memo(({
    id,
    type,
    name,
    cardImage,
    description = '',
    onClick,
    children
}) => {
    const [titleLeftContent] = useState(() =>
        type === EContentType.VIDEO
            ? <div className={styles.videoImage} />
            : <div className={styles.videoCount}>{getVideoCount(children)}</div>
    )

    const onClickCard = useCallback(() => onClick(id), [id, onClick])

    return <div className={styles.card} onClick={onClickCard}>
        <div className={styles.image}>{cardImage}</div>
        <div className={styles.content}>
            <div className={styles.titleContainer}>
                <div className={styles.titleLeftContent}>{titleLeftContent}</div>
                <div className={styles.title}>{name}</div>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    </div>
})
