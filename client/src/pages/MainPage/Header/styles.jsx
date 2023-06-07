import tw from 'tailwind-styled-components'

export const AppTitle = tw.h1`
    text-left
    font-['pacifico'] 
    text-3xl 
    text-rose-700
`

export const Header = tw.header`
    flex 
    items-center 
    justify-between
    px-5
    fixed 
    top-0 
    left-0 
    bg-white 
    w-full 
    h-16
`

export const MenuIcon = tw.div`
    [&>*:first-child]:hover:scale-100

    relative
    cursor-pointer 
    w-6 
    h-6
`

export const MenuNav = tw.nav`
    ${(props) => (
        (props.$open === false && 'scale-0') ||
        'scale-100'
    )}

    flex
    flex-col
    items-center
    bg-white 
    h-fit
    w-44 
    absolute 
    top-7
    -left-36 
    z-20 
    shadow-2xl
    duration-150
    origin-top-right
`

export const MenuNavOption = tw.div`
    w-full 
    flex 
    justify-center 
    items-center 
    h-10
    duration-300
    cursor-pointer
    hover:bg-zinc-300
`

export const MenuContainer = tw.div`
    relative
`

export const MenuOptionLabel = tw.p`
    w-full
`