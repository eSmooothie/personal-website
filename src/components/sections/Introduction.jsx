import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyleRoot} from 'radium';
import {animationFadeInLeft, animationFadeInUp, animationFadeIn} from '../../constants/Animations';


class IntroductionSection extends React.Component{
    render(){
        var show_border = (this.props.debug)? " border border-white":"";
        return (
            <StyleRoot>
                <section className={" flex justify-center font-staatliches min-h-screen overflow-x-hidden " + show_border}>
                    {/* Intro */}
                    <div className={" relative sm:w-[45%] sm:px-0 px-5 " + show_border}>
                        <p className=" text-green-400 sm:text-4xl text-2xl" style={animationFadeIn._1000ms}>Hi! I'm</p>
                        <p className=" text-gray-200 sm:text-9xl text-7xl xl:text-10xl" style={animationFadeIn._1000ms}>SHERWIN<br />SANDOVAL</p>

                        <article className={" text-gray-400 sm:text-xl text-justify" + show_border} style={animationFadeIn._1000ms}>
                            I am ambitious and motivated. Constantly set goals for myself, 
                            so I have something to strive toward. I`m not comfortable with settling,
                            and I'm always looking for an opportunity to do better and achieve greatness.
                        </article>
                    </div>
                </section>
            </StyleRoot>
        )
    }
}

export default IntroductionSection;