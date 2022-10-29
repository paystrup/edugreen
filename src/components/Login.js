import { FcGoogle } from "react-icons/fc";
import { SiFacebook, SiApple } from "react-icons/si";
import {
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { auth } from "../firebaseConfig.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/App.css';
import '../css/designsystem.css';
import loginHeaderImage from '../assets/images/loginHeaderImage.jpg'
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  // get user states from authentication
  const [user, loading] = useAuthState(auth);
  
  // Sign in and auth with Google
  const googleProvider = new GoogleAuthProvider();

  // sign in with popup from the firebase authenticator api
  // then navigate user to login
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // check if user is signed in, if user signs in navigate to our homepage path /
  // dependency array listens for user and rerenders when a new user is logged in
  useEffect(() => {
    if (user) {
      navigate("/");
      toast("Du er nu logget ind", { type: "success" });
    } else {
      console.log("login");
    }
  }, [user, navigate]);

  return (
    <section className="loginSection">

        <div className="loginHeader"
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url("${loginHeaderImage}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >

        </div>
        <div className="login-wrapper paddingWide">
              <h2 className="font-header ">Login eller opret profil</h2>
              <div className="flex auth-provideres loginIcons">
                  <button className="btn-login flex align-center font-btn"
                      onClick={GoogleLogin}
                  >
                      <FcGoogle className="" />
                      Fortsæt med Google
                  </button>

                  <button className="btn-login flex font-btn align-center facebookLogin"
                      onClick={GoogleLogin}
                  >
                      <SiFacebook className="" />
                      Fortsæt med Facebook
                  </button>

                  <button className="btn-login flex align-center font-btn"
                      onClick={GoogleLogin}    
                  >
                      <SiApple className="" />
                      Fortsæt med Apple
                  </button>
              </div>
              <div className="flex align-center flexCol">
                  <button className="btn-largeFixed bg-darkgreen font-btn fc-white ">Fortsæt med Email</button>
                  <button className="font-bodytext btnContinue" onClick={() => navigate("/")}>Gå til forsiden</button>
              </div>
            </div>
    </section>
  );
}