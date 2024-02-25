import { FC } from "react"
import { IContent } from "../../types/contentTypes"
import styles from './styles.module.scss'

export const VideoContent: FC<IContent> = ({
    name,
    videoLink
}) => {
    const src = `https://www.youtube.com/embed/${videoLink}`

    return <div className={styles.container}>
        <iframe
            width="560px"
            height="315px"
            src={src}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            >    
        </iframe>
    </div>
}