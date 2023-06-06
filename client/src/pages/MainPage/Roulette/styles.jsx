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
    p-3 
    gap-3

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

export const CoinContainer = tw.div`

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 500 })
    }}

    rounded-lg 
    p-2
    flex 
    items-center 
    justify-center
`

export const Coin = tw.span`

    ${(props) => (
        (props.player === 'player2' && 'pr-8 before:right-0') ||
        'pl-8 before:left-0'
    )}

    relative
    font-bold

    before:content-['$']
    before:flex 
    before:items-center 
    before:font-bold 
    before:justify-center 
    before:h-6 
    before:w-6 
    before:rounded-full 
    before:bg-gradient-to-r 
    before:from-yellow-200 
    before:to-yellow-500 
    before:outline 
    before:outline-2 
    before:outline-black
    before:absolute
`

export const SkillsContainer = tw.div`
    flex 
    justify-center
    items-center 
    w-full 
    h-full
`

export const RerollButton = tw.div`

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 500, hover: true })
    }}

    ${(props) => (
        (props.player === 'player2' && 'after:-left-1') ||
        'after:-right-1'
    )}

    relative
    w-14 
    h-14 
    rounded-full 
    flex 
    items-center 
    justify-center
    cursor-pointer
    duration-300

    after:content-['1']
    after:flex 
    after:items-center 
    after:font-bold 
    after:justify-center 
    after:h-5
    after:w-5 
    after:rounded-full 
    after:bg-gradient-to-r 
    after:from-yellow-200 
    after:to-yellow-500 
    after:outline 
    after:outline-2 
    after:outline-black
    after:absolute
    after:-bottom-1
    after:duration-300
    hover:after:scale-110
`