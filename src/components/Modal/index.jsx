import * as C from './styles'
import Backdrop from '../Backdrop'

// const dropIn = {
//     hidden: {
//         y: '-100vh',
//         opacity: 0
//     },
//     visible: {
//         y: '0',
//         opacity: 1,
//         transition: {
//             duration: 0.1,
//             type: 'spring',
//             damping: 25,
//             stiffness: 500
//         }
//     },
//     exit: {
//         y: '100vh',
//         opacity: 0
//     }
// }

const scaleIn = {
    hidden: {
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    },
    visible: {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        scaleX: 0,
        scaleY: 0,
        opacity: 0
    }
}

const fadeIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        opacity: 0
    }
}

export default function Modal({ children, size='medium', handleClose=null, animation='scaleIn', hasMaxHeigth = false }) {
    const animationType = animation === 'scaleIn' ? scaleIn : fadeIn

    return (
        <Backdrop onClick={handleClose}>
            <C.Modal
                onClick={e => e.stopPropagation()}
                variants={animationType}
                initial='hidden'
                animate='visible'
                exit='exit'
                size={size}
                $has_max_height={hasMaxHeigth}
            >   
                {children}
            </C.Modal>
        </Backdrop>
    )
}