document.addEventListener('click', function (event) {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.left = event.clientX + 'px';
  firework.style.top = event.clientY + 'px';
  document.body.appendChild(firework);
  setTimeout(function () {
    document.body.removeChild(firework);
  }, 1000);
});