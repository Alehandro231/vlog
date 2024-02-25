import { FC } from "react"
import { CardContentProps } from "../../types/contentTypes"
import styles from './styles.module.scss'

export const ShortContent: FC<CardContentProps> = ({
    id,
    name,
    onClick,
}) => {
    return <div className={styles.container} onClick={() => onClick(id)}>{name}</div>
}
