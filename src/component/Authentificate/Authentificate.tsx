import React from 'react';
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';
import Home from '../../Pages/Home/Home';
import SignUp from '../../Pages/Signup/SignUp';
import SignIn from '../../Pages/SignIn/SignIn';
import { useState } from 'react';

const Authentificate = () => {




  const { user } = useTypedSelector((state) => state.user);
  const [active, setActive] = useState("login");

  
  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="authenticate">
      <div className="auth__left">

      </div>
      <div className="auth__right">
        {active === "login" ? <SignIn /> : <SignUp />}


      </div>
    </div>
  );
};

export default Authentificate;