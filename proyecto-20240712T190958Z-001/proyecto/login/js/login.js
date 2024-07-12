const loginform = document.querySelector('#loginform')
loginform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
    return alert('usuario y/o contraseña incorrectos!')
}


    alert('bienvenido')
    window.location.href = 'http://127.0.0.1:5500/inicio/wed.html'


})