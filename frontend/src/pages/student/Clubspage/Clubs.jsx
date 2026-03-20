import styles from './Clubs.module.css'
import ClubModal from '../../../components/ui/Modal/Modal';
import { useState } from 'react';


function Clubs () {
    const [open, setOpen] = useState(false);
   function handleOpen() {
    setOpen(true);
    document.body.style.overflow = 'hidden';
   }
   function handleClose() {
    setOpen(false);
    document.body.style.overflow = '';
   }
    return (
        <section className={styles.clubs}>
            <div className={styles.clubsContainer}>
                <h1 className={styles.clubsTitle}>Кружки</h1>

                <div className={styles.clubsList}>
                    <div className={styles.clubsItem}>
                        <h2 className={styles.clubsItemTitle}>Шахматы</h2>
                        <p className={styles.clubsItemDescription}>Кружок по шахматам для 5-11 классов</p>
                        <button className={styles.clubsItemButton} onClick={handleOpen}>Записаться</button>
                    </div>

                    <div className={styles.clubsItem}>
                        <h2 className={styles.clubsItemTitle}>Вышивание</h2>
                        <p className={styles.clubsItemDescription}>Кружок по вышиванию для 5-7 классов</p>
                        <button className={styles.clubsItemButton} onClick={handleOpen}>Записаться</button>
                    </div>

                    <div className={styles.clubsItem}>
                        <h2 className={styles.clubsItemTitle}>Робототехника</h2>
                        <p className={styles.clubsItemDescription}>Кружок по робототехнике для 5-9 классов</p>
                        <button className={styles.clubsItemButton} onClick={handleOpen}>Записаться</button>
                    </div>

                    <div className={styles.clubsItem}>
                        <h2 className={styles.clubsItemTitle}>Футбол</h2>
                        <p className={styles.clubsItemDescription}>Футбольный кружок для 5-6 классов</p>
                        <button className={styles.clubsItemButton} onClick={handleOpen}>Записаться</button>
                    </div>

                    <div className={styles.clubsItem}>
                        <h2 className={styles.clubsItemTitle}>Программирование</h2>
                        <p className={styles.clubsItemDescription}>Введение в программирование для 5-9 классов</p>
                        <button className={styles.clubsItemButton} onClick={handleOpen}>Записаться</button>
                    </div>
                </div>
            </div>
            {open && <ClubModal onClose={handleClose} />}
        </section>
    )
}

export default Clubs