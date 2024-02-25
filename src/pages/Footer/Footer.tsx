import { FC } from "react"
import styles from './styles.module.scss'

const currentDate = new Date()

export const Footer: FC = () => {
    return <div className={styles.footer}>
        © Все права защищены, {currentDate.getFullYear()}
    </div>
}
