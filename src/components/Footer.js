import React from 'react';
import "../assets/css/footer.css";
import dino from '../assets/images/dino.gif';

function Footer() {
    return (
        <>
            <div className="dino-game">
                <img src={dino} alt="dino" />
            </div>
            <div class="foot">
                <div class="footer">
                    <p>You can contact me via mail <b>amitgajre7083@gmail.com</b> or message me on any social media account</p>
                </div>
                <div class="social-box">
                    <a href="https://www.instagram.com/amitgajare_/" target="_blank" ><i class="ri-instagram-fill"></i></a>
                    <a href="https://twitter.com/AmitGajare4" target="_blank" ><i class="ri-twitter-fill"></i></a>
                    <a href="https://github.com/Amitgajare2" target="_blank" ><i class="ri-github-fill"></i></a>
                </div>
            </div>
        </>
    )
}

export default Footer;