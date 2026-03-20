// TODO: боковое меню навигации
import styles from './Sidebar.module.css' //Импортируем стили
import { useState } from 'react'
import ArrowIcon from '../../../assets/free-icon-right-arrow-271228.png' //Импортиируем картинку
import { Link } from 'react-router-dom'
function Sidebar() {
  const [open, setOpen] = useState(false) //Создаем состояние

  function onClick() { //Меняем состояние
    setOpen(!open)
  }

  return (
    <section className={`${styles.sidebar} ${open ? styles.isOpen : styles.onClose}`}> 
     {/* Проверяем,если состояние истина,выдвигаем сайдбар,еслиии ложно,задвигаем */}
      <button className={styles.sidebarBtn} onClick={onClick}>
        {/*Кнопка срабатывает на клик */}
        <img src={ArrowIcon} alt="Открыть меню" className={open ? styles.rotated : ''} />
         {/* Если состояние сайдбрара истина, добавляем класс к картинке*/}
      </button>
      <div className={styles.sidebarContent}>
        <nav className={styles.sidebarNav}>
          <div className={styles.sidebarItem}>Уч.Материалы</div>
          <div className={styles.sidebarItem}>Доп.образование</div>
          <Link to='/diary/timetable' className={styles.sidebarItem}>Расписание</Link>
          <div className={styles.sidebarItem}>Олимпиады</div>
          <div className={styles.sidebarItem}>Профиль</div>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar

