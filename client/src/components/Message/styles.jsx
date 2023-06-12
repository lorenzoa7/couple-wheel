import tw from 'tailwind-styled-components'

export const Container = tw.div`
    absolute 
    z-40 
    top-24 
    left-8 
`

export const Message = tw.span`

    ${(props) => (
        (props.type === 'success' && 'bg-green-400/50 hover:bg-green-400/75') ||
        (props.type === 'error' && 'bg-red-400/50 hover:bg-red-400/75') ||
        'bg-cyan-400/50 hover:bg-cyan-400/75'
    )}

    relative
    p-3 
    rounded-xl 
    flex 
    items-center 
    justify-center 
    font-medium
    duration-150
    cursor-pointer
    text-center

    after:content-['✖']
    after:absolute
    after:-top-2
    after:right-0
    after:scale-125
    after:duration-150
    after:hover:scale-150
`