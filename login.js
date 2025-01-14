document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const predefinedPassword = "lorem"; // Your predefined password
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      // Validate inputs
      if (!email || !password) {
        Swal.fire({
          icon: 'error',
          title: 'Missing Information',
          text: 'Both email and password fields are required!',
        });
        return;
      }
  
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Email',
          text: 'Please enter a valid email address.',
        });
        return;
      }
  
      // Check password
      if (password !== predefinedPassword) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Incorrect password. Please try again!',
        });
        return;
      }
  
      // If all validations pass
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You will now be redirected!',
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        // Set session flag for login
        sessionStorage.setItem('isLoggedIn', true);
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      });
    });
  });  