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

    if (prevBtn || nextBtn) {
        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
        });
    }

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
        if (details.images.length < 2) {
            const slide = document.createElement('img');
            const sliderBlock = document.querySelector('.slider');
            slide.className = 'detail-slider';
            slide.src = `${details.main_image}`;
            sliderBlock.appendChild(slide);
        } else {
            const div = `
                <img class="main-slider-btn main-prev-btn" src="../../../assets/sliderL.png" alt="left">
                <img class="main-slider-btn main-next-btn" src="../../../assets/sliderR.png" alt="right">
            `;
            slider.innerHTML = div;

            details.images.forEach((img) => {
                const slide = document.createElement('img');
                const sliderBlock = document.querySelector('.slider');
                slide.className = 'detail-slider';
                slide.src = `${img.image}`;
                sliderBlock.appendChild(slide);
            });
        }
    }
    slides();
    sliders('.detail-slider', '.main-prev-btn', '.main-next-btn');
};

export default createSlider;
