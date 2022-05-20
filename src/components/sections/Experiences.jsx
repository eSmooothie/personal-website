import React from "react";
import {StyleRoot} from 'radium';

function WorkExperienceHolder(props){
    var show_border = (props.debug)? " border border-white":"";
    return <figure className={" flex " + show_border}>
        <img src={props.img} alt={props.companyName + "_logo"} className={"w-36 h-36 mr-4" + show_border}/>
        <figcaption  className={" text-gray-400 sm:text-xl text-justify flex flex-col justify-center" + show_border}>
            <h2 className=" text-gray-200 text-3xl">{props.companyName}</h2>
            <p className=" text-xl">{props.position}</p>
            <p className=" text-xl">{props.startDate} - {props.endDate}</p>
        </figcaption>
    </figure>
}

class ExperienceSection extends React.Component{
    componentDidMount(){
        console.log("Work experience section mounted");
    }

    render(){
        var show_border = (this.props.debug)? "border border-white":"";
        return(
            <StyleRoot>
                <section id="my_work_experience" className={"flex justify-center items-center font-staatliches min-h-screen overflow-x-hidden " + show_border}>
                    <div className=" relative  sm:w-[55%]">
                        <h1 className=" text-green-400 sm:text-4xl text-2xl mb-3">Work Experience</h1>
                        <div className={"grid grid-cols-1 gap-y-4 " + show_border}>
                            {   //loop through each companies and create a component
                                this.props.workExperience.map((item) => {
                                  
                                    return <WorkExperienceHolder 
                                    key={item.company_name}
                                    companyName={item.company_name} 
                                    position={item.position}
                                    startDate={item.start_date} 
                                    endDate={item.end_date} 
                                    img={item.img_link} 
                                    debug={this.props.debug}/>
                                })
                            }
                        </div>
                    </div>
                </section>
            </StyleRoot>
        )}
}

export default ExperienceSection;