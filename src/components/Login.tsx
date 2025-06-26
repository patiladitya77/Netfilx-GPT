import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg" />
      </div>
      <div>
        <form className=" w-3/12 absolute my-36 p-12 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <p className="font-bold text-3xl py-4 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="First Name"
              className="p-2 my-2 w-full bg-gray-800 rounded-lg"
            />
          )}
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 my-2 w-full bg-gray-800 rounded-lg"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="p-2 my-2 w-full bg-gray-800 rounded-lg"
          />
          <input
            type="password"
            placeholder="Passowrd"
            className=" bg-gray-800 my-4 p-2 w-full rounded-lg"
          />
          <button className=" w-full p-2 my-4 bg-red-600 rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="m-2 cursor-pointer"
            onClick={() => setIsSignInForm(!isSignInForm)}
          >
            {isSignInForm
              ? "New to netflix? Sign up now"
              : "Already have an account? Login here"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
