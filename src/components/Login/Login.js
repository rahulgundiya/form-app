import React from 'react';
import classes from './Login.module.css';

const login=()=>(

      <div className={classes.Login}>
    
    <input  type="text" placeholder="Enter email" />
    <section></section>
        <input type="text"
        placeholder="Enter-Password" />
        <div >
      <button  className={classes.Button}
       value="Log in"  style={{size:"50"}}
        >Login</button>
       <button className={classes.Register}>Register
      </button>
        </div>
        </div> 
        
		


)
export default login;