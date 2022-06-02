import "../App.css";
import React, { Component } from "react";
import MediaQuery from 'react-responsive' // managing media query
import {StyleRoot} from 'radium';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo_white from '../images/myLogo_w.png';
import myAnimationStyles from "../constants/Animations";
import { Link } from "react-scroll";

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
            <div id="header" className="flex flex-row justify-between items-center md:space-x-4 bg-dark-blue py-6 px-6 relative w-full">
                <div className="">
                    <StyleRoot>
                        <img src={logo_white} alt="logo" 
                            className="sm:h-16 h-12" style={myAnimationStyles.fadeIn}/>
                    </StyleRoot>
                                     
                </div>
                <MediaQuery maxWidth={426} onChange={handleMediaQueryChange}>
                    <button className="inline-block w-8 h-10 text-white p-1 " onClick={this.showMenu}>
                        <FontAwesomeIcon icon="fa-solid fa-bars" />
                    </button>
                    {this.state.showMenu ? (
                    <nav className="   absolute space-y-4 top-20 left-0 z-20 flex flex-col font-semibold w-full
                    shadow-md rounded-b-lg p-6 pt-5 font-mono bg-gradient-to-b from-dark-blue to-blue-900 drop-shadow-xl">
                        
                        <Link
                            to="about_me"
                            smooth={true}
                            className="hover:text-green-500 cursor-pointer text-white"
                        ><span className=" text-green-400">01.</span> About Me</Link>

                        <Link
                            to="my_work_experience"
                            smooth={true}
                            className="hover:text-green-500 cursor-pointer text-white"
                        ><span className=" text-green-400">02.</span> Experience</Link>
                        <Link
                            to="my_projects"
                            smooth={true}
                            className="hover:text-green-500 cursor-pointer text-white"
                        ><span className=" text-green-400">03.</span> Projects</Link>

                        <Link
                            to="more"
                            smooth={true}
                            className="hover:text-green-500 cursor-pointer text-white"
                        ><span className=" text-green-400">04.</span> More</Link>
                    </nav>
                    ):(
                        null
                    )}
                </MediaQuery>
                
                <MediaQuery minWidth={427}>
                    <StyleRoot>
                        <nav className="   hidden absolute sm:relative top-16 left-0 sm:top-0 z-20 sm:flex sm:flex-row sm:space-x-6
                        font-semibold w-full sm:w-auto bg-white shadow-md rounded-lg sm:rounded-none sm:shadow-none sm:bg-transparent p-6 pt-0 sm:p-0 
                        font-mono text-gray-200">
                            
                            <Link
                                to="about_me"
                                smooth={true}
                                className="hover:text-green-500 cursor-pointer"
                            ><span className=" text-green-400">01.</span> About Me</Link>

                            <Link
                                to="my_work_experience"
                                smooth={true}
                                className="hover:text-green-500 cursor-pointer"
                            ><span className=" text-green-400">02.</span> Experience</Link>
                            <Link
                                to="my_projects"
                                smooth={true}
                                className="hover:text-green-500 cursor-pointer"
                            ><span className=" text-green-400">03.</span> Projects</Link>

                            <Link
                                to="more"
                                smooth={true}
                                className="hover:text-green-500 cursor-pointer"
                            ><span className=" text-green-400">04.</span> More</Link>
                            
                        </nav>
                    </StyleRoot> 
                </MediaQuery>
                  
            </div>
        )
    }
}

export default Header