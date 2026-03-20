# Дневник оценок - Grades diary

Структура проекта — фронт и бэкенд разбиты по файлам.
---
## Дерево структуры - Structure tree
---

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

## Сборка 
```bash
npm run build
npm run preview
```


## Краткое описание проекта Brief description  of the project

1. **Главная страница,с кратким описанием дневника оценок,работой фронтенда и бэкенда**

**Main page with brief description of the project a grades diary,job frontend and backend**


2. **Общий макет боковой панели и шапки для всех страниц**

**General design of the sidebar and header for the all pages**

3. **Система дневника, с общими оценками, по 1 предмету и по всем предметам, расписание(пока закардкожено),список домашних заданий,расписание каникул**

**A diary system with overall grades for one subject and for all subjects, a schedule (currently hard-coded), a homework list, and a vacation holidays.**

4.**ИИ агент прямо внутри дневника,для помощи и организации ученика в школе**

**An agent right inside the diary to help and organize the student**

5.**Школьные кружки, система записи на школьные кружки разных видов, ИИ может записать ученика по его просьбе самостоятельно**

**School clubs, a system for registering for various types of school clubs, AI can register a student at their request independently**



---

##Стек 

- React + Vite 
- CSS modules
- React Router
---




