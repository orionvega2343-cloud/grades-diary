import { Link, Outlet } from 'react-router-dom'
import styles from '../DashboardPage/Dashboard.module.css'

function DiaryLayout() {
  return (
    <div>
      <header className={styles.diary}>
        <div className={styles.diaryContainer}>
          <Link to='/diary/timetable' className={styles.diaryItems}>Расписание</Link>
          <Link to='/diary/grades' className={styles.diaryItems}>Оценки</Link>
          <Link to='/diary/homework' className={styles.diaryItems}>Д/З</Link>
          <Link to='/diary/holidays' className={styles.diaryItems}>Каникулы</Link>
          
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default DiaryLayout

