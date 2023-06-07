import tw from 'tailwind-styled-components'

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
    w-[600px]
    h-4/5
    duration-300
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

    p-3 
    px-5
    flex 
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

    h-12 
    w-11/12 
    rounded 
    flex
    justify-center
    flex-none
    items-center 
    px-5
    gap-5
    text-white
    font-medium
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

    after:content-['Theme']
    after:absolute
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
    z-30 
    duration-150
    origin-top
    top-36
    left-1/2
    shadow-2xl
    -translate-x-1/2
    -translate-y-1/2
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
        return getThemeConfiguration({ theme: props.theme, type: 'text', intensity: 700})
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
    mr-5

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