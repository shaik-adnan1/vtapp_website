import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import "./signin.component.css";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div className='section signIn_section'>
      <h1 className='sigin_head'>Sign In page</h1>

      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
};

export default SignIn;
