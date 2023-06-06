import * as C from './styles'
import usePlayer from '../../../../hooks/usePlayer'

export default function Reroll({ cost = 2, paidCoinsOrder = [], setPaidCoinsOrder = null }) {

    const { playerData } = usePlayer()

    const range = (start, end) => {
        return Array.from({
            length: end - start + 1
        }, (_, index) => index)
    }

    const onDelete = index => {
        setPaidCoinsOrder(paidCoinsOrder => {
            return paidCoinsOrder.filter((_, i) => i !== index)
        })
    }

    return (
        <C.Container>
            <C.LabelTitle>Reroll Cost</C.LabelTitle>
            <C.CostContent>
                {range(0, cost).map(index =>
                    <C.CostCircle
                        theme={paidCoinsOrder[index] ? playerData[paidCoinsOrder[index]].theme : 'zinc'}
                        onClick={() => onDelete(index)}
                    />
                )}
            </C.CostContent>
        </C.Container>
    )
}