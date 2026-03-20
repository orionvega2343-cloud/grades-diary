// TODO: шапка приложения
//Создаем компонент
import styles from './Header.module.css' //Импортируем стили
import {Link} from 'react-router-dom'
function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <nav className={styles.nav}>
                   <Link to='/' className={styles.navItem}>Главная</Link>
                   <Link to='/diary' className={styles.navItem}>Дневник</Link>
                   <Link to='/agent' className={styles.navItem}>Ассистент</Link>
                   <Link to='/clubs' className={styles.navItem}>Кружки</Link>
                   <Link to='/messages' className={styles.navItem}>Сообщения</Link>
                   <Link to='/support' className={styles.navItem}>Поддержка</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
