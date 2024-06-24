API_URL = 'http://156.35.98.159:8080/'
checkAuthentication();

function checkAuthentication() {
    console.log("auth");
    fetch(API_URL+'authenticated', {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log(response);
        if (response.ok) { 
            return response.json(); 
        } else { 
            window.location.href = 'login.html'; 
        }
    })
}

document.getElementById('logout-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    fetch(API_URL+'logOut', {
        method: 'POST', 
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'index.html';
        } 
    })
});