import React from "react";
import {StyleRoot} from 'radium';
import {animationFadeIn} from '../../constants/Animations';

let my_photo = require('../../images/my_photo.jpg');

class AboutSection extends React.Component{
    componentDidMount(){
        console.log("About section mounted");
    }

    render(){
        var show_border = (this.props.debug)? " border border-white":"";
        return (
            <StyleRoot>
                <section id="about_me" className={" flex justify-center items-center font-staatliches min-h-screen overflow-x-hidden" + show_border}>
                    <div className={" relative sm:w-[55%]"  + show_border}>
                        <h1 className=" text-green-400 sm:text-4xl text-2xl mb-3">About Me</h1>
                        <div className={" grid grid-cols-3"  + show_border}>
                            <article className={" text-gray-400 sm:text-xl text-justify col-span-2 pr-4"  + show_border} 
                            style={animationFadeIn._1000ms}>
                                <p>
                                    To get you to know me better, I’m a graduate of BS in Information Technology at 
                                    Mindanao State University Iligan Institute of Technology with latin honors. 
                                    You always found me in front of a computer - coding, playing, watching videos, 
                                    or reading articles about scientific discoveries or trends in tech. Other than that, 
                                    I also love cooking and going for a walk, jogging, swimming, and cycling. 
                                    My passion for technology sparked when my cousins and I played console games during my 
                                    primary school years. However, programming comes during my junior high school in a single 
                                    laboratory which is adding two integers. Since then I aspire to be a software engineer/developer 
                                    and aim to be part of big tech companies.
                                </p>

                            </article>
                            <img src={my_photo} alt="my_photo" className={"col-span-1 rounded-md"  + show_border}/>
                        </div>
                    </div>
                </section>
            </StyleRoot>
        )}
}

export default AboutSection;