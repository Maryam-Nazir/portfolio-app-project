import "../style/hero.css";
import "..//style/about.css"
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function About (){
    return(
        <div className="header-container">
            <div className="header-boxes-container">
                {/* left */}
                <div>
                   <img src={"images/maryam.jpg"}
                   width={200}
                   height={200}
                   className="header-image"
                   alt="profile"/>
                   <div className="social-icon">
                    <Link href={""}> <FaYoutube className="s-icon1"/></Link>
                    <Link href={""}><FaFacebook className="s-icon2"/></Link>
                    <Link href={""}><FaInstagram className="s-icon3"/></Link>
                   </div>
                 </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About us</h1>
                    <p className="des-hero">I'm a full stack developer dedicated to creating
                                            cutting-edge web applications that are both functional
                                            and visually appealing.I have experience in both
                                            front-end and back-end technologies, allowing me 
                                            to build complete solution from start to finish.
                                            My skills include working with various programming
                                            langauages and frameworks, enabling me to deliever
                                            high quality projects that meet user needs.</p>
                </div>
            </div>
        </div>
    )
}
export default About;