import "../style/hero.css";

function Hero (){
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
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">I'm Maryam Nazir  
                        Full-stack Developer</h1>
                    <p className="des-hero">I'm a full stack developer dedicated to creating
                                            cutting-edge web applications that are both functional
                                            and visually appealing.I have experience in both
                                            front-end and back-end technologies, allowing me 
                                            to build complete solution from start to finish.
                                            My skills include working with various programming
                                            langauages and frameworks, enabling me to deliever
                                            high quality projects that meet user needs.</p>
                    <button className="hero-btn">HIRE ME</button>
                </div>
            </div>
        </div>
    )
}
export default Hero;