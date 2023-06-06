import tw from 'tailwind-styled-components'

export const Container = tw.div`
    flex 
    flex-col 
    items-center 
    justify-center 
    w-4/5 
    max-h-52 
    bg-zinc-400 
    p-3 
    gap-2 
    rounded-xl
`

export const LabelTitle = tw.p`
    uppercase 
    text-white 
    font-medium 
    text-center
`

export const CostContent = tw.div`
    flex 
    flex-wrap 
    justify-center 
    items-center 
    gap-3 
    w-full 
    h-full
`

export const CostCircle = tw.div`
    h-6 
    w-6 
    rounded-full 
    bg-zinc-300
`