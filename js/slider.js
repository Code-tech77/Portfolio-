document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    // Clone first few slides and append to end for seamless loop
    for (let i = 0; i < 5; i++) {
        const clone = slides[i].cloneNode(true);
        slider.appendChild(clone);
    }
}); 