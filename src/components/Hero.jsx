 import { useState, useEffect } from "react";
 import "../styles/Hero.css"
 
 
 export default function Hero(){

 const texts =[
    "track your goals.",
    "stay focused.",
    "manage your tasks.",
    "track internships."
  ]

  const [currentText, setCurrentText] = useState(0)

  useEffect(() => {

  const interval = setInterval(() => {

    setCurrentText((prev) =>
      (prev + 1) % texts.length
    )

  }, 2000)

  return () => clearInterval(interval)

}, [])

  return (


<section className="hero">

  <div className="hero-content">

    <div className="badge">BUILT FOR STUDENTS</div>

    <h1 className="black">Everything you need to</h1>

    <h1 className="highlight">
      {texts[currentText]}
    </h1>

    <p className="description">Velora brings your tasks, notes, career prep, and learning 
      into one clean workspace — 
      so you stop switching tabs and start making progress.
    </p>

    <div className="buttons">
      <button className="free">Start for free →</button>
     {/* <button className="demo">See a demo →</button> */} 
    </div>

    <p className="socialproof">Loved by <b>2,400+</b> students at 60+ colleges</p>
  </div>

</section>
  )
 }