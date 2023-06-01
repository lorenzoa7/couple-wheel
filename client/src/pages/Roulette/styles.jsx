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
    justify-center
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
    relative
    flex
    items-center
    justify-center
    w-[600px]
    h-[600px]

    [&>*:first-child]:max-h-[unset]
    [&>*:first-child]:max-w-[unset]
    [&>*:first-child]:w-full
    [&>*:first-child]:h-full
`

export const SpinButton = tw.div`
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
    w-16 
    outline 
    outline-3
    outline-white
    h-16 
    absolute 
    z-10

    after:absolute
    after:top-0
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