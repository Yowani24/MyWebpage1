import React from 'react'
import './Estilos.css'
import John_foto from './images/John_image.png'
import stacks_foto from './images/icons/nn.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { CgWebsite } from 'react-icons/cg'
import { FaMobileAlt } from 'react-icons/fa';
import { RiServiceLine } from 'react-icons/ri'
import UsedTechsPage from './UsedTechsPage';
import HiremePage from './HiremePage';

export default function HomePage() {
    const scrollToHireMe = () => window.scrollTo({top: 1460, behavior:"smooth"});
    return (
        <div className="HomePage">
            <div className="show_case">
                <div className="menu">
                    <div className="container flex">
                        <Link to="/about">
                            <button>About</button>
                        </Link>
                    </div>
                </div>
                <div className="container grid">
                    <div className="show_case_left_box">
                        <img src={John_foto} alt=""/>
                    </div>
                    <div className="show_case_right_box">
                        <h1>João da Costa</h1>
                        <button onClick={scrollToHireMe}>Hire me</button>
                    </div>                    
                </div>
            </div>
 
                <div className="container welcome_box">
                    <p>Hello, first of all, I am happy that you have accessed my page, so feel free to explore it fully and I hope you enjoy it.</p>
                </div>
                
                <div className="container what_i_do">
                    <h2>Fullstack Developer</h2>
                    <div className="stacks">
                        <h3>
                            <CgWebsite className="stacks_icon"/>
                            Websites
                        </h3>

                        <h3>
                            <FaMobileAlt className="stacks_icon"/>
                            Mobile Apps
                        </h3>

                        <h3>
                            <RiServiceLine className="stacks_icon"/>
                            Services
                        </h3>
                        
                    </div>
                </div>

                <UsedTechsPage/>

                <HiremePage/>
        </div>
    )
}
