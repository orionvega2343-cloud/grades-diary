import styles from './Diarytimetablepage.module.css'

function Timetable() {
    return (
        <section className={styles.timetable}>
                <div className={styles.timetableContainer}>
                    <div className={styles.subjecs}>
                        <div className={styles.timetableItem}>
                            <span>История</span>
                            <span className={styles.time}>8:30 - 9:10</span>
                        </div>
                    </div>
                    <div className={styles.subjecs}>
                        <div className={styles.timetableItem}>
                            <span>Английский язык</span>
                            <span className={styles.time}>9:30 - 10:10</span>
                        </div>
                    </div>
                    <div className={styles.subjecs}>
                        <div className={styles.timetableItem}>
                            <span>Алгебра</span>
                            <span className={styles.time}>10:20 - 11:00</span>
                        </div>
                    </div>
                    <div className={styles.subjecs}>
                        <div className={styles.timetableItem}>
                            <span>Литература</span>
                            <span className={styles.time}>11:20 - 12:00</span>
                        </div>
                    </div>
                    <div className={styles.subjecs}>
                        <div className={styles.timetableItem}>
                            <span>Биология</span>
                            <span className={styles.time}>12:20 - 14:00</span>
                        </div>
                    </div>
                    <div className={styles.subjecs}>
                        <div className={styles.timetableItem}>
                            <span>Информатика</span>
                            <span className={styles.time}>14:00 - 14:40</span>
                        </div>
                    </div>
                </div>
            </section>
    )


}

export default Timetable