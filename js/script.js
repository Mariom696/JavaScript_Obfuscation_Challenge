const dummyUser = 'root';
const dummyPass = 'root';

const part1 = atob('YWRt');
const part2 = atob('aW4=');
const validUsername = part1 + part2;

const pw1 = String.fromCharCode(97, 100);
const pw2 = String.fromCharCode(109, 105, 110);
const validPassword = pw1 + pw2;

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === validUsername && password === validPassword) {
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = 'home.html';
  } else {
    document.getElementById('login-status').innerText = 'Invalid username or password!';
    document.getElementById('login-status').style.color = 'red';
  }
});
