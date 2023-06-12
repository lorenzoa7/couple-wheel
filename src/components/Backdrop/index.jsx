import * as C from './styles'

export default function Backdrop({ children, onClick=null }) {
    return (
        <C.Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClick}
        >
            {children}
        </C.Backdrop>
    )
}