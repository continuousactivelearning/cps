// Test script for authentication system
const testAuth = async () => {
    const baseUrl = 'http://localhost:3001';
    
    console.log('🧪 Testing EduVLM-Bench Authentication System...\n');

    try {
        // Test 1: Server Health Check
        console.log('1. Testing server connection...');
        const healthResponse = await fetch(`${baseUrl}/`);
        if (healthResponse.ok) {
            console.log('✅ Server is running\n');
        } else {
            throw new Error('Server not responding');
        }

        // Test 2: User Registration
        console.log('2. Testing user registration...');
        const registerData = {
            firstName: 'John',
            lastName: 'Doe',
            username: 'johndoe',
            email: 'john@example.com',
            password: 'password123'
        };

        const registerResponse = await fetch(`${baseUrl}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(registerData)
        });

        if (registerResponse.ok) {
            const registerResult = await registerResponse.json();
            console.log('✅ Registration successful');
            console.log(`   User: ${registerResult.user.firstName} ${registerResult.user.lastName}`);
            console.log(`   Email: ${registerResult.user.email}\n`);
        } else {
            const error = await registerResponse.json();
            console.log('❌ Registration failed:', error.error);
        }

        // Test 3: User Login
        console.log('3. Testing user login...');
        const loginData = {
            email: 'john@example.com',
            password: 'password123'
        };

        const loginResponse = await fetch(`${baseUrl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(loginData)
        });

        if (loginResponse.ok) {
            const loginResult = await loginResponse.json();
            console.log('✅ Login successful');
            console.log(`   Welcome: ${loginResult.user.firstName} ${loginResult.user.lastName}\n`);
        } else {
            const error = await loginResponse.json();
            console.log('❌ Login failed:', error.error);
        }

        // Test 4: Get Current User
        console.log('4. Testing authenticated user endpoint...');
        const userResponse = await fetch(`${baseUrl}/api/user`, {
            credentials: 'include'
        });

        if (userResponse.ok) {
            const userResult = await userResponse.json();
            console.log('✅ User authentication working');
            console.log(`   Current user: ${userResult.user.firstName} ${userResult.user.lastName}`);
            console.log(`   Username: @${userResult.user.username}\n`);
        } else {
            console.log('❌ User authentication failed\n');
        }

        console.log('🎉 Authentication system test completed!');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
    }
};

// Run test if script is executed directly
if (typeof window === 'undefined') {
    testAuth();
}