import tw from 'tailwind-styled-components'

export const PageContainer = tw.div`
    h-screen
    w-screen
    flex
    flex-col
    gap-20

    2xl:gap-0
`

export const PageContent = tw.div`
    flex 
    flex-col
    h-full
    items-center
    justify-center
    gap-3

    2xl:flex-row
`

export const Main = tw.main`
    flex
    p-10 
    gap-10 
    w-3/5 
    h-full
`