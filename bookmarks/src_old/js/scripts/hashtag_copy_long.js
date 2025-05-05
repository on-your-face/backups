function initCopyLong() {
    document.querySelectorAll("a.tag[data-href]").forEach((element) => {
        element.addEventListener("click", function (event) {
            event.preventDefault();

            const dataHref = this.getAttribute("data-href");

            if (dataHref) {
                const textMap = {
                    "cmd-cd": `cd /d "C:\\on-your-face\\"`,
                    "cmd-start": `start "" "c:\\OSPanel\\Open Server Panel.exe"`,
                    "cmd-OSP-server-START": `start "" "c:\\OSPanel\\Open Server Panel.exe" /start`,
                    "cmd-OSP-server-RESTART": `start "" "c:\\OSPanel\\Open Server Panel.exe" /restart`,
                    "cmd-OSP-server-STOP": `start "" "c:\\OSPanel\\Open Server Panel.exe" /stop`,
                    "cmd-OSP-domain": `http://test-wordpress/wp-admin/`,
                    "git-clone": `git clone`,
                    "stop zapret": `sc stop WinDivert`,
                    "regedit-autorun": `HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Run`,
                    "close process (OSP promt)": `taskkill /IM "Open Server Panel.exe" /F`,
                    termux_iam_true: `git config --global --add safe.directory /storage/emulated/0/bookmarks`,
                    "cd ~/storage/shared/bookmarks": `cd ~/storage/shared/bookmarks`,
                    "termux_git-pull": `git pull origin main`,
                    "block-ghost": `<div class="element ghost"></div>`,
                    vk_name_promt_gpt: `В этом диалоге запомни задачу: сделай строку в нижнем регистре, замени все пробелы на одинарные подчёркивания, убери запятые. Название трека — справа, исполнители — слева, всё объединено в одну строку через подчёркивания. Сейчас ничего не делай, далее я буду скидывать тебе текст, с ним и будешь работать.`,
                    "directory-buttery-taskbar": `C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Cryptic Butter`,
                };

                const textToCopy = textMap[dataHref];

                if (textToCopy) {
                    const tempInput = document.createElement("textarea");
                    tempInput.style.position = "fixed";
                    tempInput.style.opacity = "0";
                    tempInput.value = textToCopy;
                    document.body.appendChild(tempInput);
                    tempInput.focus();
                    tempInput.select();

                    const success = document.execCommand("copy");
                    document.body.removeChild(tempInput);

                    if (success) {
                        console.log(`Скопирован текст для: ${dataHref}`);
                    } else {
                        console.warn("Ошибка при копировании текста");
                    }
                } else {
                    console.warn(`Нет текста для ключа: ${dataHref}`);
                }
            }
        });
    });
}
