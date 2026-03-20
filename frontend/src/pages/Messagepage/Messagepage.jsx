import styles from './message.module.css'

function Message ({isOpen, onClose}) {
    return (
        <section className={styles.message}>
            <div className={styles.messageContainer}>
                <div className={styles.messageHeader}>Мои сообщения</div>
                <div className={styles.messageBody}>
                    <div className={styles.messageItem}>Вы записались на олимпиаду по математике</div>
                    <div className={styles.messageItem}>Вы записались на кружок по программированию</div>
                    <div className={styles.messageItem}>Вы записались на кружок по шахматам</div>
                </div>
            </div>
        </section>
    )
}
export default Message