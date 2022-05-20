import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyleRoot} from 'radium';
import {animationFadeInLeft, animationFadeInUp, animationFadeIn} from '../../constants/Animations';

function ProjectHolder(props){
    var show_border = (props.debug)? " border border-white":"";
    return <article className={" text-gray-400" + show_border}>
        <h2 className="text-gray-200 text-3xl">{props.title} &nbsp;
            <span className="text-gray-400 text-xl">({props.startDate} - {props.endDate})</span>
        </h2>
        <p className="text-xl">{props.type} PROJECT</p>
        <p className="text-base mb-3">{props.techStack.join(",  ")}</p>
        <div className=" flex justify-end">
            <button className=" text-yellow-400 hover:text-yellow-600">View Full Details</button>
        </div>
    </article>
}

class ProjectsSection extends React.Component{
    render(){
        var show_border = (this.props.debug)? "border border-white":"";
        return(
            <StyleRoot>
                <section id="about_me" className={"flex justify-center items-center font-staatliches min-h-screen overflow-x-hidden " + show_border}>
                    <div className=" relative  sm:w-[55%]">
                        <h1 className=" text-green-400 sm:text-4xl text-2xl mb-3">Projects</h1>
                        <div className={"grid grid-cols-1 gap-y-4 " + show_border}>
                            {   //loop through each companies and create a component
                                this.props.projects.map((item) => {
                                    console.log(item);
                                    return <ProjectHolder 
                                    title={item.title}
                                    description={item.description}
                                    startDate={item.start_date}
                                    endDate={item.end_date}
                                    techStack={item.tech_stack}
                                    type={item.type}
                                    debug={this.props.debug}/>
                                })
                            }
                        </div>
                    </div>
                </section>
            </StyleRoot>
        )}
}

export default ProjectsSection;