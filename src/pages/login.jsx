import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up'); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false); 


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

  
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const formData = { email, password, ...(state === 'Sign Up' && { name }) };

    try {
      
      const response = await fakeApiCall(formData);

      if (response.success) {
        alert(state === 'Sign Up' ? 'Account created successfully!' : 'Logged in successfully!');
        
      } else {
        setError(response.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    }

    setLoading(false);
  }

  
  const fakeApiCall = async (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'Sign Up') {
          
          if (formData.email === 'test@user.com') {
            resolve({ success: false, message: 'Email is already registered.' });
          } else {
            resolve({ success: true }); 
          }
        } else if (state === 'Login') {
          
          if (formData.email !== 'test@user.com') {
            resolve({ success: false, message: 'Email is not registered.' });
          } else if (formData.password !== 'password123') {
            resolve({ success: false, message: 'Incorrect password.' });
          } else {
            resolve({ success: true }); 
          }
        }
      }, 1500); 
    });
  }

  return (
    <form className="min-h-[60vh] flex items-center pt-4 sm:pt-10 md:pt-8 lg:pt-10 ">
      <div className="flex flex-col gap-3 m-auto p-6 min-w-[250px] sm:min-w-[330px] md:min-w-[390px] lg:min-w-[420px]  rounded-xl text-zinc-600 text-sm shadow-md shadow-indigo-800">
        <p className="text-2xl sm:lg:text-2xl md:text-3xl lg:text-3xl pb-4 font-semibold text-center">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>

      
        {error && <p className="text-red-500 text-center">{error}</p>}

        {state === 'Sign Up' && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border-b border border-zinc-700 rounded w-full p-1 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}

      
        <div className="w-full">
          <p>Email</p>
          <input
            className="border-b border border-zinc-700 rounded w-full p-1 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

  
        <div className="w-full">
          <p>Password</p>
          <input
            className="border-b border border-zinc-700 rounded w-full p-1 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

      
        <button
          className="bg-black text-white text-lg py-3 px-8 rounded-md font-medium  md:block w-full mt-5 active:bg-orange-500"
          onClick={onSubmitHandler}
          disabled={loading}
        >
          {loading ? 'Submitting...' : state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        
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
