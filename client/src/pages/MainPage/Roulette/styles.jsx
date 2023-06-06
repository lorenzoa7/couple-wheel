import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

const getThemeConfiguration = ({ theme = 'pink', intensity = 300, hover = false, hoverSteps = 1, scrollbar = false }) => {
    if (hover) return `bg-${theme}-${intensity} hover:bg-${theme}-${intensity + hoverSteps * 100}`
    if (scrollbar) return `bg-${theme}-${intensity} scrollbar-thumb-${theme}-900 scrollbar-track-${theme}-400`

    return `bg-${theme}-${intensity}`
}

export const PageContainer = tw.div`
    h-screen
    w-screen
`

export const PageContent = tw.div`
    flex 
    flex-col
    h-full
    items-center
    justify-center
    gap-3
    pb-5
    pt-8
`

export const AppTitle = tw.h1`
    absolute
    left-5
    right-0
    top-3
    text-left
    font-['pacifico'] 
    text-4xl 
    text-rose-700
`

export const Main = tw.main`
    relative
    flex
    items-center
    justify-center
    w-[600px]
    h-[600px]

    [&>div:first-child]:max-h-[unset]
    [&>div:first-child]:max-w-[unset]
    [&>div:first-child]:w-full
    [&>div:first-child]:h-full
`

export const SpinButton = tw(motion.button)`
    flex 
    items-center 
    justify-center 
    rounded-full 
    cursor-pointer 
    duration-300 
    text-white
    uppercase
    font-bold
    bg-zinc-800 
    hover:bg-zinc-900 
    w-20 
    h-20
    outline 
    outline-3
    outline-white
    absolute 
    z-10

    after:absolute
    after:top-1
    after:-right-2
    after:w-0 
    after:h-0 
    after:border-b-[15px] 
    after:border-b-zinc-800
    after:border-x-[15px] 
    after:border-x-transparent 
    after:border-solid
    after:hover:border-b-zinc-900
    after:duration-300
    after:rotate-[45deg]
`

export const ModalContent = tw.div`
    flex  
    items-center 
    w-full 
    h-full 
    gap-3
`

export const ModalLabel = tw.p`
    text-xl 
    font-bold 
    uppercase
    text-center
`   

export const ModalCenter = tw.div`
    w-full 
    h-full 
    flex 
    flex-col 
    gap-10 
    items-center 
    justify-center
`

export const ModalActivity = tw.div`

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 400 })
    }}

    w-3/4 
    p-3 
    rounded-lg 
    font-bold 
    flex 
    justify-center 
    items-center
    text-center
    outline-dashed
    outline-2
    outline-black/50
`

export const AccomplishButton = tw(motion.button)`
    w-9/12 
    p-2
    rounded-lg 
    text-white
    font-medium
    bg-rose-600
    flex 
    justify-center 
    items-center
    uppercase
    duration-300

    hover:bg-rose-700
`

export const ModalPlayers = tw.div`
    w-full 
    h-32 
    mt-auto 
    flex 
    rounded-b-xl 
    gap-10
`

export const ModalPlayerContent = tw.div`
    
    ${(props) => (
        (props.player === 'player1' && 'rounded-br-xl rounded-tl-xl mb-auto') ||
        'rounded-tl-xl rounded-br-xl mt-auto'
    )}

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 400 })
    }}

    flex 
    flex-col 
    w-2/3
    h-48

    outline-double
    outline-2
    outline-black/50
`

export const ModalPlayerHeader = tw.div`

    ${(props) => (
        (props.player === 'player2' && 'text-right') ||
        'text-left'
    )}

    font-bold 
    p-3 
    uppercase
`

export const ModalMain = tw.div`
    flex 
    h-full 
    w-full 
    items-center 
    justify-center 
    flex-col 
    p-3 
    mt-10
`