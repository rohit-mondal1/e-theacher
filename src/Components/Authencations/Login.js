import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full max-w-md p-8 mx-auto my-6 shadow-lg shadow-blue-500/50  space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center">Log in</h1>
      <form className="space-y-6 ng-untouched ng-pristine ng-valid">
        <div className="space-y-1 text-sm">
          <label for="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            type="text"
            name="name"
            id="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
          <div className="flex justify-end text-xs dark:text-gray-400">
            <button type="Link"> Forgot Password?</button>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400">
          Log in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button aria-label="Log in with Google" className="p-3 rounded-sm">
          google
        </button>
        <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
          google
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          to="/signup"
          rel="noopener noreferrer"
          className="underline dark:text-gray-100"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;