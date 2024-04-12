document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.container');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        localStorage.setItem('userData', JSON.stringify(formObject));

        alert('Registration successful!');

        form.reset();
    });
});
