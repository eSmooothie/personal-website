import React from "react";
import {StyleRoot} from 'radium';
import {animationFadeIn} from '../../constants/Animations';
import {LoremGenerateParagraphs} from '../../constants/Util';

class AboutSection extends React.Component{
    render(){
        var show_border = (this.props.debug)? " border border-white":"";
        return (
            <StyleRoot>
                <section id="about_me" className={" flex justify-center items-center font-staatliches min-h-screen overflow-x-hidden" + show_border}>
                    <div className={" relative sm:w-[55%]"  + show_border}>
                        <h1 className=" text-green-400 sm:text-4xl text-2xl mb-3">About Me</h1>
                        <div className={" grid grid-cols-3"  + show_border}>
                            <article className={" text-gray-400 sm:text-xl text-justify col-span-2 pr-4 "  + show_border} 
                            style={animationFadeIn._1000ms}>
                                {LoremGenerateParagraphs(2)}
                            </article>
                            <img src="" alt="my_photo" className={"col-span-1"  + show_border}/>
                        </div>
                    </div>
                </section>
            </StyleRoot>
        )}
}

export default AboutSection;