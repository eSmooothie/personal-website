import "../App.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyleRoot} from 'radium';
import {animationFadeInLeft, animationFadeInUp, animationFadeIn} from '../constants/Animations';

function MyIntroduction(){
    return <StyleRoot>
        <section className="  md:px-24 px-3 font-staatliches pt-1 min-h-screen overflow-x-hidden border border-white">
            {/* Intro */}
            <div className=" relative top-9 xl:left-[22%] lg:left-[20%] left-10">
                <p className=" text-green-400 text-3xl" style={animationFadeIn._1000ms}>Hi! I'm</p>
                <p className=" text-gray-200 sm:text-9xl text-7xl xl:text-10xl" style={animationFadeIn._1000ms}>SHERWIN<br />SANDOVAL</p>

                <article className=" text-gray-400 sm:text-xl xl:w-1/2 lg:w-4/6 md:w-5/6 w-9/12 text-justify" style={animationFadeIn._1000ms}>
                I am ambitious and motivated. Constantly set goals for myself, 
                so I have something to strive toward. I`m not comfortable with settling,
                and I'm always looking for an opportunity to do better and achieve greatness.
                </article>
            </div>
            {/* About Me */}
        </section>
    </StyleRoot>
}

// Displays about section
function AboutMyself(){
    return <StyleRoot>
    <section id="about_me" className="  md:px-24 px-3 font-staatliches pt-1 min-h-screen overflow-x-hidden border border-white">
        <div className=" relative top-9 xl:left-[22%] lg:left-[20%] left-10">
            <article className=" text-gray-400 sm:text-xl xl:w-1/2 lg:w-4/6 md:w-5/6 w-9/12 text-justify" style={animationFadeIn._1000ms}>
                About mE!
            </article>
        </div>
    </section>
</StyleRoot>
}

// Displays about section
function MyExperience(){
    return <StyleRoot>
    <section id="about_me" className="  md:px-24 px-3 font-staatliches pt-1 min-h-screen overflow-x-hidden border border-white">
        <div className=" relative top-9 xl:left-[22%] lg:left-[20%] left-10">
            <article className=" text-gray-400 sm:text-xl xl:w-1/2 lg:w-4/6 md:w-5/6 w-9/12 text-justify" style={animationFadeIn._1000ms}>
                Experience
            </article>
        </div>
    </section>
</StyleRoot>
}

class ContentPage extends React.Component{

    

    render(){
        return(
            <section>
                <StyleRoot>
                    <aside className=" absolute w-16 min-h-screen bottom-0 hidden sm:block">
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
                <MyIntroduction />
                <AboutMyself />
                <MyExperience />
            </section>
        )
    }
}


export default ContentPage