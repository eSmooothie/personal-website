import "../App.css";
import React from "react";
import Header from '../components/Header';
import { fadeOut, pulse } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

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
        };
    }

    componentDidMount(){
        let wait_time = 4000;
        
        // loading
        setTimeout(function(){
            this.setState({
                isLoading: false
            });
        }.bind(this), wait_time);

        // fade out
        setTimeout(function(){
            this.setState({
                // isPulse: false
            });
        }.bind(this), wait_time - 1);
    }

    render(){
        return (
            
            this.state.isLoading ? 
                <StyleRoot><div className=" bg-slate-700 container min-h-screen grid place-items-center overflow-hidden min-w-full" 
                    style={this.state.isPulse? null : styles.fadeOut}>
                    <div className="">
                        <img src="https://github.com/eSmooothie/eSmooothie/blob/main/images/myLogo_w.png?raw=true" alt="logo" 
                            className=" h-64"/>
                    </div>
                </div></StyleRoot>: 
                 <Header></Header>
               
        )
    }

    
}

export default Loading