import tw from 'tailwind-styled-components'


export const PageContainer = tw.div`
    flex
    flex-col
    justify-center
    items-center
    h-screen
    w-screen
    py-5
    gap-3
`

export const AppTitle = tw.h1`
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
    w-full 
    flex 
    flex-col
`

export const PlayerContainer = tw.div`

    ${(props) => (
        (props.color === 'blue' && 'bg-cyan-700') ||
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
        (props.color === 'blue' && 'bg-cyan-400') ||
        'bg-rose-400'
    )}

    flex
    flex-col
    flex-grow
    items-center
    gap-2
    pt-2
    rounded-b
    pb-4
`

export const Activity = tw.div`

    ${(props) => (
        (props.color === 'blue' && 'bg-cyan-500 text-black') ||
        'bg-rose-500 text-white'
    )}

    h-12 
    w-11/12 
    rounded 
    flex 
    items-center 
    px-5
`

export const AddActivity = tw.button`

    ${(props) => (
        (props.color === 'blue' && 'bg-cyan-500 hover:bg-cyan-600 text-black') ||
        'bg-rose-500 hover:bg-rose-600 text-white'
    )}

    w-32
    h-12
    rounded-xl
    text-3xl
    font-medium
    duration-300
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