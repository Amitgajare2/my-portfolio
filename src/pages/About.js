import React from 'react'
import "../assets/css/about.css"

function About() {

    return (
        <>
            <div className="main-container">
                <div className="boxm">
                    <div className="img-box">
                        <img src={require('../assets/images/205.jpg')} alt="" />
                        <h2>Amit Gajare</h2>
                        <div className="location">
                            <i class="ri-map-pin-fill"></i><p>Yawal, Maharashtra 425301</p>
                        </div>
                        <div className="email">
                            <i class="ri-mail-fill"></i><p> amitgajre7083@gmail.com</p>
                        </div>
                    </div>

                    <div className="box-box">
                        <div className="Professional">
                            <h2>objective</h2>
                            <p>to work with an organization where can learn new skills and increase my abilities for the
                                organizational goals as well as myself.</p>
                        </div>
                        <div className="skill">
                            <h2>Skills</h2>
                            <ul>
                                <li>Html</li>
                                <li>Css</li>
                                <li>Javascript</li>
                                <li>React js</li>
                                <li>Nodejs</li>
                                <li>Python</li>
                                <li>Django</li>
                                <li>c</li>
                                <li>C++</li>
                            </ul>
                        </div>
                        <div className="work">
                            <h2>Work Experience</h2>
                            <p>FRESHER</p>
                        </div>
                    </div>
                </div>
                <div className="res" >
                    <a className='btn' href="https://drive.google.com/drive/folders/1Dy8f1vOB1oIrW5yvRqDZ-WO-Lf6DXCeJ?usp=share_link" target="_blank" rel="noreferrer" >Resume</a>
                </div>
            </div>
        </>
    )
}

export default About;