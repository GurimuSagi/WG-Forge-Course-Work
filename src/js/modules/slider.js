const sliders = (slides, prev, next) => {
    let slideIndex = 1;
    let paused = false;
    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }
        items.forEach((item) => {
            item.classList.add('hide-slide');
        });
        items[slideIndex - 1].classList.remove('hide-slide');
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', () => {
        plusSlides(-1);
        items[slideIndex - 1].classList.remove('slideInLeft');
        items[slideIndex - 1].classList.add('slideInRight');
    });

    nextBtn.addEventListener('click', () => {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
    });

    function activateAnimation() {
        paused = setInterval(() => {
            plusSlides(1);
        }, 2000);
    }

    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

const createSlider = (details) => {
    const slider = document.querySelector('.slider');
    function slides() {
        details.images.forEach((img) => {
            const slide = document.createElement('img');
            const prevBtn = document.querySelector('.main-prev-btn');
            slide.className = 'detail-slider';
            slide.src = `${img.image}`;
            prevBtn.insertAdjacentElement('afterend', slide);
        });
    }
    if (details.images.length>1){
        const div = `
            <img class="main-slider-btn main-prev-btn" src="../../../assets/images/sliderL.png" alt="left">
            <img class="main-slider-btn main-next-btn" src="../../../assets/images/sliderR.png" alt="right">
        `;
        slider.innerHTML = div;
    }
    slides();
    sliders('.detail-slider', '.main-prev-btn', '.main-next-btn');
};

export default createSlider;
