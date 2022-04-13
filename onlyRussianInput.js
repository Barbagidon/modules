const checkTextInputs = (selector) => {
    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            if (input.value.match(/[^а-яё0-9]/)) {
                input.value = "";
                input.blur(); 
            }

        });

    });



};
