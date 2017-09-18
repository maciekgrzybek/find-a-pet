import  { spring } from 'react-router-transition/lib/react-router-transition';

export function mapStyles(styles) {
  return {
		transform: `translateY(${styles.translate}%)`,
		opacity: styles.opacity
  };
}

function animatePage(val) {
  return spring(val, {
    stiffness: 100,
    damping: 22,
  });
}

export  const pageTransition = {
  atEnter: {
		translate: 100,
		opacity:0,
  },
  atLeave: {
		translate: animatePage(100),
		opacity:0
  },
  atActive: {
		translate: animatePage(0),
		opacity: 1
  },
};