import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev) {
        super(container, next, prev);
    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.container.appendChild(this.slides[0]);
        })

        this.prev.addEventListener('click', () => {
            let active = this.slides[this.slides.length-1];
            this.container.insertBefore(active, this.slides[0]);
        })
    }

    init(){
        console.log(this.prev, this.next, this.container);
        this.bindTriggers();
    }
}