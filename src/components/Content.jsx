import "../App.css";
import React, { Suspense, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyleRoot} from 'radium';
import {animationFadeInLeft, animationFadeInUp, animationFadeIn} from '../constants/Animations';

import { LoremGenerateSetences } from "../constants/Util";
import { Link } from "react-scroll";
// list of companies I worked
const list_companies = [
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
];

const LazyIntroductionSection = React.lazy(() => import('./sections/Introduction'));
const LazyAboutSection = React.lazy(() => import('./sections/About'));
const LazyExperienceSection = React.lazy(() => import('./sections/Experiences'));
const LazyProjectsSection = React.lazy(() => import('./sections/Projects'));
const LazyMoreSection = React.lazy(() => import('./sections/More'));

function ScrollUp(){
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    var scroll_up_visible = (scrollPosition > 600)? " sm:block" : "";

    return (<aside className={" w-28 min-h-screen bottom-0 right-0 hidden sm:fixed" + scroll_up_visible}>
        <div className="min-h-screen flex flex-col justify-end items-start pb-8">
            <Link
                to="header"
                smooth={true}
                className="hover:text-green-500 cursor-pointer text-white"
            >
                <FontAwesomeIcon icon="fa-solid fa-circle-up" size='2x'/>
            </Link>
        </div>
        </aside>);
}
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
                    <ScrollUp />
                </StyleRoot>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyIntroductionSection debug={false}/>
                    <LazyAboutSection debug={false}/>
                    <LazyExperienceSection workExperience={list_companies} debug={false}/>
                    <LazyProjectsSection debug={false} projects={projects}/>
                    <LazyMoreSection debug={false}/>
                </Suspense>
                
            </section>
        )
    }
}


export default ContentPage;