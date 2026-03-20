@echo off
cd /d "%~dp0frontend"
if not exist "package.json" (
    echo Ошибка: папка frontend не найдена или в ней нет package.json
    pause
    exit /b 1
)
if not exist "node_modules" (
    echo Устанавливаю зависимости...
    call npm install
)
echo Запуск сервера...
call npm run dev
pause
