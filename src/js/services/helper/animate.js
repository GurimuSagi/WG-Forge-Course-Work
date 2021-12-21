import { shoppingButton } from './constants';

const animateItem = (target) => {
    const posX = shoppingButton.getBoundingClientRect().left;
    const posY = shoppingButton.getBoundingClientRect().top;
    const lWidth = window.innerWidth;
    let targetLeft = target.getBoundingClientRect().left;
    let targetTop = target.getBoundingClientRect().top;
    let width = target.clientWidth;
    let h = target.clientHeight;
    const w = (width / 2);
    if (lWidth > 1600) {
        h = (target.clientHeight / 1.4);
        width = target.clientWidth;
        targetLeft = target.getBoundingClientRect().left * 0.85;
        targetTop = target.getBoundingClientRect().top * 0.7;
    } else if (lWidth > 1300 && lWidth < 1600) {
        h = target.clientHeight;
        targetLeft = target.getBoundingClientRect().left * 0.7;
        targetTop = target.getBoundingClientRect().top * 0.5;
    } else if (lWidth > 1025 && lWidth < 1300) {
        h = target.clientHeight / 0.7;
        targetLeft = target.getBoundingClientRect().left * 0.7;
        targetTop = target.getBoundingClientRect().top * 0.5;
    } else if (lWidth < 1025) {
        h = target.clientHeight / 1.1;
        targetLeft = target.getBoundingClientRect().left / 1.1;
        targetTop = target.getBoundingClientRect().top / 1.4;
    }

    const animatedElement = target.cloneNode(true);
    animatedElement.setAttribute('style', `width: ${width}px; top: ${targetTop}px; left: ${targetLeft}px; transform: scale(.5)`);
    document.body.appendChild(animatedElement);

    setTimeout(() => {
        animatedElement.classList.add('item_copy');
        animatedElement.style.transform = `translate3D(${(posX - targetLeft) - w}px, ${(posY - targetTop) - h}px, 0) scale(.2)`;
    });
};

export default animateItem;
