document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user p w
    const pwField = document.getElementById('user-pw');
    const userPW = pwField.value;
    //check email and pw
    if (userEmail == 'sontan@gmail.com' && userPW == 'secret') {
        window.location.href = 'banking.html';
    }
})

