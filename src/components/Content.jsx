import "../App.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyleRoot} from 'radium';
import {animationFadeInLeft} from '../constants/Animations';
class ContentPage extends React.Component{


    render(){
        return(
            <section>
                <StyleRoot>
                    <aside className=" absolute w-16 min-h-screen bottom-0">
                        <div className=' flex flex-col min-h-screen justify-center space-y-6 text-gray-200 items-center'>
                                                       
                            <a href="/" className=' text-center hover:text-green-500 w-10' style={animationFadeInLeft._1000ms}>
                                <FontAwesomeIcon icon="fa-brands fa-github-alt" size='2x'  />
                            </a>

                            <a href="/" className=' text-center hover:text-green-500  w-10' style={animationFadeInLeft._1500ms}>
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" size='2x'   />
                            </a>
                    
                            <a href="/" className=' text-center hover:text-green-500  w-10' style={animationFadeInLeft._2000ms}>
                                <FontAwesomeIcon icon="fa-brands fa-facebook-messenger" size='2x'  />
                            </a>                        
                        </div>
                    </aside>
                </StyleRoot>
                <section className=" border border-black sm:px-24 px-3 font-staatliches pt-10 min-h-screen">
                    <div className=" border border-black mx-auto">
                        <p className=" text-green-400 text-3xl">Hi! I'm</p>
                        <p className=" text-gray-200 text-7xl ">SHERWIN SANDOVAL</p>
                        <p className=" text-gray-400 text-9xl"></p>
                        <article>
                            SHORT DESCRIPTION
                        </article>
                    </div>
                    
                </section>
            </section>
        )
    }
}


export default ContentPage