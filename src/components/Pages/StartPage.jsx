import React from 'react'

function StartPage() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1547638375-ebf04735d792?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHF1aXolMjBnYW1lfGVufDB8fDB8fHww)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Yeah Hello there!</h1>
      <p className="mb-5"> Welcome To our Quizz App.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    


  )
}

export default StartPage