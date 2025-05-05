export function initAnother() {
    // Открываем модальное окно
    document.querySelectorAll("[data-modal-id]").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const modalId = trigger.dataset.modalId;
            const modalContainer = document.getElementById(modalId);

            if (modalContainer) {
                const modalParent = modalContainer.closest(".modal");
                if (modalParent) {
                    modalParent.classList.add("modal--opened");
                    modalParent.style.pointerEvents = "auto";
                }
            }
        });
    });

    // Закрытие модалок по Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            document.querySelectorAll(".modal--opened").forEach((modal) => {
                modal.classList.remove("modal--opened");
                modal.style.pointerEvents = "none";
            });
        }
    });

    // Свайп для закрытия модалки
    let startX = 0;
    let currentX = 0;
    let isSwiping = false;
    const threshold = 150;

    document.addEventListener("touchstart", (event) => {
        const modal = event.target.closest(".modal.modal--opened");
        if (!modal) return;

        startX = event.touches[0].clientX;
        isSwiping = true;
        modal.dataset.isSwiping = "true";
    });

    document.addEventListener("touchmove", (event) => {
        const modal = document.querySelector('.modal.modal--opened[data-is-swiping="true"]');
        if (!modal || !isSwiping) return;

        currentX = event.touches[0].clientX;

        if (startX - currentX > threshold) {
            modal.classList.remove("modal--opened");
            modal.style.pointerEvents = "none";
            console.log("Модальное окно закрыто свайпом влево.");
            isSwiping = false;
            delete modal.dataset.isSwiping;
        }
    });

    document.addEventListener("touchend", () => {
        const modal = document.querySelector('.modal.modal--opened[data-is-swiping="true"]');
        if (modal) {
            isSwiping = false;
            delete modal.dataset.isSwiping;
        }
    });

    // Копирование хэштегов
    document.querySelectorAll(".hashtag").forEach((element) => {
        element.addEventListener("click", function (event) {
            event.preventDefault();

            const tempInput = document.createElement("input");
            tempInput.value = this.getAttribute("href");
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        });
    });

    // Прокрутка к якорю
    document.querySelectorAll(".hashtag.anchor").forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });

    // Копирование длинных текстов
    document.querySelectorAll("a[data-href]").forEach((element) => {
        element.addEventListener("click", function (event) {
            event.preventDefault();

            const dataHref = this.getAttribute("data-href");
            if (dataHref) {
                const textMap = {
                    "ahk-run": `Во-первых, вот команды для работы с рабочими столами:

; VD.getCurrentDesktopNum()
... (и так далее, весь текст)

return`,

                    "new-text": `Это новый текст, который будет скопирован при клике на ссылку с data-href="new-text". 
Ты можешь вставить сюда любой текст, который должен быть скопирован.`,
                };

                const textToCopy = textMap[dataHref];

                if (textToCopy) {
                    const tempInput = document.createElement("textarea");
                    tempInput.value = textToCopy;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand("copy");
                    document.body.removeChild(tempInput);
                }
            }
        });
    });
}
