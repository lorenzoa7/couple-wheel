import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'


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

    ${(props) => (
        (props.theme === 'cyan' && 'bg-cyan-700') ||
        'bg-pink-700'
    )}

    w-3/4 
    p-3 
    rounded-lg 
    text-white 
    font-bold 
    flex 
    justify-center 
    items-center
    text-center
`

export const AccomplishButton = tw(motion.button)`
    w-4/6 
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
        (props.player === 'player1' && 'rounded-br-xl mb-auto') ||
        'rounded-tl-xl mt-auto'
    )}

    ${(props) => (
        (props.theme === 'cyan' && 'bg-cyan-400') ||
        'bg-pink-400'
    )}

    flex 
    flex-col 
    w-32
    h-48
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