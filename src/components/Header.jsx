import "../App.css";
import React, { Component } from "react";
import MediaQuery from 'react-responsive' // managing media query
import {StyleRoot} from 'radium';
import logo_white from '../images/myLogo_w.png';
import myAnimationStyles from "../constants/Animations";

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
            <div className="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-slate-700 py-6 px-6 relative border border-black min-w-full">
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
                    <nav className="  absolute space-y-4 top-28 left-0 z-20 flex flex-col font-semibold w-full bg-white 
                    shadow-md rounded-lg p-6 pt-0 font-mono">
                        <a href="/" className=" hover:underline hover:text-green-500 text-white">01. About Me</a>
                        <a href="/" className=" hover:underline hover:text-green-500 text-white">02. Experience</a>
                        <a href="/" className=" hover:underline hover:text-green-500 text-white">03. Projects</a>
                        <a href="/" className=" hover:underline hover:text-green-500 text-white">04. Achievements</a>
                    </nav>
                    ):(
                        null
                    )}
                </MediaQuery>
                
                <StyleRoot>
                    <nav className="  hidden absolute sm:relative top-16 left-0 sm:top-0 z-20 sm:flex sm:flex-row sm:space-x-6
                    font-semibold w-full sm:w-auto bg-white shadow-md rounded-lg sm:rounded-none sm:shadow-none sm:bg-transparent p-6 pt-0 sm:p-0 
                    font-mono">
                    
                            <a href="/" className=" hover:underline hover:text-green-500 text-white" style={myAnimationStyles.fadeInDown}>01. About Me</a>
                    
                            <a href="/" className=" hover:underline hover:text-green-500  text-white" style={myAnimationStyles.fadeInDown}>02. Experience</a>
                            <a href="/" className=" hover:underline hover:text-green-500  text-white" style={myAnimationStyles.fadeInDown}>03. Projects</a>
                            <a href="/" className=" hover:underline hover:text-green-500  text-white" style={myAnimationStyles.fadeInDown}>04. Achievements</a>
                                        
                    </nav>
                </StyleRoot>   
            </div>
        )
    }
}

export default Header