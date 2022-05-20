import "../App.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyleRoot} from 'radium';
import {animationFadeInLeft, animationFadeInUp, animationFadeIn} from '../constants/Animations';
import ExperienceSection from "./sections/Experiences";
import AboutSection from "./sections/About";
import IntroductionSection from "./sections/Introduction";
import ProjectsSection from "./sections/Projects";
import { LoremGenerateParagraphs, LoremGenerateSetences } from "../constants/Util";

// list of companies I worked
const list_companies = [
    {
        "company_name" : "Google ",
        "start_date" : "Jan 2023",
        "end_date" : "Present",
        "position" : "Software Engineer I",
        "img_link" : "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
    },
    {
        "company_name" : "FactSet Inc.",
        "start_date" : "Feb 2022",
        "end_date" : "May 2022",
        "position" : "Software Engineer Intern",
        "img_link" : "https://symphony.com/wp-content/uploads/2019/08/factset_1024.png",
    },
];


const projects = [
    {
        "title" : "MSU IIT IDS Teacher Efficiency Rating",
        "description" : LoremGenerateSetences(3),
        "start_date" : "2018",
        "end_date" : "present",
        "type" : "personal",
        "tech_stack" : [
            "HTML & CSS",
            "CodeIgniter",
            "TailwindCSS",
            "jQuery",
            "MySQL",
            "PHP",
            "JavaScript",
        ],
    },
    {
        "title" : "medicine mapping",
        "description" : LoremGenerateSetences(3),
        "start_date" : "nov 2021",
        "end_date" : "jan 2022",
        "type" : "thesis",
        "tech_stack" : [
            "HTML & CSS",
            "CodeIgniter",
            "TailwindCSS",
            "jQuery",
            "MySQL",
            "PHP",
            "JavaScript",
            "Flutter",
            "Dart"
        ],
    },
    {
        "title" : "BENCHMARK TASK Manager",
        "description" : LoremGenerateSetences(3),
        "start_date" : "feb 2022",
        "end_date" : "may 2022",
        "type" : "intern",
        "tech_stack" : [
            "HTML & CSS",
            "Django",
            "TailwindCSS",
            "PostgreSQL",
            "Python",
            "JavaScript",
            "Jira API",
            "Factset.io",
            "Woombat"
        ],
    },
]
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
                <IntroductionSection debug={false}/>
                <AboutSection debug={true}/>
                <ExperienceSection workExperience={list_companies} debug={true}/>
                <ProjectsSection debug={true} projects={projects}/>
            </section>
        )
    }
}


export default ContentPage;