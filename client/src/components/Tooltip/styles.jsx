import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

export const Tooltip = tw(motion.div)`
    absolute 
    left-1/2 
    -translate-x-1/2 
    -bottom-11 
    h-8 
    py-1 
    px-2 
    bg-zinc-800 
    rounded-3xl 
    text-white 
    text-sm 
    flex 
    items-center 
    justify-center 
    opacity-75
    scale-0
    duration-150
`