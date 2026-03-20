// TODO: компонент модального окна
import styles from './Modal.module.css';
import closeIcon from '../../../assets/icons8-крестик-20.png';

function ClubModal({ onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Подать заявку</h2>
          <button type="button" className={styles.closeButton} onClick={onClose}>
            <img src={closeIcon} alt="Закрыть" />
          </button>
        </div>
        <div className={styles.body}>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Класс" />
          <input type="text" placeholder="Email" />
          <button className={styles.submitButton}>Подать заявку</button>
        </div>
      </div>
    </div>
  );
}

export default ClubModal;