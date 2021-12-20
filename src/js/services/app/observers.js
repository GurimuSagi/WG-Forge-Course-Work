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

const config = {
    childList: true,
    subtree: true,
};
const callback = () => {
    if ((document.documentElement.clientHeight === document.documentElement.scrollHeight) || document.body.classList.contains('notScroll')) {
        document.body.style.marginRight = `${scroll}px`;
        console.log('1');
    } else {
        document.body.style.marginRight = '0px';
        console.log('2');
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
