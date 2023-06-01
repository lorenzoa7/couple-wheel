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
    left-0
    right-0
    top-3
    text-center
    font-['pacifico'] 
    text-4xl 
    text-rose-700
`

export const Main = tw.main`
    flex
    p-10 
    gap-10 
    w-3/5 
    h-full
`

export const Section = tw.section`
    w-1/2
    h-full
    flex 
    flex-col
`

export const PlayerContainer = tw.div`

    ${(props) => (
        (props.theme === 'cyan' && 'bg-cyan-700') ||
        'bg-rose-700'
    )}

    p-3 
    flex 
    items-center 
    justify-center 
    text-lg 
    font-medium 
    text-white
    rounded-t
`

export const ActivitiesContainer = tw.div`

    ${(props) => (
        (props.theme === 'cyan' && 'bg-cyan-400 scrollbar-thumb-cyan-900 scrollbar-track-cyan-400') ||
        'bg-rose-400 scrollbar-thumb-rose-900 scrollbar-track-rose-400'
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
        'bg-rose-500 text-white'
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
        'bg-rose-500 hover:bg-rose-600 text-white'
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
    text-center
    cursor-pointer
    duration-300

    hover:bg-rose-50/10
`

export const ActivityInput = tw.input`

    ${(props) => (
        (props.theme === 'cyan' && 'hover:bg-cyan-50/10') ||
        'hover:bg-rose-50/10'
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
        'bg-rose-700 hover:bg-rose-900'
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
        'bg-rose-700/20 text-white'
    )}

    text-lg
    p-3
    h-12
    rounded
    flex
    items-center
`