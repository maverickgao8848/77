document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    const auth = firebase.auth();

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                // Signed in
                var user = userCredential.user;
                alert('Login successful!');
                window.location.href = 'index.html';
                // ...
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert('Error: ' + errorMessage);
            });
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                // Signed in 
                var user = userCredential.user;
                alert('Registration successful!');
                window.location.href = 'index.html';
                // ...
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert('Error: ' + errorMessage);
                // ..
            });
    });
});
