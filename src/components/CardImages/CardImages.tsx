import { FC } from "react"

import styles from './styles.module.scss'

interface CardImagesProps {
    imageName: string
}

export const CardImages: FC<CardImagesProps> = ({
    imageName
}) => {
    return <div className={styles[imageName]} />
}
