
// Authentication JavaScript for frontend
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.isAuthenticated = false;
        this.init();
    }

    async init() {
        await this.checkAuthStatus();
        this.setupEventListeners();
        this.updateUI();
    }

    // Check if user is authenticated
    async checkAuthStatus() {
        try {
            const response = await fetch('/api/user', {
                method: 'GET',
                credentials: 'include'
            });
            console.log('Auth check response:', response.status); // Debug log
            if (response.ok) {
                const data = await response.json();
                this.currentUser = data.user;
                this.isAuthenticated = true;
                console.log('User authenticated:', { username: this.currentUser.username, isAdmin: this.currentUser.isAdmin }); // Debug log
            } else {
                this.currentUser = null;
                this.isAuthenticated = false;
                console.log('User not authenticated'); // Debug log
            }
        } catch (error) {
            console.error('Auth check failed:', error);
            this.currentUser = null;
            this.isAuthenticated = false;
        }
    }

    // Setup event listeners
    setupEventListeners() {
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        const signupForm = document.getElementById('signup-form');
        if (signupForm) {
            signupForm.addEventListener('submit', (e) => this.handleRegister(e));
        }

        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => this.handleLogout(e));
        }

        const loginBtn = document.getElementById('login-btn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.showLoginModal());
        }

        const signupBtn = document.getElementById('signup-btn');
        if (signupBtn) {
            signupBtn.addEventListener('click', () => this.showRegisterModal());
        }

        const mobileLoginBtn = document.getElementById('mobile-login-btn');
        if (mobileLoginBtn) {
            mobileLoginBtn.addEventListener('click', () => this.showLoginModal());
        }

        const mobileSignupBtn = document.getElementById('mobile-signup-btn');
        if (mobileSignupBtn) {
            mobileSignupBtn.addEventListener('click', () => this.showRegisterModal());
        }

        const closeButtons = document.querySelectorAll('.close-modal');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.closeModals());
        });

        const switchToSignup = document.getElementById('switchToSignup');
        if (switchToSignup) {
            switchToSignup.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModals();
                this.showRegisterModal();
            });
        }

        const switchToLogin = document.getElementById('switchToLogin');
        if (switchToLogin) {
            switchToLogin.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModals();
                this.showLoginModal();
            });
        }

        window.addEventListener('click', (e) => {
            const loginModal = document.getElementById('login-modal');
            const signupModal = document.getElementById('signup-modal');
            if ((loginModal && e.target === loginModal) || (signupModal && e.target === signupModal)) {
                this.closeModals();
            }
        });
    }

    // Handle login
    async handleLogin(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            this.showLoading('login-form');
            console.log('Attempting login with:', { email }); // Debug log
            
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            console.log('Login response:', response.status, data); // Debug log

            if (response.ok) {
                this.currentUser = data.user;
                this.isAuthenticated = true;
                this.closeModals();
                this.updateUI();
                this.showMessage('Login successful!', 'success');
                form.reset();
                // Refresh page to update detection UI
                window.location.reload();
            } else {
                this.showError('login-form', data.error || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            this.showError('login-form', 'Network error. Please try again.');
        } finally {
            this.hideLoading('login-form');
        }
    }

    // Handle registration
    async handleRegister(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const userData = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName')
        };

        const confirmPassword = formData.get('confirmPassword');
        if (userData.password !== confirmPassword) {
            this.showError('signup-form', 'Passwords do not match');
            return;
        }

        try {
            this.showLoading('signup-form');
            console.log('Attempting registration with:', { email: userData.email }); // Debug log
            
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            console.log('Register response:', response.status, data); // Debug log

            if (response.ok) {
                this.currentUser = data.user;
                this.isAuthenticated = true;
                this.closeModals();
                this.updateUI();
                this.showMessage('Registration successful!', 'success');
                form.reset();
                // Refresh page to update detection UI
                window.location.reload();
            } else {
                const errorMsg = data.error || (data.errors && data.errors[0]?.msg) || 'Registration failed';
                this.showError('signup-form', errorMsg);
            }
        } catch (error) {
            console.error('Registration error:', error);
            this.showError('signup-form', 'Network error. Please try again.');
        } finally {
            this.hideLoading('signup-form');
        }
    }

    // Handle logout
    async handleLogout(e) {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/logout', {
                method: 'POST',
                credentials: 'include'
            });

            if (response.ok) {
                this.currentUser = null;
                this.isAuthenticated = false;
                this.updateUI();
                this.showMessage('Logged out successfully!', 'success');
                // Refresh page to update detection UI
                window.location.reload();
            }
        } catch (error) {
            console.error('Logout error:', error);
            this.showMessage('Logout failed', 'error');
        }
    }

    // Update UI based on authentication status
    updateUI() {
        const authContainer = document.getElementById('authContainer');
        const userInfo = document.getElementById('user-info');
        const detectionContainer = document.getElementById('detection-container');
        const loginPrompt = document.getElementById('login-prompt');
        const adminNavLink = document.getElementById('admin-nav-link');
        const mobileAdminNavLink = document.getElementById('mobile-admin-nav-link');
        const footerAdminLink = document.getElementById('footer-admin-link');

        console.log('Updating UI, isAuthenticated:', this.isAuthenticated, 'isAdmin:', this.currentUser?.isAdmin); // Debug log
        if (this.isAuthenticated && this.currentUser) {
            if (authContainer) authContainer.style.display = 'none';
            if (userInfo) {
                userInfo.classList.remove('hidden');
                userInfo.innerHTML = `
                    <div class="flex items-center space-x-2">
                        <span class="bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full">${this.currentUser.firstName.charAt(0)}${this.currentUser.lastName.charAt(0)}</span>
                        <span class="text-sm font-medium">Welcome, ${this.currentUser.username}</span>
                    </div>
                    <button id="logout-btn" class="ml-2 text-sm text-academic-blue hover:underline">Logout</button>
                `;
                const logoutBtn = document.getElementById('logout-btn');
                if (logoutBtn) logoutBtn.addEventListener('click', (e) => this.handleLogout(e));
            }
            if (detectionContainer) detectionContainer.style.display = 'block';
            if (loginPrompt) loginPrompt.style.display = 'none';
            // Show admin links if user is admin
            if (this.currentUser.isAdmin) {
                if (adminNavLink) adminNavLink.classList.remove('hidden');
                if (mobileAdminNavLink) mobileAdminNavLink.classList.remove('hidden');
                if (footerAdminLink) footerAdminLink.classList.remove('hidden');
            }
        } else {
            if (authContainer) authContainer.style.display = 'flex';
            if (userInfo) userInfo.classList.add('hidden');
            if (detectionContainer) detectionContainer.style.display = 'none';
            if (loginPrompt) loginPrompt.style.display = 'block';
            // Hide admin links
            if (adminNavLink) adminNavLink.classList.add('hidden');
            if (mobileAdminNavLink) mobileAdminNavLink.classList.add('hidden');
            if (footerAdminLink) footerAdminLink.classList.add('hidden');
        }
    }

    // Show login modal
    showLoginModal() {
        const modal = document.getElementById('login-modal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    // Show register modal
    showRegisterModal() {
        const modal = document.getElementById('signup-modal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    // Close all modals
    closeModals() {
        const modals = document.querySelectorAll('.auth-modal');
        modals.forEach(modal => {
            if (modal) modal.classList.add('hidden');
        });
        document.body.style.overflow = 'auto';
        this.clearErrors();
    }

    // Show loading state
    showLoading(formId) {
        const form = document.getElementById(formId);
        if (form) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Loading...';
            }
        }
    }

    // Hide loading state
    hideLoading(formId) {
        const form = document.getElementById(formId);
        if (form) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = false;
                const isLogin = formId === 'login-form';
                submitBtn.textContent = isLogin ? 'Login' : 'Register';
            }
        }
    }

    // Show error message
    showError(formId, message) {
        const form = document.getElementById(formId);
        if (form) {
            let errorDiv = form.querySelector('.error-message');
            if (!errorDiv) {
                errorDiv = document.createElement('div');
                errorDiv.className = 'error-message text-red-500 text-sm';
                form.insertBefore(errorDiv, form.firstChild);
            }
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
    }

    // Clear errors
    clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            if (error) error.style.display = 'none';
        });
    }

    // Show success/info message
    showMessage(message, type = 'info') {
        let notification = document.getElementById('notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'notification';
            notification.className = 'notification';
            document.body.appendChild(notification);
        }
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        setTimeout(() => {
            if (notification) notification.classList.remove('show');
        }, 3000);
    }
}

// Initialize auth manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.authManager = new AuthManager();
});
