import tw from 'tailwind-styled-components'

export const PageContainer = tw.div`
    relative
    min-h-screen
    w-screen
    flex
    flex-col
    gap-10
    xl:gap-0
    xl:h-screen
`

export const PageContent = tw.div`
    flex 
    flex-col
    h-full
    items-center
    justify-center
    gap-3

    xl:flex-row
`

export const Main = tw.main`
    flex
    p-10 
    gap-10 
    w-3/5 
    h-full
`

export const MdContainer = tw.div`
    ${(props) => (
        (props.$visible === false && 'hidden') ||
        'flex'
    )}

    items-center 
    justify-center
`