@echo off
setlocal enabledelayedexpansion

:: Установка качества сжатия (0-100)
set QUALITY=80

:: Папки
set IN_DIR=source
set OUT_DIR=convert

:: Обработка .jpg, .jpeg и .png в папке source
for %%F in (%IN_DIR%\*.jpg %IN_DIR%\*.jpeg %IN_DIR%\*.png) do (
    set "filename=%%~nF"
    echo Конвертация %%F ...
    cwebp -q %QUALITY% "%%F" -o "%OUT_DIR%\!filename!.webp"
    if exist "%OUT_DIR%\!filename!.webp" (
        del "%%F"
    )
)

exit
