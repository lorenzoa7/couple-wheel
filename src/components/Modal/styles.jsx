import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

export const Modal = tw(motion.div)`

    ${(props) => (
        (props.size === 'tiny' && 'h-1/5') ||
        (props.size === 'small' && 'h-3/5 md:h-2/5') ||
        (props.size === 'big' && 'h-[95%] md:h-4/5') ||
        'h-4/5 lg:h-3/5'
    )}

    w-11/12
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

    md:w-3/4
    xl:w-2/4
    2xl:w-1/4
`