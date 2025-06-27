import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);
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
