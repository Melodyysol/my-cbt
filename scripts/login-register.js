
let newUser = JSON.parse(localStorage.getItem('newUser')) || []
const wrapper = document.querySelector('.js-wrapper')
const register = document.querySelector('.js-register')


function swapOver(){

  document.querySelector('.js-register-link').addEventListener('click', () => {
    wrapper.classList.add('active')
    setTimeout(() => {
      let opac = 0
      while (opac <= 1) {
        opac += 0.1
        register.style.transform = 'translateX(0%)'
        register.style.transition = '0.7s ease'
        register.style.filter = 'blur(0)'
        register.style.opacity = `${opac}`
      }
    }, 2000);
  })


  document.querySelector('.js-login-link').addEventListener('click', () => {
    backToLogin()
  })
}

function backToLogin() {
  wrapper.classList.remove('active')
  setTimeout(() => {
    let opac = 1
    while (opac > 0) {
      opac -= 0.1
      register.style.transition = '.7s ease'
      register.style.transform = 'translateX(120%)'
      register.style.filter = 'blur(10px)'
      register.style.opacity = `${opac}`
      register.transitionDelay = `calc(.1s * var(--i))`
    }
  }, 500);
}

swapOver()

function errorStyle(errorCaught) {
  errorCaught.style.marginTop = '15px'
  errorCaught.style.color = 'red'
  errorCaught.style.fontWeight = 'bold'
  errorCaught.style.fontStyle = 'italic'
}

function addUser() {
  const fullname = document.querySelector('.js-full-name').value
  const email = document.querySelector('.js-email-register').value
  const password = document.querySelector('.js-password-register').value
  const errorCaught = document.querySelector('.js-used-mail')
  errorStyle(errorCaught)

  let existingUser = newUser.find(user => user.email === email)
  let username = (fullname.length <= 2);


  if(username) {
    errorCaught.innerHTML = 'Name must be three letters or more'
    setTimeout(() => {
      errorCaught.innerHTML = ''
    }, 2500);
    return;
  }
  if(existingUser) {
    errorCaught.innerHTML = 'Email has already registered'
    setTimeout(() => {
      errorCaught.innerHTML = ''
    }, 2500);
    return;
  }
  newUser.push({fullname, email, password})
  backToLogin()
  saveToStorage()

  fullname = '';
  email = '';
  password = '';
}

function saveToStorage() {
  localStorage.setItem('newUser', JSON.stringify(newUser))
}

document.querySelector('.js-sub-reg').addEventListener('click', () => {
  addUser()
})

function loginUser() {
  // not the same as the other email and password
  const email = document.querySelector('.js-email-login').value
  const password = document.querySelector('.js-password-login').value
  const errorCaught = document.querySelector('.js-error-caught')
  errorStyle(errorCaught)
  let userExists = newUser.find(user => user.email === email &&
                                        user.password === password)
                        
  if(userExists) {
    localStorage.setItem('currentUser', JSON.stringify(userExists));
    let name = userExists.fullname;
    let emailId = userExists.email;
    let passwordId = userExists.password;

    window.location.href = `index.html?fullname=${name}&&email=${emailId}&&password=${passwordId}`
    alert(`${name} You've logged in`)
    return;
  }else{
    errorCaught.innerHTML = 'Invalid password or email.'
    setTimeout(() => {
      errorCaught.innerHTML = ''
    }, 2500);
  }

  email = ''
  password = ''
}

document.querySelector('.js-sub-login').addEventListener('click', () => {
  loginUser()
})

document.querySelectorAll('.bxs-lock-alt').forEach(lock => {
  lock.addEventListener('click', () => {
    const togglePassword = document.querySelector('.js-password-login')
    const loginPassword = document.querySelector('.js-password-register')
    togglePasswordFun(togglePassword)
    togglePasswordFun(loginPassword)
  })
})

function togglePasswordFun(password) {
  if(password.type === 'password') {
  password.type = 'text'
  }else if(password.type === 'text') {
    password.type = 'password'
  }
}