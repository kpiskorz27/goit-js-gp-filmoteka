function toggleNotification(flag) {
  const notifyEl = document.getElementById('error-message');
  if (flag) {
    notifyEl.textContent = 'Search result not successful. Enter the correct movie name and try again.';
    notifyEl.classList.remove('opacityZero');
  } else {
    notifyEl.textContent = '';
    notifyEl.classList.add('opacityZero');
  }
}