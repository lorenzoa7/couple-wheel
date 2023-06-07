import * as C from './styles'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
    return (
        <C.Header>
            <C.AppTitle>Couple Roulette</C.AppTitle>
            <div className='cursor-pointer w-6 h-6'><AiOutlineMenu size={'100%'} /></div>
        </C.Header>
    )
}