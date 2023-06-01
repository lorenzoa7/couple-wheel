import tw from 'tailwind-styled-components'

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

    ${(props) => (
        (props.theme === 'cyan' && 'bg-cyan-700') ||
        'bg-pink-700'
    )}

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

    ${(props) => (
        (props.theme === 'cyan' && 'bg-cyan-400 scrollbar-thumb-cyan-900 scrollbar-track-cyan-400') ||
        'bg-pink-400 scrollbar-thumb-pink-900 scrollbar-track-pink-400'
    )}

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

    ${(props) => (
        (props.theme === 'cyan' && 'bg-cyan-500 text-black') ||
        'bg-pink-500 text-white'
    )}

    h-12 
    w-11/12 
    rounded 
    flex
    justify-center
    flex-none
    items-center 
    px-5
    gap-5
`

export const AddActivity = tw.button`

    ${(props) => (
        (props.theme === 'cyan' && 'bg-cyan-500 hover:bg-cyan-600 text-black') ||
        'bg-pink-500 hover:bg-pink-600 text-white'
    )}

    w-32
    h-12
    rounded-xl
    text-3xl
    font-medium
    duration-300
    flex-none
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

    hover:bg-rose-50/10
`

export const ActivityInput = tw.input`

    ${(props) => (
        (props.theme === 'cyan' && 'hover:bg-cyan-50/10') ||
        'hover:bg-pink-50/10'
    )}

    bg-transparent 
    border-none 
    outline-none 
    cursor-pointer
    duration-300
    w-full
`

export const DeleteActivity = tw.div`

    ${(props) => (
        (props.theme === 'cyan' && 'bg-cyan-700 hover:bg-cyan-900') ||
        'bg-pink-700 hover:bg-pink-900'
    )}

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

    ${(props) => (
        (props.theme === 'cyan' && 'bg-cyan-700/20 text-black') ||
        'bg-pink-700/20 text-white'
    )}

    text-lg
    p-3
    h-12
    rounded
    flex
    items-center
`

export const ThemeButton = tw.div`

    ${(props) => (
        (props.theme === 'cyan' && 'bg-cyan-300 hover:bg-cyan-400') ||
        'bg-pink-300 hover:bg-pink-400'
    )}

    text-black
    flex
    items-center
    justify-center
    h-full 
    text-sm
    px-3
    rounded
    cursor-pointer
    outline
    outline-2
    outline-white/75
    duration-300
`