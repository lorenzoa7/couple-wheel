import tw from 'tailwind-styled-components'

const getThemeConfiguration = ({ theme = 'zinc', intensity = 300, hover = false, hoverSteps = 1, scrollbar = false }) => {
    if (theme === 'zinc') return 'bg-zinc-300'
    if (hover) return `bg-${theme}-${intensity} hover:bg-${theme}-${intensity + hoverSteps * 100}`
    if (scrollbar) return `bg-${theme}-${intensity} scrollbar-thumb-${theme}-900 scrollbar-track-${theme}-400`

    return `bg-${theme}-${intensity}`
}

export const Container = tw.div`
    flex 
    flex-col 
    items-center 
    justify-center 
    w-4/5 
    max-h-52 
    bg-zinc-900 
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

    ${(props) => {
        return getThemeConfiguration({ theme: props.theme, intensity: 600, hover: true, hoverSteps: -1 })
    }}

    ${(props) => (
        (props.theme === 'zinc' && 'cursor-auto') ||
        'cursor-pointer'
    )}

    h-6 
    w-6 
    rounded-full 
    duration-150
`