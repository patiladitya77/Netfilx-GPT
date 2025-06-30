import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const dispatch = useDispatch();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    const message = validateData(
      email?.current!.value,
      password.current!.value
    );
    setErrorMessage(message);
    if (message) return;
    if (isSignInForm) {
      //signin logic

      signInWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //signup logic

      createUserWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current!.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              if (auth.currentUser) {
                const { uid, displayName, email, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                  })
                );
              }
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="fixed inset-0 -z-10">
        <img className="w-full h-full object-cover" src={LOGIN_BG} />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-2/3 md:w-3/12 absolute my-36 p-12 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
          <p className="font-bold text-3xl py-4 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-full bg-gray-800 rounded-lg"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-2 my-2 w-full bg-gray-800 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="Passowrd"
            className=" bg-gray-800 my-4 p-2 w-full rounded-lg"
          />
          <p className="text-red-400 font-bold">{errorMessage}</p>
          <button
            className=" w-full p-2 my-4 bg-red-600 rounded-lg"
            onClick={handleButtonClick}
          >
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
