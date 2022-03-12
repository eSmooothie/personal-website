import { fadeOut, pulse, fadeIn, fadeInUp,slideInDown, fadeInDown } from 'react-animations';
import Radium from 'radium';

const myAnimationStyles = {
    pulse: {
      animation: 'infinite 1.5s ease-out',
      animationName: Radium.keyframes(pulse, 'pulse')
    },
    fadeOut: {
        animation: '1s',
        animationName: Radium.keyframes(fadeOut, 'fadeOut')
    },
    fadeIn: {
        animation: '1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    fadeInUp: {
        animation: '1s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    fadeInDown: {
        animation: '1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    slideInDown: {
        animation: '1s',
        animationName: Radium.keyframes(slideInDown, 'slideInDown')
    },
}

export default myAnimationStyles;