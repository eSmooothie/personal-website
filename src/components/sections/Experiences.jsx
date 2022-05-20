import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyleRoot} from 'radium';
import {animationFadeInLeft, animationFadeInUp, animationFadeIn} from '../../constants/Animations';

function WorkExperienceHolder(props){
    return <figure className=" flex border border-white">
        <img src="" alt={props.company_name + "_logo"} className="border border-white w-36 h-36 mr-4"/>
        <figcaption  className=" text-gray-400 sm:text-xl
            text-justify border border-white">
            <p className=" text-gray-200 text-3xl">{props.company_name}</p>
            <p className=" text-xl">{props.position}</p>
            <p className=" text-xl">{props.start_date} - {props.end_date}</p>
        </figcaption>
    </figure>
}

class ExperienceSection extends React.Component{
    
    render(){
        return(
            <StyleRoot>
                <section id="about_me" className=" flex justify-center items-center font-staatliches min-h-screen overflow-x-hidden border border-white">
                    <div className=" relative  sm:w-[55%]">
                        <p className=" text-green-400 text-3xl">Work Experience</p>
                        <div className=" border border-white grid grid-cols-1 gap-y-3">
                            {   //loop through each companies and create a component
                                this.props.workExperience.map((item) => {
                                    return <WorkExperienceHolder company_name={item.company_name} position={item.position}
                                    start_date={item.start_date} end_date={item.end_date}/>
                                })
                            }
                        </div>
                    </div>
                </section>
            </StyleRoot>
        )}
}

export default ExperienceSection;