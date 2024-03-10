function toggleNotification(flag) {
    const notifyEl = document.querySelector('.notification');
    console.log(flag);
    if (flag) {
      console.log('step1');
  
      notifyEl.classList.add('opacityZero');
      return;
    }
    console.log('step2');
    notifyEl.classList.remove('opacityZero');
    setTimeout(() => {
      notifyEl.classList.add('opacityZero');
    }, 5000);
    return;
  }