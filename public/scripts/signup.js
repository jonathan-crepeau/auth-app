console.log('signup.js reporting for duty..');

const signupForm = document.getElementById('signup-form');

const handleClick = (event) => {
    event.preventDefault();
    console.log('Submit Now button clicked!');
}

signupForm.addEventListener('submit', handleClick);