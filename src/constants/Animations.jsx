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
        animation: '500ms linear',
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

export const animationFadeIn = {
    _100ms: {
        animation: '100ms ',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _200ms: {
        animation: '200ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _225ms: {
        animation: '225ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _250ms: {
        animation: '250ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _275ms: {
        animation: '275ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _300ms: {
        animation: '300ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _350ms: {
        animation: '300ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _400ms: {
        animation: '400ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _500ms: {
        animation: '500ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _600ms: {
        animation: '600ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _700ms: {
        animation: '700ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _800ms: {
        animation: '800ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _900ms: {
        animation: '900ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _1000ms: {
        animation: '1000ms linear',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _1250ms: {
        animation: '1250ms',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _1500ms: {
        animation: '1500ms',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _1600ms: {
        animation: '1750ms',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _1700ms: {
        animation: '1750ms',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _2000ms: {
        animation: '2s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _2500ms: {
        animation: '2500ms',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    _3000ms: {
        animation: '3000ms',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
}

export const animationFadeInUp = {
    _100ms: {
        animation: '100ms ',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _200ms: {
        animation: '200ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _225ms: {
        animation: '225ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _250ms: {
        animation: '250ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _275ms: {
        animation: '275ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _300ms: {
        animation: '300ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _350ms: {
        animation: '300ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _400ms: {
        animation: '400ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _500ms: {
        animation: '500ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _600ms: {
        animation: '600ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _700ms: {
        animation: '700ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _800ms: {
        animation: '800ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _900ms: {
        animation: '900ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _1000ms: {
        animation: '1000ms linear',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _1250ms: {
        animation: '1250ms',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _1500ms: {
        animation: '1500ms',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _1600ms: {
        animation: '1750ms',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    _1700ms: {
        animation: '1750ms',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
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

export const animationFadeInDown = {
    _100ms: {
        animation: '100ms ',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _200ms: {
        animation: '200ms linear ',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _225ms: {
        animation: '225ms linear',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _250ms: {
        animation: '250ms linear',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _275ms: {
        animation: '275ms linear',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _300ms: {
        animation: '300ms linear',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _350ms: {
        animation: '300ms linear',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _400ms: {
        animation: '400ms linear',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _500ms: {
        animation: '500ms linear',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _1000ms: {
        animation: '1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _1250ms: {
        animation: '1250ms',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _1500ms: {
        animation: '1500ms',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    _1750ms: {
        animation: '1750ms',
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
        animation: '500ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _600ms: {
        animation: '600ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _650ms: {
        animation: '650ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _700ms: {
        animation: '700ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _750ms: {
        animation: '750ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _850ms: {
        animation: '850ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _1000ms: {
        animation: '1000ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _1250ms: {
        animation: '1250ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _1500ms: {
        animation: '1500ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _1750ms: {
        animation: '1750ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _2000ms: {
        animation: '2000ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _2500ms: {
        animation: '2500ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    _3000ms: {
        animation: '3000ms linear',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
}

export default myAnimationStyles;