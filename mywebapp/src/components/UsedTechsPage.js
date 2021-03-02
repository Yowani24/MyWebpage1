import React from 'react'
import React_icon from './images/icons/react_icon.png'
import Html_icon from './images/icons/html_icon.png'
import Css_icon from './images/icons/css_icom.png'
import Javascript_icon from './images/icons/javascript_icon.png'
import Node_icon from './images/icons/nodejs.png'
import Mysql_icon from './images/icons/mysql.png'

export default function UsedTechsPage() {
    return (
        <div className="UsedTechsPage">
            <div className="container Techs_h1">
                <h1>Technologies i work with</h1>
            </div>
            <div className="container UsedTechs">
                <div className="Tech_card">
                    <h4>React</h4>
                    <img src={React_icon} alt=""/>
                </div>
                <div className="Tech_card">
                    <h4>Javascript</h4>
                    <img src={Javascript_icon} alt=""/>
                </div>
                <div className="Tech_card">
                    <h4>Html5</h4>
                    <img src={Html_icon} alt=""/>
                </div>
                <div className="Tech_card">
                    <h4>Css3</h4>
                    <img src={Css_icon} alt=""/>
                </div>
                <div className="Tech_card">
                    <h4>Node.js</h4>
                    <img src={Node_icon} alt=""/>
                </div>
                <div className="Tech_card">
                    <h4>Mysql</h4>
                    <img src={Mysql_icon} alt=""/>
                </div>
                <div className="Tech_card react-Native_card">
                    <h4>React-Native</h4>
                    <img src={React_icon} alt=""/>
                </div>
            </div>
        </div>
    )
}
