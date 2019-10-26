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
                   <a href='https://corpeventplanner.netlify.com/'>Home</a>                   
                   <a href='https://corpeventplanner.netlify.com/about-page.html'>About Us</a>
                   <a href='#'>Contact Us</a>
                   <a href='/register'>Sign up</a>
                   <a href='/login'>Log in</a>
               </div>

           </header>

           </div>
        
    )

}

export default TheHeader;