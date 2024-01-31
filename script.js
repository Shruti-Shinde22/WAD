const id = document.getElementById('id').value;
const name = document.getElementById('name').value;
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const email = document.getElementById('email').value;
const dob = document.getElementById('dob').value;
const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
const address = document.getElementById('address').value;
const city = document.getElementById('city').value;
const pincode = document.getElementById('pincode').value;
const hobby = document.getElementById('hob').value;

form.addEventListener('submit', (e) => {

    if (!validateInputs()) {
        e.preventDefault();
    }
})

form.addEventListener('submit', function (event) {
    // event.preventDefault();

    // Get form data
    const formData = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,
        dob: document.getElementById('dob').value,
        gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '',
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        pincode: document.getElementById('pincode').value,
        hobby: document.getElementById('hob').value
    };

    localStorage.setItem('userData', JSON.stringify(formData));

    // Redirect or perform other actions as needed
    // e.g., window.location.href = 'success.html';
})

function validateInputs() {
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    let success = true

    if (usernameVal === '') {
        success = false;
        setError(username, 'Username is required')
    } else {
        setSuccess(username)
    }

    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required')
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email')
    } else {
        setSuccess(email)
    }

    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required')
    } else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be atleast 8 characters long')
    } else {
        setSuccess(password)
    }

    return success;

}

//element - password, msg- pwd is reqd
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};