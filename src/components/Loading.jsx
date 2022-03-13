import "../App.css";
import React from "react";
import Header from '../components/Header';
import { fadeOut, pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import intro_gif from "../images/intro.gif";
import ContentPage from "../components/Content";

const styles = {
    pulse: {
      animation: 'infinite 1.5s ease-out',
      animationName: Radium.keyframes(pulse, 'pulse')
    },
    fadeOut: {
        animation: '1s',
        animationName: Radium.keyframes(fadeOut, 'fadeOut')
    }
  }

class Loading extends React.Component{
    constructor(){
        super();

        this.state = {
            isLoading: true,
            isPulse: true,
            gif: intro_gif,
            loaded_gif : intro_gif,
        };
    }

    componentDidMount(){
        let wait_time = 4300;
        
        // loading
        setTimeout(function(){
            this.setState({
                isLoading: false
            });
        }.bind(this), wait_time);

        // fade out
        setTimeout(function(){
            this.setState({
                isPulse: false
            });
        }.bind(this), wait_time - 1000);
    }
  
    render(){
        return (
            // this.state.isLoading ?
            false ? 
                <StyleRoot><div className=" bg-dark-blue container min-h-screen grid place-items-center overflow-hidden min-w-full" 
                    style={this.state.isPulse? null : styles.fadeOut}>
                    <div className="">
                        <img src={this.state.loaded_gif + "?a=" + Math.random()} alt="logo" 
                            className=" h-32"/>
                    </div>
                </div></StyleRoot>:
                <section>
                    <Header></Header>
                    <ContentPage></ContentPage>
                </section>
                 
               
        )
    }

    
}

export default Loading