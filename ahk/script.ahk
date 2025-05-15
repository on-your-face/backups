Run, C:\Program Files\Mozilla Firefox\firefox.exe
WinWait, ahk_exe firefox.exe

windows.push({exe: "firefox.exe",     x: -7,	y: 0,	w: 2574,	h: 1087})
windows.push({exe: "firefox.exe",     x: -7,	y: 0,	w: 2574,	h: 1087})

windows.push({exe: "firefox.exe",    x: -7,	y: 0,	w: 2574,	h: 1087})
windows.push({exe: "firefox.exe",     x: -7,	y: 0,	w: 2574,	h: 1087})

; firefox_style-start
>#sc1::
WinClose, ahk_exe firefox.exe
EnvGet, computerName, COMPUTERNAME
if (computerName = "nexeption-tpls") {
    userChromePath := "C:\Users\user\AppData\Roaming\Mozilla\Firefox\Profiles\b8lnxhe3.default-release\chrome\userChrome.css"
} else if (computerName = "nexeption-home") {
    userChromePath := "C:\Users\user\AppData\Roaming\Mozilla\Firefox\Profiles\2krzrnlu.default-release\chrome\userChrome.css"
} else {
    MsgBox, Неизвестное имя компьютера: %computerName%. Скрипт остановлен.
    return
}
styleBlock =
(
<style>
#TabsToolbar {
visibility: collapse !important;
}

#titlebar {
visibility: collapse !important;
}

#navigator-toolbox {
visibility: collapse !important;
}

#statuspanel {
display: none !important;
}

#tabbrowser-tabpanels {
background-color: #000000 !important;
}

#browser {
background-color: #000000 !important;
}
</style>
)

if FileExist(userChromePath) {
    FileDelete, %userChromePath%
} else {
    FileAppend, %styleBlock%, %userChromePath%
}

Sleep, 1000
Run, "C:\Program Files\Mozilla Firefox\firefox.exe"
return
; firefox_style-end

; firefox__run-begin
<#1::
IfWinExist, ahk_exe firefox.exe
WinActivate
else
Run, C:\Program Files\Mozilla Firefox\firefox.exe
return
; firefox__run-end