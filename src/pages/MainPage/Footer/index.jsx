import * as C from './styles'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer() {
    return (
        <C.Footer>
            <a href='https://github.com/lorenzoa7' className='flex items-center justify-center gap-1 duration-150 hover:text-zinc-500 underline underline-offset-4' target='_blank' rel="noreferrer">
                <AiFillGithub /> Lorenzo Aceti
            </a>
            <p className='pl-1'>- Couple Wheel</p>
            <p className='pl-1'>- 2023</p>
        </C.Footer>
    )
}