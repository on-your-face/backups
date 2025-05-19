@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

:: Установка качества сжатия (0-100)
set "QUALITY=80"

:: Папки
set "IN_DIR=source"
set "OUT_DIR=convert"

:: Создание папки для выходных файлов, если она не существует
if not exist "%OUT_DIR%" mkdir "%OUT_DIR%"

:: 1. Масштабирование изображений
for %%F in ("%IN_DIR%\*.jpg" "%IN_DIR%\*.jpeg" "%IN_DIR%\*.png") do (
    echo Масштабирование: %%F → %%F
    magick "%%F" -resize 200x200^! "%%F"
)

:: 2. Конвертация в .webp
for %%F in ("%IN_DIR%\*.jpg" "%IN_DIR%\*.jpeg" "%IN_DIR%\*.png") do (
    set "filename=%%~nF"
    echo Конвертация в webp: %%F → %OUT_DIR%\!filename!.webp
    cwebp -q %QUALITY% "%%F" -o "%OUT_DIR%\!filename!.webp"
    if exist "%OUT_DIR%\!filename!.webp" (
        del "%%F"
    )
)

echo.
echo ✅ Готово. Все изображения обработаны и сохранены в "%OUT_DIR%"
exit
