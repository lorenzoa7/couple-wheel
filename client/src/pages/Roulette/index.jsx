import * as C from './styles'
import usePlayer from '../../hooks/usePlayer'
import { useState, useEffect, useCallback } from 'react'
import { Wheel } from 'react-custom-roulette'

export default function Roulette() {

    const { playerData } = usePlayer()
    const [mustSpin, setMustSpin] = useState(false)
    const [wheelData, setWheelData] = useState([{option: 'Loading'}])

    const [chosenActivity, setChosenActivity] = useState(0)

    const getRandomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        console.log (min, max)
        return Math.floor(Math.random() * (max - min) + min)
      }
      
    const handleSpinClick = () => {
        if (!mustSpin) {
            const newChosenActivity = getRandomInt(0, wheelData.length)
            setChosenActivity(newChosenActivity)
            setMustSpin(true)
        }
    }

    const convertThemeToColor = theme => {
        switch (theme) {
            case 'rose':
                return '#fb7185'
            case 'cyan':
                return '#22d3ee'
            default:
                return '#fb7185'
        }
    }

    const convertDataForWheel = useCallback(() => {
        const modifiedData = []

        const player1Activities = playerData.player1.activities.map((activity) => {
            return {
                option: activity.name,
                style: { backgroundColor: convertThemeToColor(playerData.player1.theme), textColor: 'black' },
                optionSize: activity.weight
            }
        })

        const player2Activities = playerData.player2.activities.map((activity) => {
            return {
                option: activity.name,
                style: { backgroundColor: convertThemeToColor(playerData.player2.theme), textColor: 'black' },
                optionSize: activity.weight
            }
        })

        const maxActivities = Math.max(player1Activities.length, player2Activities.length)

        for (let i = 0; i < maxActivities; i++) {
            if (player1Activities[i]) {
                modifiedData.push(player1Activities[i]);
            }

            if (player2Activities[i]) {
                modifiedData.push(player2Activities[i]);
            }
        }

        setWheelData(modifiedData)
    }, [playerData])

    useEffect(() => {
        convertDataForWheel()
    }, [convertDataForWheel])


    return (
        <C.PageContainer>
            <C.AppTitle>Roleta do Casal</C.AppTitle>
            <C.PageContent>
                <C.Main>
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={chosenActivity}
                        data={wheelData}

                        onStopSpinning={() => {
                            setMustSpin(false)
                            alert(wheelData[chosenActivity].option)
                        }}
                        spinDuration={0.3}
                        outerBorderWidth={3}
                        radiusLineWidth={3}
                        radiusLineColor={'white'}
                    />
                    <div onClick={handleSpinClick} className='flex items-center justify-center rounded-full cursor-pointer duration-300 bg-blue-600 hover:bg-blue-900 w-16 outline-2 outline-black h-16 absolute z-10'>Spin</div>
                </C.Main>
            </C.PageContent>
        </C.PageContainer>
    )
}