 let matrix = '+7 (___) ___ __ __',
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            i = 0;
        if (val.length < def.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, (a) => {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;

        });
