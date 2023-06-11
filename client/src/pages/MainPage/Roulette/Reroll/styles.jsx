import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

const getThemeConfiguration = ({ theme = 'zinc', intensity = 300, hover = false, hoverSteps = 1, scrollbar = false }) => {
    if (theme === 'zinc') return 'bg-zinc-300'
    if (hover) return `bg-${theme}-${intensity} hover:bg-${theme}-${intensity + hoverSteps * 100}`
    if (scrollbar) return `bg-${theme}-${intensity} scrollbar-thumb-${theme}-900 scrollbar-track-${theme}-400`

    return `bg-${theme}-${intensity}`
}

export const Container = tw.div`
    flex 
    flex-col 
    items-center 
    justify-center 
    w-3/5 
    max-h-52 
    bg-zinc-900 
    p-3 
    gap-2 
    rounded-xl

    2xl:w-4/5
`

export const LabelTitle = tw.p`
    uppercase 
    text-white 
    font-medium 
    text-center
    select-none
`

export const CostContent = tw.div`
    flex 
    flex-wrap 
    justify-center 
    items-center 
    gap-3 
    w-full 
    h-full
`

export const CostCircle = tw.div`
    h-6 
    w-6 
    rounded-full 
    duration-150
    bg-zinc-300
`

export const AnimatedCostCircle = tw(motion.div)`

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 600, hover: false, hoverSteps: -1 })
    }}

    w-6 
    h-6 
    rounded-full 
    absolute
    cursor-pointer
    z-10
`