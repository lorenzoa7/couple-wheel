import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

export const Backdrop = tw(motion.div)`
    fixed
    inset-0
    h-full
    w-full
    bg-black/50
    flex
    items-center
    justify-center
    z-50
    backdrop-blur-sm
    duration-300
`