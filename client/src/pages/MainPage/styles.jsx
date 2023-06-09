import tw from 'tailwind-styled-components'

export const PageContainer = tw.div`
    h-screen
    w-screen
    flex
    flex-col
`

export const PageContent = tw.div`
    flex 
    flex-col
    h-[calc(100%-4rem)]
    items-center
    justify-center
    gap-3
    pb-5
    pt-8
    mt-auto

    2xl:flex-row
`

export const Main = tw.main`
    flex
    p-10 
    gap-10 
    w-3/5 
    h-full
`