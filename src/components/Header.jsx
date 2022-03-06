import "../App.css";
import React, { Component } from "react";
import MediaQuery from 'react-responsive' // managing media query
import logo from '../logo.svg';

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
            <div className="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-6 relative">
                <div>
                    <img src={logo} alt="logo" className="h-6 md:h-8 border border-black"/>
                </div>
                <MediaQuery maxWidth={425} onChange={handleMediaQueryChange}>
                    <button className="inline-block w-8 h-8 text-gray-600 p-1" onClick={this.showMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    {this.state.showMenu ? (
                    <nav className="  absolute space-y-4 top-16 left-0 z-20 flex flex-col font-semibold w-full bg-white shadow-md rounded-lg p-6 pt-0 font-mono">
                        <a href="/" className=" hover:underline hover:text-indigo-600 active:text-indigo-600 text-gray-600">01. About Me</a>
                        <a href="/" className=" hover:underline hover:text-indigo-600 active:text-indigo-600 text-gray-600">02. Experience</a>
                        <a href="/" className=" hover:underline hover:text-indigo-600 active:text-indigo-600 text-gray-600">03. Projects</a>
                        <a href="/" className=" hover:underline hover:text-indigo-600 active:text-indigo-600 text-gray-600">04. Achievements</a>
                    </nav>
                    ):(
                        null
                    )}
                </MediaQuery>
                

                <nav className="  hidden absolute md:relative top-16 left-0 md:top-0 z-20 md:flex md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0 font-mono">
                    <a href="/" className=" hover:underline hover:text-indigo-600 active:text-indigo-600 text-gray-600">01. About Me</a>
                    <a href="/" className=" hover:underline hover:text-indigo-600 active:text-indigo-600 text-gray-600">02. Experience</a>
                    <a href="/" className=" hover:underline hover:text-indigo-600 active:text-indigo-600 text-gray-600">03. Projects</a>
                    <a href="/" className=" hover:underline hover:text-indigo-600 active:text-indigo-600 text-gray-600">04. Achievements</a>
                </nav>
            </div>
        )
    }
}

export default Header