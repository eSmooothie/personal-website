import "../App.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyleRoot} from 'radium';
import {animationFadeInLeft, animationFadeInUp, animationFadeIn} from '../constants/Animations';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

// list of companies I worked
const list_companies = [
    {
        "company_name" : "FactSet Inc.",
        "start_date" : "Feb 2022",
        "end_date" : "May 2022",
        "position" : "Software Engineer Intern"
       
    },
    
];

function MyIntroduction(){
    return <StyleRoot>
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
}

// Displays about section
function AboutMyself(){
    return <StyleRoot>
    <section id="about_me" className=" flex justify-center items-center font-staatliches min-h-screen overflow-x-hidden border border-white">
        <div className=" relative sm:w-[55%]">
            <p className=" text-green-400 sm:text-3xl text-xl">About Me</p>
            <div className=" grid grid-cols-3 border-white ">
                <article className=" text-gray-400 sm:text-xl
                text-justify col-span-2 px-4 border border-white" 
                style={animationFadeIn._1000ms}>
                    {lorem.generateParagraphs(2)}
                </article>
                <img src="" alt="my_photo" className=" border border-white col-span-1"/>
            </div>
        </div>
    </section>
</StyleRoot>
}

// Displays about section
function MyExperience(){
    return <StyleRoot>
    <section id="about_me" className=" flex justify-center items-center font-staatliches min-h-screen overflow-x-hidden border border-white">
        <div className=" relative  sm:w-[55%]">
            <p className=" text-green-400 text-3xl">Work Experience</p>
            <div className=" border border-white grid grid-cols-1 gap-y-3">
                {   //loop through each companies and create a component
                    list_companies.map((item) => {
                        return <WorkExperienceHolder company_name={item.company_name} position={item.position}
                        start_date={item.start_date} end_date={item.end_date}/>
                    })
                }
            </div>
        </div>
    </section>
</StyleRoot>
}

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

class ContentPage extends React.Component{

    render(){
        return(
            <section>
                <StyleRoot>
                    <aside className=" w-16 min-h-screen bottom-0 hidden sm:block sm:fixed">
                        <div className=' flex flex-col min-h-screen justify-center space-y-6 text-gray-200 items-center'>
                            {/* github */}
                            <a href="https://github.com/eSmooothie" target={'_blank'} 
                            className=' text-center hover:text-green-500 w-10' style={animationFadeInLeft._500ms}
                            data-tooltip-target="tooltip-right" data-tooltip-placement="right"
                            >
                                <FontAwesomeIcon icon="fa-brands fa-github-alt" size='2x' className=""/>
                            </a>
                            {/* linkedIn */}
                            <a href="https://www.linkedin.com/in/sherwin-sandoval/" target={'_blank'} className=' text-center hover:text-green-500  w-10' style={animationFadeInLeft._650ms}>
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" size='2x' className=""/>
                            </a>
                            {/* messenger */}
                            <a href="mailto:sherwin.sandoval026@gmail.com" target={'_blank'} className=' text-center hover:text-green-500  w-10' style={animationFadeInLeft._750ms}>
                                <FontAwesomeIcon icon="fa-solid fa-at" size='2x' className=""/>
                            </a>  
                            {/* messenger */}
                            <a href="https://m.me/eSmooothieee" target={'_blank'} className=' text-center hover:text-green-500  w-10' style={animationFadeInLeft._850ms}>
                                <FontAwesomeIcon icon="fa-brands fa-facebook-messenger" size='2x' className=""/>
                            </a>                        
                        </div>
                    </aside>
                </StyleRoot>
                <MyIntroduction />
                <AboutMyself />
                <MyExperience />
            </section>
        )
    }
}


export default ContentPage