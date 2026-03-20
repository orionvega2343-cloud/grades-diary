import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.module.css' //Импортируем стили
//Иморт CSS модуля возвращает объект, ключи имена классов,мы сгенерировали имена классов для опредленного компонента,чтобы не применять их ко все странице!
// TODO: общий layout (шапка + контент)
//Размечаем Layout
function Layout({ children ,}) {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <Header />
            </header>
            <div className={styles.body}>
                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
                <main className={styles.main}>
                    {children}
                </main>
            </div>

        </div>


    )
}

export default Layout