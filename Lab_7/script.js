const burgerIcon = document.getElementById('burger-icon');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-btn');

burgerIcon.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const notification = document.getElementById('notification');
    const closeBtn = document.getElementById('close-btn__window');
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
    
    closeBtn.addEventListener('click', () => {
        notification.style.display = 'none';
    });
});
