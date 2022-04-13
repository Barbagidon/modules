const checkTextInputs = (selector) => {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if(e.key.match(/[^а-яё0-9]/)){
                e.preventDefault();

            }

        });

    });



};
