console.log('signup.js reporting for duty..');

const form = document.getElementById('signup-form');

const handleBtnClick = (event) => {
    event.preventDefault();
    console.log('Signup button clicked!');

    userFName = document.getElementById('first-name');
    userLName = document.getElementById('last-name');
    userEmail = document.getElementById('email');
    userPassword = document.getElementById('password');

    const newUser = {
        firstName: userFName.value,
        lastName: userLName.value,
        email: userEmail.value,
        password: userPassword.value
    };

    console.log(newUser);

    fetch('http://localhost:3003/api/v1/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

}

form.addEventListener('submit', handleBtnClick);