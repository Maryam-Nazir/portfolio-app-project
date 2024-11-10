import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { GiGamepad } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { LuMonitorSpeaker } from "react-icons/lu";

function Services (){
    return (
        <main className="main">
            <div className="ser-container">
                {/* top div */}
             <div className="top-div-ser">
                <h2 className="title-ser">My Services</h2>
                <p className="des-ser">As a full stack developer, I offer a comprehensive range
                   of services that cover both front-end and back-end development.
                   Additionally, I provide services in deployment and maintenance,
                   ensuring that applications are optimized and scalable.
                 </p>
              </div>
                {/* bottom div */}
                <div className="boxes-con">
                    <div className="box">
                        <FaLaptopCode className="ser-icon"/>
                        <h3>Web Development</h3>
                        <span> Blog, E-Commerce</span>
                    </div>

                    <div className="box">
                        <GiSoundOn className="ser-icon"/>
                        <h3>Sound On</h3>
                        <span> Background Sound, Music</span>
                    </div>

                    <div className="box">
                        <GiGamepad className="ser-icon"/>
                        <h3>Game Design</h3>
                        <span> Character Design, Props and Objects</span>
                    </div>

                    <div className="box">
                        <FaCameraRetro className="ser-icon"/>
                        <h3>Photography</h3>
                        <span> Portrait, Product Photography</span>
                    </div>

                    <div className="box">
                        <RiComputerFill className="ser-icon"/>
                        <h3>UI/UX Design</h3>
                        <span> Mobile Apps, Website Design</span>
                    </div>

                     <div className="box">
                        <LuMonitorSpeaker className="ser-icon"/>
                        <h3>Monitor Speaker</h3>
                        <span> Sound Production, Frequency Range</span>
                    </div>
           </div>
      </div>
   </main>
 )
}
export default Services;