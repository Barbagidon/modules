 function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight == document.documentElement.scrollHeight)) {
             document.querySelector(selector).click();


            }

        });
    }
    openByScroll();
