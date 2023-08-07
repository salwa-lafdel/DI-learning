document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const registerResult = document.getElementById('registerResult');
    const loginResult = document.getElementById('loginResult');
  
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = new FormData(registerForm);
      const data = Object.fromEntries(formData);
  
      fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.text())
        .then(result => {
          registerResult.innerText = result;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = new FormData(loginForm);
      const data = Object.fromEntries(formData);
  
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.text())
        .then(result => {
          loginResult.innerText = result;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  });
  