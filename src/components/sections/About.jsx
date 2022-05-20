import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyleRoot} from 'radium';
import {animationFadeInLeft, animationFadeInUp, animationFadeIn} from '../../constants/Animations';
import {LoremGenerateParagraphs} from '../../constants/Util';

class AboutSection extends React.Component{
    render(){
        return (
            <StyleRoot>
                <section id="about_me" className=" flex justify-center items-center font-staatliches min-h-screen overflow-x-hidden border border-white">
                    <div className=" relative sm:w-[55%]">
                        <p className=" text-green-400 sm:text-3xl text-xl">About Me</p>
                        <div className=" grid grid-cols-3 border-white ">
                            <article className=" text-gray-400 sm:text-xl
                            text-justify col-span-2 px-4 border border-white" 
                            style={animationFadeIn._1000ms}>
                                {LoremGenerateParagraphs(2)}
                            </article>
                            <img src="" alt="my_photo" className=" border border-white col-span-1"/>
                        </div>
                    </div>
                </section>
            </StyleRoot>
        )}
}

export default AboutSection;