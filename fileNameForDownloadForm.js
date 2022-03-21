 upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 5 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 5) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });

    });
