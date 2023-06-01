import tw from 'tailwind-styled-components'

export const PageContainer = tw.div`
    h-screen
    w-screen
`

export const PageContent = tw.div`
    flex 
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
    flex
    p-10 
    gap-10 
    w-3/5 
    h-full
`