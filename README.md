# Дневник оценок

Структура проекта — фронт и бэкенд разбиты по файлам. Код пишешь сам.

## Дерево структуры

```
grades-diary/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          → Button, Input, Modal, Table, Card
│   │   │   ├── layout/      → Layout, Sidebar, Header, PageContainer
│   │   │   ├── grades/      → GradeCard, GradeInput, GradeTable, AverageBadge
│   │   │   ├── ai/          → AIAssistant, AIChatMessage, AIPromptSuggestions
│   │   │   └── teacher/     → StudentSelector, GradeEditor, CommentBlock
│   │   ├── pages/
│   │   │   ├── student/     → DashboardPage, SubjectPage, AIPage, ProfilePage
│   │   │   ├── teacher/     → TeacherDashboardPage, StudentGradesPage, ClassOverviewPage
│   │   │   └── ErrorPage
│   │   ├── services/       → api.js, aiApi.js, auth.js
│   │   ├── hooks/           → useGrades.js, useAuth.js, useAI.js
│   │   ├── context/         → AuthContext.jsx, GradesContext.jsx
│   │   ├── utils/           → average.js, formatters.js, constants.js
│   │   ├── mocks/           → grades.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── backend/
    └── src/
        ├── config/          → database.js, env.js
        ├── models/          → User, Subject, Grade, Comment, AIConversation
        ├── routes/          → auth, grades, subjects, ai, teacher
        ├── controllers/     → GradeController, TeacherController
        ├── services/        → GradeService
        └── middleware/      → cors, errorHandler, auth
```

## Запуск фронта

```bash
cd frontend
npm install
npm run dev
```

## С чего начать сегодня

1. **Подключи роуты в `App.jsx`**  
   Импортируй страницы ученика (`DashboardPage`, `SubjectPage`, `AIPage`) и пропиши для них `Route` (пути например: `/`, `/subject/:id`, `/ai`). Пока можно рендерить в каждой странице просто заголовок типа «Панель оценок» / «Предмет» / «ИИ».

2. **Сделай `Layout`**  
   В `Layout.jsx` выведи шапку (Header) и `Sidebar` с ссылками `Link` на эти страницы. В `App.jsx` оберни `Routes` в `Layout`, чтобы на всех страницах было общее меню.

3. **Добавь моки в `mocks/grades.js`**  
   Создай массив из 5–10 объектов вида `{ id, subjectName, value, date }` и экспортируй его. Потом его можно будет использовать на Dashboard и Subject без бэкенда.

4. **Функция среднего в `utils/average.js`**  
   Напиши функцию, которая принимает массив оценок (числа) и возвращает среднее. Её потом подключишь к данным из моков.

После этого у тебя будет работающая навигация, общий layout и данные для отображения на одной из страниц.
