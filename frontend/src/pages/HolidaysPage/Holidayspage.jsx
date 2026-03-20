import styles from './Holidays.module.css'

function Holidays () {
    return (
        <section className={styles.holidays}>
            <div className={styles.holidaysContainer}>
                <h1 className={styles.holidaysTitle}>Каникулы</h1>
                <div className={styles.holidaysList}>
                    <div className={styles.holidaysItem}>
                        <h2 className={styles.holidaysItemTitle}>Зима</h2>
                        <p className={styles.holidaysItemDescription}>1 неделя</p>
                    </div>
                </div>
                <div className={styles.holidaysList}>
                    <div className={styles.holidaysItem}>
                        <h2 className={styles.holidaysItemTitle}>Новый год</h2>
                        <p className={styles.holidaysItemDescription}>10 дней</p>
                    </div>
                </div>
                <div className={styles.holidaysList}>
                    <div className={styles.holidaysItem}>
                        <h2 className={styles.holidaysItemTitle}>Весна</h2>
                        <p className={styles.holidaysItemDescription}>1 неделя</p>
                    </div>
                </div>
                <div className={styles.holidaysList}>
                    <div className={styles.holidaysItem}>
                        <h2 className={styles.holidaysItemTitle}>Лето</h2>
                        <p className={styles.holidaysItemDescription}>3 месяца</p>
                    </div>
                </div>
                <div className={styles.holidaysList}>
                    <div className={styles.holidaysItem}>
                        <h2 className={styles.holidaysItemTitle}>Осень</h2>
                        <p className={styles.holidaysItemDescription}>1 неделя</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Holidays