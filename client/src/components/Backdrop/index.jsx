import * as C from './styles'

export default function Backdrop({ children }) {
    return (
        <C.Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </C.Backdrop>
    )
}