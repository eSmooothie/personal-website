import React from "react";
import {StyleRoot} from 'radium';
import {animationFadeIn} from '../../constants/Animations';

class MoreSection extends React.Component{
    componentDidMount(){
        console.log("About section mounted");
    }

    render(){
        var show_border = (this.props.debug)? " border border-white":"";
        return (
            <StyleRoot>
                <section id="more" className={" flex justify-center items-center font-staatliches min-h-screen overflow-x-hidden" + show_border}>
                <div className=" relative  sm:w-[55%]">
                        <h1 className=" text-green-400 sm:text-4xl text-2xl mb-3">More</h1>
                       
                    </div>
                </section>
            </StyleRoot>
        )}
}

export default MoreSection;