import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up'); // Toggle between 'Sign Up' and 'Login'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(''); // For showing error messages
  const [loading, setLoading] = useState(false); // For disabling the button while submitting

  // Form validation
  const validateForm = () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return false;
    }

    if (state === 'Sign Up' && !name) {
      setError('Please enter your full name.');
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }

    setError('');
    return true;
  }

  // Handle form submission (Login or SignUp)
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true); // Set loading to true while awaiting API response

    const formData = { email, password, ...(state === 'Sign Up' && { name }) };

    try {
      // Simulating an API request for login or signup
      const response = await fakeApiCall(formData);

      if (response.success) {
        alert(state === 'Sign Up' ? 'Account created successfully!' : 'Logged in successfully!');
        // You can store the authentication token in localStorage or redirect the user to another page
      } else {
        setError(response.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    }

    setLoading(false);
  }

  // Simulated API call to demonstrate behavior (replace with actual API endpoint)
  const fakeApiCall = async (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'Sign Up') {
          // Simulating email check on sign-up
          if (formData.email === 'test@user.com') {
            resolve({ success: false, message: 'Email is already registered.' });
          } else {
            resolve({ success: true }); // Simulate successful sign-up
          }
        } else if (state === 'Login') {
          // Simulating login
          if (formData.email !== 'test@user.com') {
            resolve({ success: false, message: 'Email is not registered.' });
          } else if (formData.password !== 'password123') {
            resolve({ success: false, message: 'Incorrect password.' });
          } else {
            resolve({ success: true }); // Simulate successful login
          }
        }
      }, 1500); // Simulate network delay
    });
  }

  return (
    <form className="min-h-[60vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto p-6 min-w-[400px]  rounded-xl text-zinc-600 text-sm">
        <p className="text-3xl pb-4 font-semibold text-center">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Sign Up Form (Only visible when Sign Up is selected) */}
        {state === 'Sign Up' && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border-b border-t border-zinc-300 rounded w-full p-1 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}

        {/* Email Input */}
        <div className="w-full">
          <p>Email</p>
          <input
            className="border-b border-t border-zinc-300 rounded w-full p-1 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Password Input */}
        <div className="w-full">
          <p>Password</p>
          <input
            className="border-b border-t border-zinc-300 rounded w-full p-1 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {/* Submit Button */}
        <button
          className="bg-black text-white text-lg py-3 px-8 rounded-md font-medium hidden md:block w-full mt-5 active:bg-orange-500"
          onClick={onSubmitHandler}
          disabled={loading}
        >
          {loading ? 'Submitting...' : state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {/* Toggle between Login/SignUp */}
        {state === 'Sign Up' ? (
          <p className="text-lg">
            Already have an account?{' '}
            <span
              onClick={() => setState('Login')}
              className="text-blue-400 underline cursor-pointer text-lg"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-lg">
            Don't have an account?{' '}
            <span
              onClick={() => setState('Sign Up')}
              className="text-blue-400 underline cursor-pointer text-lg"
            >
              Sign up here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
