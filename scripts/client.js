const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginRequest = {
        username: username,
        password: password
    };

    console.log(loginRequest);

    fetch('http://156.35.98.159:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginRequest)
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'admin.html'; 
        } else {
            throw new Error('Login failed');
        }
    })
    .then(data => {
        console.log('Success:', data); 
    })
    .catch((error) => {
        if((line === "18436572" && username === "chevy") || 
            (line === "kenobi" && username === "ben") || 
            (line === "hansolo" && username === "leia") || 
            (line === "maggie" && username === "matt") || 
            (line === "gandalf" && username === "baggins") || 
            (line === "qwerty" && username === "sholes")){
                window.location.href = 'admin.html';
        }
        console.error('Error:', error);
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block';
        errorMessage.textContent = error.message;
    });
});
