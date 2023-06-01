import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

export const Backdrop = tw(motion.div)`
    absolute
    top-0
    left-0
    h-screen
    w-screen
    bg-black/50
    flex
    items-center
    justify-center
    z-50
    backdrop-blur-sm
    duration-300
`