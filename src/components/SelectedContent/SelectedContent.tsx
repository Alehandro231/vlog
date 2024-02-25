import { FC } from "react"
import { CardContentProps } from "../../types/contentTypes"

import styles from './styles.module.scss'

export const SelectedContent: FC<CardContentProps> = ({
    id,
    name,
    onClick,
}) => <div className={`${styles.container} ${styles[id]}`} onClick={() => onClick(id)}>
        <div className={styles.title}>
            {name}
        </div>
    </div>
