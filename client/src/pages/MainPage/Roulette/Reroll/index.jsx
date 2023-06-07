import * as C from './styles'
import usePlayer from '../../../../hooks/usePlayer'
import { useRef } from 'react'
import AnimatedCircle from './AnimatedCircle'

export default function Reroll({ cost = 2, paidCoinsOrder = [], setPaidCoinsOrder = null,
    retrieveCoin = null, refPlayer1 = null, refPlayer2 = null }) {

    const { playerData } = usePlayer()
    const costCircleRefs = useRef([])

    const range = (start, end) => {
        return Array.from({
            length: end - start
        }, (_, index) => index)
    }

    const onDelete = index => {
        setPaidCoinsOrder(paidCoinsOrder => {
            return paidCoinsOrder.filter((_, i) => i !== index)
        })
        retrieveCoin(paidCoinsOrder[index])
    }


    const addToRefs = el => {
        if (el && !costCircleRefs.current.includes(el)) {
            costCircleRefs.current.push(el)
        }

    }


    return (
        <C.Container>
            <C.LabelTitle>Reroll Cost</C.LabelTitle>
            <C.CostContent>
                {range(0, cost).map(index =>
                    <C.CostCircle
                        key={index}
                        onClick={() => onDelete(index)}
                        ref={addToRefs}
                    >

                        <AnimatedCircle
                            showAnimatedCircle={paidCoinsOrder[index]}
                            initialTop={paidCoinsOrder[index] === 'player1' ? refPlayer1.current?.offsetTop : refPlayer2.current?.offsetTop}
                            initialLeft={paidCoinsOrder[index] === 'player1' ? refPlayer1.current?.offsetLeft : refPlayer2.current?.offsetLeft}
                            destinationTop={costCircleRefs.current[index]?.offsetTop}
                            destinationLeft={costCircleRefs.current[index]?.offsetLeft}
                            theme={paidCoinsOrder[index] ? playerData[paidCoinsOrder[index]].theme : 'zinc'}
                        />
                    </C.CostCircle>
                )}
            </C.CostContent>
        </C.Container>
    )
}