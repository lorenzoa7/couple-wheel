import * as C from './styles'
import { AiOutlineMenu } from 'react-icons/ai'
import Tooltip from '../../../components/Tooltip'

export default function Header() {
    return (
        <C.Header>
            <C.AppTitle>Couple Roulette</C.AppTitle>
            <C.MenuIcon>
                <Tooltip>Menu</Tooltip>
                <AiOutlineMenu size={'100%'} />
            </C.MenuIcon>
        </C.Header>
    )
}