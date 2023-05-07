import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

const UseAuth = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [load, setLoad] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLoad(false);
      } else {
        setCurrentUser(null);
        setLoad(false);
      }
    });
  });
  return {
    currentUser,
    load
  };
};
export default UseAuth;
