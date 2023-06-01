import * as C from './styles'
import Backdrop from '../Backdrop'

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: '100vh',
        opacity: 0
    }
}

export default function Modal({ children }) {
    return (
        <Backdrop>
            <C.Modal
                onClick={e => e.stopPropagation()}
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
            >   
                {children}
            </C.Modal>
        </Backdrop>
    )
}