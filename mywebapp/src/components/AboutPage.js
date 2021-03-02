import React from 'react'
import about_foto from './images/about_jhon_foto.jpg.png'
import { Link } from 'react-router-dom';


export default function AboutPage() {
    return (
        <div className="About_page">
                        <div className="container btn_home">
                            <Link to="/">
                                <button>Back Home</button>
                            </Link>
                        </div>

            <div className="container about_boxes">
                    <div className="about_top_box">
                        <h1>About me</h1>
                    </div>
                    <div className="about_left_box">
                        <img src={about_foto} alt=""/>
                    </div>
                    <div className="about_right_box">

                    </div>
                
            </div>
        </div>
    )
}
