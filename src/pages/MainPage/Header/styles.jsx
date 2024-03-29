import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

export const AppTitle = tw.h1`
    text-left
    font-['pacifico'] 
    text-xl 
    w-full
    pr-1
    py-2
    duration-300
    bg-clip-text
    bg-gradient-to-r
    from-rose-700
    via-rose-400
    to-rose-700
    text-transparent
    bg-[length:200%]


    sm:text-3xl
`

export const TitleContainer = tw.div`
    flex 
    gap-3 
    items-center 
    justify-center 
    h-full 
    px-5
    cursor-pointer
    [&>*:first-child]:hover:brightness-90
    [&>*:last-child]:hover:bg-right
    select-none
`

export const TitleLogo = tw.img`
    h-4/6
    duration-300

    sm:h-5/6
`

export const Header = tw.header`
    flex 
    items-center 
    justify-between 
    bg-white 
    w-full 
    h-16
    z-30
`

export const MenuIcon = tw.div`
    [&>*:first-child]:hover:scale-100

    relative
    cursor-pointer 
    w-6 
    h-6
`

export const MenuNav = tw.nav`
    ${(props) => (
        (props.$open === false && 'scale-0') ||
        'scale-100'
    )}

    flex
    flex-col
    items-center
    bg-white 
    h-fit
    w-44 
    absolute 
    top-7
    -left-44
    z-20 
    shadow-2xl
    duration-150
    origin-top-right
    select-none
`

export const MenuNavOption = tw.div`
    w-full 
    flex 
    justify-center 
    items-center 
    h-10
    duration-300
    cursor-pointer
    hover:bg-zinc-300
`

export const MenuContainer = tw.div`
    flex
    gap-6
    justify-center
    items-center
    relative
    pr-5
`

export const MenuOptionLabel = tw.p`
    w-full
`

export const ModalContent = tw.div`
    flex  
    flex-col
    items-center 
    justify-center
    w-full 
    h-full
    px-3
    py-5
`

export const RestoreDataButton = tw(motion.button)`
    w-9/12 
    p-2
    rounded-lg 
    text-white
    font-medium
    bg-red-600
    flex 
    justify-center 
    items-center
    uppercase
    duration-300
    mt-2

    hover:bg-red-700
`

export const ConfirmationButton = tw(motion.button)`

    ${(props) => (
        (props.action === 'close' && 'bg-zinc-600 hover:bg-zinc-700') ||
        'bg-red-600 hover:bg-red-700'
    )}

    w-6/12 
    p-2
    rounded-lg 
    text-white
    font-medium
    flex 
    justify-center 
    items-center
    uppercase
    duration-300

    lg:w-4/12
`

export const ModalMain = tw.div`
    flex 
    flex-col
    items-center 
    justify-center 
    w-full 
    h-full
    gap-5
`

export const ModalTitle = tw.div`
    flex 
    justify-start 
    items-center 
    text-lg 
    font-medium 
    uppercase 
    p-3 
    w-full
    h-20
`

export const ModalButtons = tw.div`
    flex 
    items-center 
    justify-center 
    gap-8 
    w-full 
    p-5
`

export const ModalLabel = tw.p`
    font-medium 
    text-center
`

export const LanguageIconContainer = tw.div`
    relative 
    -left-10 
    flex 
    items-center 
    justify-center
    [&>*:first-child]:hover:scale-100
    cursor-pointer
`

export const LanguageIcon = tw.img`
    h-6 
    outline 
    outline-1 
    outline-black
`

export const RightContainer = tw.div`
    flex 
    items-center 
    justify-center
`

export const LanguageContainer = tw.div`
    flex
    gap-6
    justify-center
    items-center
    relative
`

export const LanguageNav = tw.nav`
    ${(props) => (
        (props.$open === false && 'scale-0') ||
        'scale-100'
    )}

    flex
    flex-col
    items-center
    bg-white 
    h-fit
    w-44 
    absolute 
    top-7
    -left-44
    z-30
    shadow-2xl
    duration-150
    origin-top-right
    select-none
`

export const LanguageNavOption = tw.div`

    ${(props) => (
        (props.$selected === true && 'bg-zinc-300') ||
        'bg-white'
    )}

    w-full 
    flex 
    justify-center 
    items-center 
    gap-5
    h-10
    px-5
    duration-300
    cursor-pointer
    hover:bg-zinc-300
`

export const LanguageOptionLabel = tw.p`
    w-full
`

export const HelpWrapper = tw.div`
    flex
    flex-col
    h-full
    w-full
    justify-center
    items-center
`

export const HelpAccordion = tw.div`
    w-full
`

export const HelpItem = tw.div`
    bg-rose-100
    mb-1
    px-3
    py-5
    rounded-lg
`

export const HelpQuestion = tw.div`
    text-rose-700
    font-bold
    flex
    justify-between
    items-center
    cursor-pointer
`

export const HelpAnswer = tw.div`

    ${(props) => (
        (props.$selected === true && 'max-h-44 lg:max-h-72 h-auto') ||
        'max-h-0'
    )}

    text-rose-500
    overflow-y-scroll
    pr-2
    transition-all
    duration-300
    scrollbar-thumb-rose-900
    scrollbar-track-rose-400
    scrollbar-thin
`

export const ConfigSection = tw.div`
    flex 
    flex-col 
    w-full
`

export const ConfigSectionLabel = tw.p`
    font-bold
    text-center
    h-16
    flex
    justify-center
    items-center
`

export const ConfigGroup = tw.div`
    flex
    items-center
    gap-1
`

export const ConfigInputGroup = tw.div`
    flex 
    flex-col 
    items-center 
    w-full
`

export const NumberInput = tw.input`
    ${(props) => (
        (props.$focus === true && 'border-zinc-900') ||
        'border-zinc-300'
    )}

    w-20 
    outline-none
    py-2
    text-center
    rounded
    border-2
    duration-300
    [&::-webkit-outer-spin-button]:appearance-none 
    [&::-webkit-inner-spin-button]:appearance-none
    [appearance:textfield]
`

export const NumberInputLabel = tw.p`
    font-medium
`

export const SelectionContainer = tw.div`
    flex 
    justify-center
    flex-wrap 
    gap-2
`

export const Option = tw.div`

    ${(props) => (
        (props.$selected === true && 'bg-rose-800') ||
        'bg-rose-500 hover:bg-rose-700'
    )}

    flex 
    items-center 
    justify-center 
    w-7
    h-8  
    rounded 
    font-medium
    text-white
    outline 
    outline-1
    outline-black
    cursor-pointer
    duration-300
`