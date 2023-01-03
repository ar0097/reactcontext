import React,{useContext} from "react";
import ThemeContext from "../Context";
import Navbar from "./Navbar";
import '../App.css';

const Home=()=>{
    const {isLight}=useContext(ThemeContext)
    return(
<>
<div className={isLight?'light':'dark'}>
<Navbar/>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit impedit id dolor vitae, voluptate optio a, earum eum quam accusantium, nam consequuntur quibusdam nulla consectetur expedita magni aliquam. Quos, ducimus?S Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit impedit id dolor vitae, voluptate optio a, earum eum quam accusantium, nam consequuntur quibusdam nulla consectetur expedita magni aliquam. Quos, ducimus?S</p>

</div>

</>

    )
}
export default Home;