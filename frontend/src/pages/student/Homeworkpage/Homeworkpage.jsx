import styles from './Homework.module.css'
function Homework () {
    return (
        <section className={styles.homework}>
            <div className={styles.homeworkContainer}>
                <h1 className={styles.homeworkTitle}>Домашнее задание</h1>


                <div className={styles.homeworkList}>
                    <div className={styles.homeworkItem}>
                        <h2 className={styles.homeworkItemTitle}>История</h2>
                        <p className={styles.homeworkItemDescription}>Параграф 12</p>
                    </div>
                </div>
                <div className={styles.homeworkList}>
                    <div className={styles.homeworkItem}>
                        <h2 className={styles.homeworkItemTitle}>Алгебра</h2>
                        <p className={styles.homeworkItemDescription}>Повторить дискриминант, решить 3 задачи</p>
                    </div>
                </div>
                <div className={styles.homeworkList}>
                    <div className={styles.homeworkItem}>
                        <h2 className={styles.homeworkItemTitle}>Английский язык</h2>
                        <p className={styles.homeworkItemDescription}>Имена числительные,номера: 23,24,31</p>
                    </div>
                </div>
                <div className={styles.homeworkList}>
                    <div className={styles.homeworkItem}>
                        <h2 className={styles.homeworkItemTitle}>Литература</h2>
                        <p className={styles.homeworkItemDescription}>Повторить  "Евгений Онегин"</p>
                    </div>
                </div>
                <div className={styles.homeworkList}>
                    <div className={styles.homeworkItem}>
                        <h2 className={styles.homeworkItemTitle}>Биология</h2>
                        <p className={styles.homeworkItemDescription}>Строение клетки, 2 главы</p>
                    </div>
                </div>
                <div className={styles.homeworkList}>
                    <div className={styles.homeworkItem}>
                        <h2 className={styles.homeworkItemTitle}>Информатика</h2>
                        <p className={styles.homeworkItemDescription}>Системы счисления</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Homework