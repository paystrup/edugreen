import { FcGoogle } from "react-icons/fc";
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

export default function Login() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  //Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      console.log("login");
    }
  }, [user]);

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
        <h2 className="font-header">Login eller opret profil</h2>

            <div className="flex auth-provideres">
            <button className="btn-login flex font-btn"
                onClick={GoogleLogin}
                
            >
                <FcGoogle className="" />
                Fortsæt med google
            </button>

            <button className="btn-login flex font-btn"
                onClick={GoogleLogin}
>
                <FcGoogle className="" />
                Fortsæt med google
            </button>

            <button className="btn-login flex font-btn"
                onClick={GoogleLogin}
                
            >
                <FcGoogle className="" />
                Fortsæt med google
            </button>
        </div>
        <div className="flex email-btn-wrapper">
            <button className="btn-large bg-darkgreen font-btn fc-white">Fortsæt med Email</button>
            
        </div>
        </div>
    </section>
  );
}