import React from 'react'
import loginHeaderImage from '../assets/images/loginHeaderImage.jpg'


export default function SplashPage() {



  return (
    <section>
    <div className="font-bely fc-white" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url(${loginHeaderImage})`,
    backgroundRepeat: 'no-repeat',
    width: '375',
    height: '812px',
    backgroundSize: "cover",
    backgroundPosition: "center",

  }}>
    <h2>Fremtidens bæredygtige markedsplads</h2>
    </div>


    </section>
  )
}
