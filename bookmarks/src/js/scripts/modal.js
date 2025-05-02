export function initModal() {
  document.addEventListener('DOMContentLoaded', function () {
    // Функции для блокировки и разблокировки скролла
    const lockScroll = () => {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    };

    const unlockScroll = () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };

    // Открытие модалки
    document.querySelectorAll('.element[data-modal-id]').forEach(element => {
      element.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal-id');
        const targetModal = document.getElementById(modalId);
        if (targetModal) {
          targetModal.classList.add('open');
          lockScroll(); // Блокируем скролл при открытии модалки
        }
      });
    });

    // Закрытие модалки при нажатии на клавишу ESC
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        const openModal = document.querySelector('.modal.open');
        if (openModal) {
          openModal.classList.remove('open');
          unlockScroll(); // Возвращаем скролл
        }
        closeAllHashtags();
      }
    });

    // Открытие хэштега и изменение opacity ссылки
    const links = document.querySelectorAll('a.anchor[href^="#"]');
    const containers = document.querySelectorAll('.hashtags.content__wrapper');

    const closeAllHashtags = () => {
      containers.forEach(container => container.classList.remove('open__hashtags'));
      links.forEach(link => link.style.opacity = '');
    };

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetContainer = document.getElementById(targetId);
        if (!targetContainer || !targetContainer.classList.contains('hashtags')) return;

        const isAlreadyOpen = targetContainer.classList.contains('open__hashtags');
        closeAllHashtags();

        if (!isAlreadyOpen) {
          targetContainer.classList.add('open__hashtags');
          link.style.opacity = '1';
        }
      });
    });

    // Переменные для отслеживания жеста свайпа
    let startX = 0;
    let currentX = 0;
    let isSwiping = false;
    const threshold = 150;

    document.addEventListener("touchstart", (event) => {
      const modal = event.target.closest(".modal.open");
      if (!modal) return;
      startX = event.touches[0].clientX;
      isSwiping = true;
      modal.dataset.isSwiping = "true";
    });

    document.addEventListener("touchmove", (event) => {
      const modal = document.querySelector('.modal.open[data-is-swiping="true"]');
      if (!modal || !isSwiping) return;
      currentX = event.touches[0].clientX;

      if (startX - currentX > threshold) {
        modal.classList.remove("open");
        unlockScroll(); // Возвращаем скролл
        console.log("Модальное окно закрыто свайпом влево.");
        closeAllHashtags();
        isSwiping = false;
        delete modal.dataset.isSwiping;
      }
    });

    document.addEventListener("touchend", () => {
      const modal = document.querySelector('.modal.open[data-is-swiping="true"]');
      if (modal) {
        isSwiping = false;
        delete modal.dataset.isSwiping;
      }
    });
  });
}
