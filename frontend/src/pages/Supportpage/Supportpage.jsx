import styles from './support.module.css';
import { useRef } from 'react';
function Support () {
    const supportRef = useRef(null);
    const handleInput = () => {
        const el = supportRef.current;
        if(el.value === '') {
            return
        }
        else {
            el.style.height = 'auto'
            el.style.height = el.scrollHeight + 'px'
        }
        
    }
    return (
        <div>
            <section className={styles.support}>
                <div className={styles.supportContainer}>
                    <h1 className={styles.supportTitle}>Поддержка</h1>
                    <p className={styles.supportDescription}>Мы предоставляем поддержку для наших пользователей. Если у вас есть вопросы или проблемы, пожалуйста, свяжитесь с нами.</p>
                </div>
                <form className={styles.supportForm}>
                    <textarea 
                    onInput={handleInput}
                    ref={supportRef}
                    rows={1}
                    placeholder="Ваше сообщение" 
                    className={styles.supportTextarea} />
                    <button className={styles.supportButton}>Отправить</button>
                </form>
            </section>
        </div>
    )
}
export default Support;