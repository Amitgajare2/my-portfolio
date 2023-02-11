import React from 'react'
import "../assets/css/home.css"
import gitlogo from "../assets/images/gitsvg.svg"


function Home() {

    return (
        <>
            <div className="container" id="home">
                <div className="left">
                    <div className="imgbox" id="imgbox">
                        <img  alt='logo' src={require('../assets/images/202.jpg')} />
                    </div>
                    <div className="textbox">
                        <h1>Amit Gajare</h1>
                    </div>
                </div>

                <div className="right">
                    <div className="rcontainer">
                        <div className="aboutbox">
                            <h2>Bio</h2>
                            <p>I am beginner to the world of web development and i hope to learn much more and I intend to do my
                                part by sharing interesting topics, I enjoy learning new things and am always ready to face new challenges along the way.</p>
                        </div>
                        <div className="skillbox">
                            <h2>I Am Available For</h2>
                            <p>👥 together we will solve the problem, 🤪 but ask me in Hindi 🇮🇳</p>
                        </div>
                    </div>

                    <div className="rbox">
                        <img src={gitlogo} alt="rbox" />
                    </div>

                </div>
            </div>

            <div className="crosrow">
                <p>Html</p>
                <p>css</p>
                <p>javascript</p>
                <p>react</p>
                <p>nodejs</p>
                <p>django</p>
                <p>python</p>
                <p>c</p>
                <p>c++</p>
            </div>
        </>

    )
    
}

export default Home;