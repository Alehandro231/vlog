import { FC } from "react"
import { Link } from "../../components"
import { StoreType } from "../../types/storeType"
import styles from './styles.module.scss'

const youTubeChanelLink = 'https://www.youtube.com/@chewed2024'
const vkLink = 'https://vk.com/id211055124'
const instaLink = 'https://www.instagram.com/chewed2024?igsh=ZzB5dWowd2owOHV0'

interface HeaderProps {
    store: StoreType
}

export const Header: FC<HeaderProps> = ({ store }) => {
    return (
        <div className={styles.header}>
            <div className={styles.headerFon} onClick={() => store.selectParentSection('home')} />
            <div className={styles.contentContainer}>
                <div className={styles.avatar_and_content_container}>
                    <div className={styles.avatar} onClick={() => store.selectParentSection('home')} />
                    <div className={styles.content}>
                        <div className={styles.title}>Пережеванно</div>
                        <div className={styles.description}>
                            <div>Простыми словами о сложных вещах</div>
                            <div>Фишки в сфере IT</div>
                            <div>Польза IT в жизни людей</div>
                            <div>Математические особенности</div>
                            <div>Всякие прикольности из жизни</div>
                        </div>
                    </div>
                </div>
                <div className={styles.socialContainer}>
                    <div className={styles.socialItemContainer}>
                        <div className={`${styles.social} ${styles.youtube}`} />
                        <Link href={youTubeChanelLink}>www.youtube.com/@chewed2024</Link>
                    </div>
                    <div className={styles.socialItemContainer}>
                        <div className={`${styles.social} ${styles.vk}`} />
                        <Link href={vkLink}>Алексей Ефимович</Link>
                    </div>
                    <div className={styles.socialItemContainer}>
                        <div className={`${styles.social} ${styles.instagram}`} />
                        <Link href={instaLink}>@chewed2024</Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 
