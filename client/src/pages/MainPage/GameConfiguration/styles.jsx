import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

const getThemeConfiguration = ({ theme = 'pink', intensity = 300, hover = false, hoverSteps = 1, scrollbar = false, type = 'bg' }) => {
    if (type === 'bg') {
        if (hover) return `bg-${theme}-${intensity} hover:bg-${theme}-${intensity + hoverSteps * 100}`
        if (scrollbar) return `bg-${theme}-${intensity} scrollbar-thumb-${theme}-900 scrollbar-track-${theme}-400`
        return `bg-${theme}-${intensity}`
    }

    return `text-${theme}-${intensity}`
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
    ${(props) => (
        (props.$spinning === true && 'pointer-events-none contrast-75') ||
        'pointer-events-auto'
    )}

    flex
    p-10 
    gap-10 
    w-full
    h-[600px]
    duration-300

    2xl:w-[600px]
    2xl:h-full
`

export const Section = tw.section`
    w-full
    h-full
    flex 
    flex-col
`

export const PlayerContainer = tw.div`

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 700 })
    }}

    py-3 
    px-5
    flex 
    gap-3
    items-center 
    justify-between 
    text-lg 
    font-medium 
    text-white
    rounded-t
`

export const ActivitiesContainer = tw.div`

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 400, scrollbar: true })
    }}

    flex
    flex-col
    flex-grow
    items-center
    gap-2
    pt-2
    rounded-b
    pb-4
    pl-2
    overflow-y-scroll
    scrollbar-thin 
`

export const Activity = tw.div`

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 600 })
    }}

    w-[88%]
    h-full
    rounded 
    flex
    justify-center
    flex-none
    items-center 
    px-5
    gap-5
    text-white
    font-medium

    2xl:w-11/12
`

export const WeightBox = tw.div`

    ${(props) => {
        if (props.$is_max) return `${getThemeConfiguration({ theme: props.theme, intensity: 600, hover: false })} cursor-auto`
        return `${getThemeConfiguration({ theme: props.theme, intensity: 600, hover: true })} 
        cursor-pointer
        [&>*:first-child]:hover:scale-110
        [&>*:first-child]:hover:opacity-100`
    }}

    w-full 
    h-full 
    flex
    items-center
    justify-center
    rounded
    text-white
    font-medium
    duration-300
    select-none
    relative
`

export const WeightIcon = tw.div`
    
    ${(props) => (
        (props.$show === false && 'invisible') ||
        'visible'
    )}

    w-5
    h-5
    absolute
    bottom-0
    -left-3
    p-[0.12rem]
    rounded-full
    bg-white
    text-black
    opacity-80
    duration-300
    z-10
    flex
    items-center
    justify-center
`

export const ActivitySection = tw.div`
    h-12 
    w-11/12
    flex
    justify-center
    flex-none
    items-center
    gap-1
`

export const AddActivity = tw.button`

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 600, hover: true })
    }}

    w-32
    h-12
    rounded-xl
    text-3xl
    font-medium
    duration-300
    flex-none
    text-white
`

export const PlayerInput = tw.input`

    bg-transparent 
    border-none 
    outline-none 
    text-lg 
    font-medium 
    text-white 
    cursor-pointer
    duration-300
    px-2
    w-full

    hover:bg-rose-50/10
`

export const ActivityInput = tw.input`

    bg-transparent 
    border-none
    outline-none 
    cursor-pointer
    duration-300
    w-full
    px-2

    hover:bg-rose-50/10
`

export const DeleteActivity = tw.div`

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 700, hover: true, hoverSteps: 2 })
    }}

    ${(props) => (
        (props.$hover === true && 'scale-100') ||
        'scale-0'
    )}

    w-8 
    h-8 
    rounded
    flex 
    items-center 
    justify-center
    text-white
    duration-150
    cursor-pointer
`

export const Label = tw.p`

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: '700/20' })
    }}

    text-lg
    text-center
    p-3
    h-12
    rounded
    flex
    items-center
    text-white
`

export const ThemeContainer = tw.div`
    flex
    h-full
    relative
    gap-5
`

export const ThemeButton = tw.div`

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 300, hover: true })
    }}

    text-black
    flex
    items-center
    justify-center
    h-full 
    w-16
    text-sm
    px-3
    rounded
    cursor-pointer
    outline
    outline-2
    outline-white/75
    duration-300
    select-none
`

export const ThemeContent = tw.div`

    ${(props) => (
        (props.$open === true && 'scale-100') ||
        'scale-0'
    )}

    flex
    flex-col
    justify-center
    items-center
    h-48
    w-48
    p-2
    absolute 
    bg-white/90
    rounded-lg
    outline
    outline-2
    outline-black/90
    z-20 
    duration-150
    origin-top
    top-36
    left-1/4
    shadow-2xl
    -translate-x-2/3
    -translate-y-1/2

    2xl:left-1/2
    2xl:-translate-x-1/2
`

export const ThemeColors = tw.div`
    flex
    flex-wrap
    gap-x-3
    h-full
    w-full
    p-1
`

export const ThemeName = tw.p`

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, type: 'text', intensity: 700 })
    }}

    text-base
`

export const ThemeBox = tw.div`

    cursor-pointer

    ${(props) => (
        (props.$selected === true && `${getThemeConfiguration({ theme: props.theme, intensity: 500 })} outline outline-2 outline-rose-900`) ||
        (props.$is_disabled === true && `${getThemeConfiguration({ theme: props.theme, intensity: 500 })} outline-dashed outline-2 outline-rose-900 cursor-not-allowed`) ||
        getThemeConfiguration({ theme: props.theme, intensity: 300, hover: true, hoverSteps: 2 })
    )}

    w-12
    h-10
    duration-300
    transition-colors
    rounded
`

export const Coin = tw.span`

    relative
    font-bold
    flex 
    items-center
    justify-center
    pl-8 
    ml-auto

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
    before:left-0
    before:text-black
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
    select-none
`

export const ModalLabelActivity = tw.span`
    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 600, type: 'text' })
    }}
`

export const ModalCenter = tw.div`
    w-full 
    h-full 
    flex 
    gap-8
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
    select-none
`

export const WeightButton = tw(motion.button)`

    ${(props) => (
        (props.action === 'close' && 'bg-zinc-600 hover:bg-zinc-700') ||
        'bg-rose-600 hover:bg-rose-700'
    )}

    ${(props) => (
        (props.$is_disabled === true && 'pointer-events-none opacity-50') ||
        'pointer-events-auto opacity-100'
    )}

    w-4/12 
    p-2
    rounded-lg 
    text-white
    font-medium
    flex 
    justify-center 
    items-center
    uppercase
    duration-300
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
    h-32
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
    h-48 
    w-full 
    items-center 
    justify-center 
    flex-col 
    p-3 
    mt-10
    gap-5
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

export const ModalCoin = tw.span`

    relative
    font-bold
    pl-8 
    w-12
    text-center

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
    before:left-0
`

export const SkillsContainer = tw.div`
    flex 
    justify-center
    items-center 
    w-full 
    h-full
`

export const PriceContainer = tw.div`
    flex 
    justify-center 
    items-center 
    gap-3 
    font-medium
`

export const PriceLabel = tw.p`
    w-24 
    text-center
`
