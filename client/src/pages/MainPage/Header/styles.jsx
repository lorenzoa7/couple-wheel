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