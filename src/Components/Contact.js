import React,{ useContext } from 'react'
import Navbar from "./Navbar";
import ThemeContext from '../Context';
import '../App.css';
const Contact =()=>{
    const {isLight}=useContext(ThemeContext)
    return(
<>
<div className={isLight?'light':'dark'}>
<Navbar/>

<h1>Contact me at arbazshah7454@gmail.com</h1>
</div>

</>

    )
}
export default Contact;