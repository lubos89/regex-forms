const inputs = document.querySelectorAll('input');

const patterns  = {
    phone: /^\d{9}$/,
    username: /^\w{5,12}$/i,
    password: /^[\w\.@-]{8,20}$/,
    email: /^([\w@\.-]+)@([\w-]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/
};

function validate(field, regex) {
    if(regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',(e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});