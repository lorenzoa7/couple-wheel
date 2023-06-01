import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

export const Modal = tw(motion.div)`
    w-1/4
    h-2/5
    m-auto
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
`