// hashtag_copy.js
export function initCopy() {
    document.addEventListener('DOMContentLoaded', function() {
        // Находим все ссылки с классом 'copy'
        const links = document.querySelectorAll('a.copy');

        links.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();  // Отменяем стандартное поведение ссылки

                const href = link.getAttribute('href');  // Получаем значение href

                if (href) {
                    // Создаем временный элемент для копирования
                    const tempInput = document.createElement('input');
                    tempInput.value = href;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');  // Копируем в буфер обмена
                    document.body.removeChild(tempInput);  // Убираем временный элемент
                }
            });
        });
    });
}
