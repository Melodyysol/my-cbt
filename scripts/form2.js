// Handle password visibility toggle
let users = JSON.parse(localStorage.getItem('users')) || []
document.querySelectorAll('.toggle-password').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const targetId = toggle.getAttribute('data-target');
    const input = document.getElementById(targetId);
    if (input.type === 'password') {
      input.type = 'text';
      toggle.textContent = '🙈'; // Hide icon
    } else {
      input.type = 'password';
      toggle.textContent = '👁️'; // Show icon
    }
  });
});

// Toggle between login and register forms
document.getElementById('login-toggle').addEventListener('click', () => {
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('register-form').classList.add('hidden');
  document.getElementById('login-toggle').classList.add('active');
  document.getElementById('register-toggle').classList.remove('active');
});

document.getElementById('register-toggle').addEventListener('click', () => {
  document.getElementById('register-form').classList.remove('hidden');
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-toggle').classList.add('active');
  document.getElementById('login-toggle').classList.remove('active');
});

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const errorElement = document.getElementById('login-error');

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    // Successful login, redirect to unilag.html
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'unilag.html';
  } else {
    errorElement.textContent = 'Invalid email or password';
  }
});

// Handle register form submission
document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;
  const errorElement = document.getElementById('register-error');

  if (password !== confirmPassword) {
    errorElement.textContent = 'Passwords do not match';
    return;
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    errorElement.textContent = 'Email already registered';
    return;
  }

  // Add new user
  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  // Auto login after registration
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  window.location.href = 'unilag.html';
});
