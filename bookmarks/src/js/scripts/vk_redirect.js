export function initVkRedirect() {
  function isMobile() {
      return /Mobi|Android/i.test(navigator.userAgent);
  }

  function handleLinkClick(e, url) {
      if (isMobile()) {
          // Открытие в приложении VK на мобильных устройствах
          const appUrl = `vk://vk.com/${url.replace('https://vk.com/', '')}`;
          window.location.href = appUrl;  // Попытка открыть ссылку в приложении VK
      } else {
          // Открытие в браузере для ПК
          window.open(url, '_blank');  // Открытие ссылки в новой вкладке
      }
      e.preventDefault();  // Предотвращаем стандартное поведение ссылки
  }

  // Находим все ссылки с классом .vk_music
  const links = document.querySelectorAll('.vk_music');

  links.forEach(link => {
      const url = link.getAttribute('href');  // Получаем URL из атрибута href
      link.addEventListener('click', function(e) {
          handleLinkClick(e, url);
      });
  });
}
