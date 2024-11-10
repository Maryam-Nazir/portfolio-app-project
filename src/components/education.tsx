import "../style/education.css";

function Education(){
    return(
        <main className="edu-main">
           <div className="edu-text"> 
              <h1>Education</h1>
              <p>Trusted by Professionals for exceptional quality and service.
                Our clients from various industries trust us to deliver top-notch quality
                and results. Here's what they have to say about our work.
              </p>
           </div>
           {/* box 1 */}
           <div className="box-con-edu">
            <div>
                <h1 className="uni-name">Szabist University</h1>
                <span>Student</span>
            </div>
            <div className="Computer">
               <h1> Bachelor's in Computer Science</h1>
               <p>I am pursuing a Bachelor's degree in Computer Science (BSc CS), focusing on 
                  alogrithms, data structures and software engineering. I'm skilled in writing 
                  efficient code and debugging, which enhances my capability to create reliable
                  software solutions. My experience includes building applications, solving 
                  complex problems, and working on team projects.
               </p>
            </div>
           </div>
           {/* box 2 */}
           <div className="box-con-edu">
            <div>
                <h1 className="uni-name">Steps College</h1>
                <span>Student</span>
            </div>
            <div className="Computer">
               <h1> Intermediate in ICS</h1>
               <p>I completed my Intermediate in Computer Science (ICS). My coursework included
                  subjects such as Computer Science, Mathematics and Physics, which sharpened
                  my analytical skills.
               </p>
            </div>
           </div>
           {/* box 3 */}
           <div className="box-con-edu">
            <div>
                <h1 className="uni-name">Global School</h1>
                <span>Student</span>
            </div>
            <div className="Computer">
               <h1>Matriculation</h1>
               <p>I completed my matric degree with a focus on Science subjects, including
                  Physics, Chemistry and Biology.This program strengthened my understanding of
                  scientific concepts and enhanced my analytical skills through hands-on experiments
                  and collaborative projects.
               </p>
            </div>
           </div>
        </main>
     )
}
export default Education;