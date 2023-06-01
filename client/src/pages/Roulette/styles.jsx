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
    relative
    flex
    items-center
    justify-center
    h-full
`