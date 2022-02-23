const modals = () => {
    function modalContent(trigger, item, closeTriggerSelector, closeBackSelector) {

        const btn = document.querySelectorAll(trigger),
            pop = document.querySelector(item),
            close = document.querySelectorAll(closeTriggerSelector),
            closeBack = document.querySelectorAll(closeBackSelector),
            activeClass = 'show',
            hideClass = 'hide',
            scroll = hideScroll();

        function showContent() {
            pop.classList.add(activeClass);
            pop.classList.remove(hideClass);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }


        function hideContent() {
            pop.classList.remove(activeClass);
            pop.classList.add(hideClass);
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }

        function showHideContent(trigger, func) {
            trigger.forEach(item => {
                item.addEventListener('click', (e) => {
                    func();
                });
            });
        }
        showHideContent(btn, showContent);
        showHideContent(close, hideContent);
        showHideContent(closeBack, hideContent);

        function hideScroll() {
            const div = document.createElement('div');
            document.body.append(div);
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
            const result = div.offsetWidth - div.clientWidth;
            return result;
        }





        // document.body.addEventListener('click', (e) => {
        //     console.log(e.target);

        // });

    }

    modalContent('.button-design', '.popup-design', '.popup-close', '.popup-design');
    modalContent('.button-consultation', '.popup-consultation', '.popup-close', '.popup-consultation');

};




export default modals;