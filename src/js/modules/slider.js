export default class Slider {
    constructor({container = null, btns = null, next = null, prev = null} = {}){
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.slideIndex = 1;
    }

    // showSlides(n){
    //     if (n > this.slides.length) {
    //         this.slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         this.slideIndex = this.slides.length;
    //     }

    //     this.slides.forEach(slide => {
    //         slide.style.display = 'none';
    //     });

    //     this.slides[this.slideIndex-1].style.display = 'block';
    // }

    // plusSlides(n){
    //     this.showSlides(this.slideIndex+=n);
    // }

    // render(){
    //     this.btns.forEach(item => {
    //         item.addEventListener('click',() => {
    //             this.plusSlides(1);
    //         })
    //     })
    //     this.showSlides(this.slideIndex);
    //     //console.log(this.container, this.slides);
    // }
}