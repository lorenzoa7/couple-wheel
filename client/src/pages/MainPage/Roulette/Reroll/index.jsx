import * as C from './styles'

export default function Reroll({ cost = 2 }) {

    const range = (start, end) => {
        return Array.from({
            length: end - start + 1
        }, (_, index) => index + 1)
    }

    return (
        <C.Container>
            <C.LabelTitle>Reroll Cost</C.LabelTitle>
            <C.CostContent>
                {range(0, cost).map(_ =>
                    <C.CostCircle />
                )}
            </C.CostContent>
        </C.Container>
    )
}