// animation.ts
const key = document.querySelector('.key') as HTMLElement;
const keyhole = document.querySelector('.keyhole') as HTMLElement;
const ghost = document.querySelector('.ghost') as HTMLElement;

export const startAnimation = () => {
  const showKeyTimer = 5000; // время до появления ключа и замка
  let timeoutID = setTimeout(() => {
    if (key && keyhole) {
      key.style.animationPlayState = 'running';
      keyhole.style.animationPlayState = 'running';
    }

    // Активируем слежение за курсором
    window.addEventListener('mousemove', updateKeyPosition);
    keyhole.addEventListener('mouseover', grantAccess);

    clearTimeout(timeoutID);
  }, showKeyTimer);
};

const updateKeyPosition = (e: MouseEvent) => {
  const x = e.clientX;
  const y = e.clientY;
  key.style.left = `${x - 80}px`;
  key.style.top = `${y - 80}px`;
};

const grantAccess = () => {
  const heading = document.querySelector('h1');
  const paragraph = document.querySelector('p');

  if (heading) heading.textContent = '🎉 yay 🎉';
  if (paragraph) paragraph.textContent = 'access granted';

  if (key && keyhole) {
    key.style.display = 'none';
    keyhole.style.display = 'none';
  }

  window.removeEventListener('mousemove', updateKeyPosition);
  keyhole.removeEventListener('mouseover', grantAccess);
};
