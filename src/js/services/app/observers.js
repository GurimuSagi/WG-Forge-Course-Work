const calcScroll = () => {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
};

const scroll = calcScroll();
const grid = document.querySelector('.grid');
const config = {
    childList: true,
    subtree: true,
};
const callback = () => {
    if ((document.documentElement.clientHeight === document.documentElement.scrollHeight) || document.body.classList.contains('notScroll')) {
        document.body.style.marginRight = `${scroll}px`;
    } else {
        document.body.style.marginRight = '0px';
    }
    if (grid.children.length > 0 && !document.body.classList.contains('loaded')) {
        // console.log('1111');
        document.body.classList.add('loaded_hiding');
        setTimeout(() => {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 1000);
    }
};

const scrollObserver = new MutationObserver(callback);
scrollObserver.observe(document, config);

const IntersectObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('load-img');
            entry.target.src = entry.target.dataset.src;
            obs.unobserve(entry.target);
        }
    });
});

export default IntersectObserver;
