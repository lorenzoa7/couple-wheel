import tw from 'tailwind-styled-components'

export const Message = tw.span`

    ${(props) => (
        (props.type === 'success' && 'bg-green-400/50 hover:bg-green-400/75') ||
        (props.type === 'error' && 'bg-red-400/50 hover:bg-red-400/75') ||
        'bg-cyan-400/50 hover:bg-cyan-400/75'
    )}

    absolute 
    z-40 
    top-24 
    left-1/2 
    -translate-x-1/2 
    p-3 
    rounded-xl 
    flex 
    items-center 
    justify-center 
    font-medium
    duration-150
    cursor-pointer
`