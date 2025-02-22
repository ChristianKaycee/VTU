function showError(message) {
    const dialogBox = document.getElementById('dialogBox');
    const dialogMessage = document.getElementById('dialogMessage');
    dialogMessage.textContent = message;
    dialogBox.classList.add('visible');
}

function closeDialog() {
    const dialogBox = document.getElementById('dialogBox');
    dialogBox.classList.remove('visible');
}
let lname = localStorage.getItem('firstname');
if (lname == null) {
    window.location.href='./register.html'
}