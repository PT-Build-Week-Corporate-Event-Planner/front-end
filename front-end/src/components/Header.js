import React from 'react';


function TheHeader() {

    return (
        
        <div>
        <section class='banner'>
          
           <div class='banner-container'>
          
           <h1>Corporate Event Planner</h1>
          
           <p>Events with intelligence. Handling the stress so your event is a success!</p>
               
          
           </div>
       
       </section>
        
        
        
        <header className='nav-container'>
               
               <div class='head-logo'>
               
               <h2> Corp E - Planner</h2>
               
               </div>
               
               <div className='navbar'>
                   <Link to ={'https://corpeventplanner.netlify.com/'}>Home</Link>
                   <Link to ={'https://corpeventplanner.netlify.com/about-page.html'}>About Us</Link>
                   <Link to= {'/'}>Contact Us</Link>
                   <Link to ={'/register'}>Sign up</Link>
                   <Link to ={'/login'}>log in</Link>
               </div>

           </header>

           </div>
        
    )

}

export default TheHeader;
