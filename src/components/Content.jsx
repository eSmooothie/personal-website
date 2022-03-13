import "../App.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyleRoot} from 'radium';
import {animationFadeInLeft, animationFadeInUp, animationFadeIn} from '../constants/Animations';
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
                            <a href="https://www.linkedin.com/in/sherwin-sandoval/" target={'_blank'} className=' text-center hover:text-green-500  w-10' style={animationFadeInLeft._1000ms}>
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" size='2x' className=""/>
                            </a>
                            {/* messenger */}
                            <a href="https://m.me/eSmooothieee" target={'_blank'} className=' text-center hover:text-green-500  w-10' style={animationFadeInLeft._1500ms}>
                                <FontAwesomeIcon icon="fa-brands fa-facebook-messenger" size='2x' className=""/>
                            </a>                        
                        </div>
                    </aside>
                </StyleRoot>
                <StyleRoot>
                    <section className="  md:px-24 px-3 font-staatliches pt-10 min-h-screen overflow-x-hidden">
                        {/* Intro */}
                        <div className=" relative top-14 xl:left-[22%] lg:left-[20%] left-4 ">
                            <p className=" text-green-400 text-3xl" style={animationFadeIn._1000ms}>Hi! I'm</p>
                            <p className=" text-gray-200 sm:text-9xl text-5xl" style={animationFadeIn._1000ms}>SHERWIN SANDOVAL</p>

                            <article className=" text-gray-400 sm:text-xl" style={animationFadeIn._1000ms}>
                                SHORT DESCRIPTION
                            </article>
                        </div>
                        {/* About Me */}
                    </section>
                </StyleRoot>
                
            </section>
        )
    }
}


export default ContentPage