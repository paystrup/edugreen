// Login toast for landingpage, if user is signed in greet with name
import React from 'react'

// authentication
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig.js";

export default function LoginToast() {
    // Authentication + loading states + import navigate
    const [user] = useAuthState(auth);

    // random emoji on rerender for login -> making it more personal
    // math random function choosing a random emoji inside the length of the array
    const getRandomLoginEmoji = () => {
        const emojis = ["β»", "π±", "π", "βοΈ", "π€π±", "πΈπ±", "π€π±", "π", "π€©π", "π"]
        return emojis[~~(Math.random() * emojis.length)]
    }

    // if a user is signed in greet them with their displayname (Google Name)
    return (
    <>
        {user && 
            <section className='paddingWide loginToastLanding'>
                <p className='font-bodytextBig fc-darkgreen'>Velkommen, {user.displayName}! {getRandomLoginEmoji()}</p>
            </section>
        }
    </>
    )
}
