const $ = (selector) => {
    const element = document.querySelectorAll(selector);

    const api = {
        css(styles) {
            if (styles && typeof styles === 'object') {
                element.forEach((element) => {
                    Object.assign(element.style, styles);
                });
                return api; 
            } else {
                return window.getComputedStyle(element[0]);
            }
        }, 

        click(click) {
            if (click && typeof click === 'object') {
                elem.forEach((elem) => {
                    Object.assign(elem.click, click);
                });
                return api; 
            }
        }
    };
    
    return api;
};
