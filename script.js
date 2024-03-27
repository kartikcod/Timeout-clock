const clock = document.getElementById('Time-clock');
setInterval(() => {
    const D = new Date();
    clock.innerHTML = D.toLocaleTimeString();
}, 1000);