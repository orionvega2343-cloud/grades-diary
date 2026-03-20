import { BrowserRouter, Routes, Route } from 'react-router-dom' // Импортируем роутер
import Layout from './components/layout/Layout/Layout' // Имортируем стили
import Home from './pages/HomePage/HomePage'
import Agent from './pages/student/AIPage/AIPage'
import DiaryLayout from './pages/student/DiaryLayout/DiaryLayout'
import Timetable from './pages/DiaryTimetablePage/DiaryTimetablePage'
import Grades from './pages/student/DashboardPage/DashboardPage'
import Homework from './pages/student/Homeworkpage/Homeworkpage'
import Holidays from './pages/HolidaysPage/Holidayspage'
import Clubs from './pages/student/Clubspage/Clubs'
import Message from './pages/Messagepage/Messagepage'
import Support from './pages/Supportpage/Supportpage'

// TODO: подключи Layout и страницы, расставь Route

function App() {
  return (
    <BrowserRouter>
      {/* Создаем роутер */}
      <Layout>
        {/* Оборачиваем  в лайаут,чтобы он рендерился всегда*/}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Создаем главную */}

          {/* Дневник: layout + вложенные страницы */}
          <Route path="/diary" element={<DiaryLayout />}>
            <Route index element={<Timetable />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="grades"  element={<Grades />} />
            <Route path="homework" element={<Homework />} />
            <Route path="holidays" element={<Holidays />} />
          </Route>
          <Route path='/agent' element={<Agent />} />
          <Route path='/clubs' element={<Clubs />} />
          <Route path='/messages' element={<Message />} />
          <Route path='/support' element={<Support />} />
          
          <Route path="*" element={<div>404</div>} />
          {/* Страница с ошибкой */}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
