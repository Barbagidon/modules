  const swiperPrev = document.querySelector('.articles__prev-button');
        const swiperNext = document.querySelector('.articles__next-button');

        swiperPrev.addEventListener('click', () => {
            aboutSlider.slidePrev();
        });
        swiperNext.addEventListener('click', () => {
            aboutSlider.slideNext();
        });
