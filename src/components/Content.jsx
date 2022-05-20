import "../App.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyleRoot} from 'radium';
import {animationFadeInLeft, animationFadeInUp, animationFadeIn} from '../constants/Animations';
import ExperienceSection from "./sections/Experiences";
import AboutSection from "./sections/About";
import IntroductionSection from "./sections/Introduction";

// list of companies I worked
const list_companies = [
    {
        "company_name" : "FactSet Inc.",
        "start_date" : "Feb 2022",
        "end_date" : "May 2022",
        "position" : "Software Engineer Intern"
    },
];

class ContentPage extends React.Component{
    render(){
        return(
            <section>
                <StyleRoot>
                    <aside className=" w-16 min-h-screen bottom-0 hidden sm:block sm:fixed">
                        <div className=' flex flex-col min-h-screen justify-center space-y-6 text-gray-200 items-center'>
                            {/* github */}
                            <a href="https://github.com/eSmooothie" target={'_blank'} 
                            className=' text-center hover:text-green-500 w-10' style={animationFadeInLeft._500ms}
                            data-tooltip-target="tooltip-right" data-tooltip-placement="right"
                            >
                                <FontAwesomeIcon icon="fa-brands fa-github-alt" size='2x' className=""/>
                            </a>
                            {/* linkedIn */}
                            <a href="https://www.linkedin.com/in/sherwin-sandoval/" target={'_blank'} className=' text-center hover:text-green-500  w-10' style={animationFadeInLeft._650ms}>
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" size='2x' className=""/>
                            </a>
                            {/* messenger */}
                            <a href="mailto:sherwin.sandoval026@gmail.com" target={'_blank'} className=' text-center hover:text-green-500  w-10' style={animationFadeInLeft._750ms}>
                                <FontAwesomeIcon icon="fa-solid fa-at" size='2x' className=""/>
                            </a>  
                            {/* messenger */}
                            <a href="https://m.me/eSmooothieee" target={'_blank'} className=' text-center hover:text-green-500  w-10' style={animationFadeInLeft._850ms}>
                                <FontAwesomeIcon icon="fa-brands fa-facebook-messenger" size='2x' className=""/>
                            </a>                        
                        </div>
                    </aside>
                </StyleRoot>
                <IntroductionSection />
                <AboutSection />
                <ExperienceSection workExperience={list_companies}/>
            </section>
        )
    }
}


export default ContentPage;