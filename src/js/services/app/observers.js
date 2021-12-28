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
        document.body.classList.add('loaded_hiding');
        setTimeout(() => {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 1000);
    }
};

const scrollObserver = new MutationObserver(callback);
scrollObserver.observe(document, config);

let rdata;
let comp;
const showItems = document.querySelector('.show-items');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting === true) {
        const arr = rdata.slice(grid.children.length, grid.children.length + 20);
        comp(arr);
    }
});

const lazyLoadObserver = (renderData, component) => {
    if (rdata) {
        observer.unobserve(showItems);
    }
    rdata = renderData;
    comp = component;
    observer.observe(showItems);
};

const removeObserver = () => {
    observer.unobserve(showItems);
};

export { lazyLoadObserver, removeObserver };
