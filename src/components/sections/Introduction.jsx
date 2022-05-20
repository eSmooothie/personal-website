import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyleRoot} from 'radium';
import {animationFadeInLeft, animationFadeInUp, animationFadeIn} from '../../constants/Animations';


class IntroductionSection extends React.Component{
    render(){
        return (
            <StyleRoot>
                <section className=" flex justify-center font-staatliches min-h-screen overflow-x-hidden border border-white">
                    {/* Intro */}
                    <div className=" relative sm:w-[45%] sm:px-0 px-5 border border-white">
                        <p className=" text-green-400 sm:text-3xl text-xl" style={animationFadeIn._1000ms}>Hi! I'm</p>
                        <p className=" text-gray-200 sm:text-9xl text-7xl xl:text-10xl" style={animationFadeIn._1000ms}>SHERWIN<br />SANDOVAL</p>

                        <article className=" text-gray-400 sm:text-xl text-justify" style={animationFadeIn._1000ms}>
                            I am ambitious and motivated. Constantly set goals for myself, 
                            so I have something to strive toward. I`m not comfortable with settling,
                            and I'm always looking for an opportunity to do better and achieve greatness.
                        </article>
                    </div>
                    {/* About Me */}
                </section>
            </StyleRoot>
        )
    }
}

export default IntroductionSection;