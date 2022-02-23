
        function showModalByTime(selector) {
            setTimeout(() => {
                const popup = document.querySelector(selector);
                popup.style.display = 'block';
            }, 1000);
        }

showModalByTime();
