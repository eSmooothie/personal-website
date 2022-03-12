import "../App.css";
import React, { Component } from "react";
import MediaQuery from 'react-responsive' // managing media query
import {StyleRoot} from 'radium';
import logo_white from '../images/myLogo_w.png';
import myAnimationStyles, {animationFadeInDown} from "../constants/Animations";

class Header extends Component{
    
    constructor(){
        super();

        this.state = {
            showMenu : false,
        }

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(event){
        event.preventDefault();

        

        this.setState(prevState => ({
            showMenu: !prevState.showMenu
        }));
       
    }

    render(){
        const handleMediaQueryChange = (matches) => {
            // matches will be true or false based on the value for the media query
            if(matches){
                this.setState({showMenu : false});
            }
        }
        

        return (
            <div className="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-dark-blue py-6 px-6 relative min-w-full">
                <div className="">
                    <StyleRoot>
                        <a href="">
                            <img src={logo_white} alt="logo" 
                            className="sm:h-16 h-12"  style={myAnimationStyles.fadeIn}/>
                        </a>   
                    </StyleRoot>
                                     
                </div>
                <MediaQuery maxWidth={426} onChange={handleMediaQueryChange}>
                    <button className="inline-block w-8 h-10 text-gray-600 p-1" onClick={this.showMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    {this.state.showMenu ? (
                    <nav className="  absolute space-y-4 top-20 left-0 z-20 flex flex-col font-semibold w-full bg-blue-900
                    shadow-md rounded-b-lg p-6 pt-5 font-mono">
                        <a href="/" className=" hover:underline hover:text-green-500 "><span className=" text-green-400">01.</span> About Me</a>
                        <a href="/" className=" hover:underline hover:text-green-500 "><span className=" text-green-400">02.</span>  Experience</a>
                        <a href="/" className=" hover:underline hover:text-green-500 "><span className=" text-green-400">03.</span>  Projects</a>
                        <a href="/" className=" hover:underline hover:text-green-500 "><span className=" text-green-400">04.</span>  Achievements</a>
                    </nav>
                    ):(
                        null
                    )}
                </MediaQuery>
                
                <StyleRoot>
                    <nav className="  hidden absolute sm:relative top-16 left-0 sm:top-0 z-20 sm:flex sm:flex-row sm:space-x-6
                    font-semibold w-full sm:w-auto bg-white shadow-md rounded-lg sm:rounded-none sm:shadow-none sm:bg-transparent p-6 pt-0 sm:p-0 
                    font-mono text-gray-200">
                    
                        <a href="/" className=" hover:text-green-500 " style={animationFadeInDown._500ms}>
                            <span className=" text-green-400">01.</span> About Me
                            </a>
                    
                        <a href="/" className=" hover:text-green-500  " style={animationFadeInDown._1s}>
                            <span className=" text-green-400">02.</span> Experience
                            </a>
                        <a href="/" className=" hover:text-green-500  " style={animationFadeInDown._1500ms}>
                            <span className=" text-green-400">03.</span> Projects
                            </a>
                        <a href="/" className=" hover:text-green-500  " style={animationFadeInDown._2000ms}>
                            <span className=" text-green-400">04.</span> Achievements
                            </a>
                                        
                    </nav>
                </StyleRoot>   
            </div>
        )
    }
}

export default Header