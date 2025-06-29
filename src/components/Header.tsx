import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
  USER_AVATAR,
} from "../utils/constants";
import { toggleGptSeachView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGptSearch = () => {
    dispatch(toggleGptSeachView());
  };
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(e.target.value));
  };
  const user = useSelector((store: RootState) => store.user);
  const isGptpage = useSelector((store: RootState) => store.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };
  return (
    <div className=" w-screen absolute px-8 py-2 bg-gradient-to-br from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} />
      {user && (
        <div className="flex p-3">
          {isGptpage && (
            <select
              className="p-2 m-2 bg-gray-700 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((l) => (
                <option key={l.identifier} value={l.identifier}>
                  {l.language}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg text-white"
            onClick={handleGptSearch}
          >
            {isGptpage ? "Home" : "GPT Search"}
          </button>
          <img className="w-12 h-12 p-2" src={USER_AVATAR} />
          <button onClick={handleLogOut} className="text-white font-bold">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
