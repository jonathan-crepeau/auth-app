console.log('signup.js reporting for duty..');

const signupForm = document.getElementById('signup-form');

const handleClick = (event) => {
    let formIsValid = true;
    const userData = {};
    event.preventDefault();
    console.log('Submit Now button clicked!');

    const formInputs = [...signupForm.elements];
    formInputs.forEach((input) => {
        userData[input.name] = input.value;
        console.log('User Data Below:');
        console.log(userData);

        fetch('http://localhost:3003/api/v1/signup', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then((dataStream) => dataStream.json)
            .then((dataObj) => console.log(dataObj))
            .catch((error) => console.log(error));
    });
};

signupForm.addEventListener('submit', handleClick);