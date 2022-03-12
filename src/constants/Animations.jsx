import { fadeOut, 
    pulse, 
    fadeIn, 
    fadeInUp,
    slideInDown, 
    fadeInDown,
    fadeInLeft,
} from 'react-animations';
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
    fadeInDown_1s: {
        animation: '1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    slideInDown: {
        animation: '1s',
        animationName: Radium.keyframes(slideInDown, 'slideInDown')
    },
};

export const animationFadeInDown = {
    _500ms: {
        animation: '500ms',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _1s: {
        animation: '1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _1500ms: {
        animation: '1500ms',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _2000ms: {
        animation: '2s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _2500ms: {
        animation: '2500ms',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _3000ms: {
        animation: '3000ms',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
}

export const animationFadeInLeft = {
    _500ms: {
        animation: '500ms',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _1000ms: {
        animation: '1s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _1500ms: {
        animation: '1500ms',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _2000ms: {
        animation: '2s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _2500ms: {
        animation: '2500ms',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _3000ms: {
        animation: '3000ms',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
}

export default myAnimationStyles;