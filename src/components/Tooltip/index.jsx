import * as C from './styles'

export default function Tooltip({children}) {
    // Set on parent div: relative [&>*:first-child]:hover:scale-100
    
    return (
        <C.Tooltip>
            {children}
        </C.Tooltip>
    )
}