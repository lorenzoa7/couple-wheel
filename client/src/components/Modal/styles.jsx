import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

export const Modal = tw(motion.div)`

    ${(props) => (
        (props.size === 'tiny' && 'h-1/5') ||
        (props.size === 'small' && 'h-2/5') ||
        'h-3/5'
    )}

    w-full
    mx-5
    my-auto
    rounded-xl
    flex
    flex-col
    items-center
    bg-gradient-to-b
    from-zinc-200
    to-zinc-300
    outline
    outline-4
    outline-black/90

    2xl:w-1/4
`