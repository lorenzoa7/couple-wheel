import * as C from './styles'
import usePlayer from '../../hooks/usePlayer'
import { useState, useEffect, useCallback } from 'react'
import { Wheel } from 'react-custom-roulette'
import Modal from '../../components/Modal'
import { AnimatePresence } from 'framer-motion'

export default function Roulette() {

    const { playerData } = usePlayer()
    const [mustSpin, setMustSpin] = useState(false)
    const [wheelData, setWheelData] = useState([{ option: 'Loading' }])
    const [modalOpen, setModalOpen] = useState(false)

    const [chosenActivity, setChosenActivity] = useState(0)

    const getRandomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        console.log(min, max)
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
        <>


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
                                setModalOpen(!modalOpen)
                            }}
                            spinDuration={0.3}
                            outerBorderWidth={3}
                            radiusLineWidth={3}
                            radiusLineColor={'white'}
                            pointerProps={{ style: { visibility: 'hidden' } }}
                        />
                        <C.SpinButton
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleSpinClick}
                        >
                            Spin
                        </C.SpinButton>
                    </C.Main>
                </C.PageContent>
            </C.PageContainer>

            <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => null}
            >
                {modalOpen &&
                    <Modal>
                        <C.ModalContent>
                            <C.ModalLabel>A atividade sorteada foi:</C.ModalLabel>

                            <C.ModalMain>
                                <C.ModalActivity>
                                    {wheelData[chosenActivity].option}
                                </C.ModalActivity>

                                <C.AccomplishButton
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setModalOpen(false)}
                                >
                                    Realizar
                                </C.AccomplishButton>
                            </C.ModalMain>


                            <C.ModalPlayers>
                                <C.ModalPlayer1>
                                    <C.ModalPlayerHeader>
                                        Lorenzo
                                    </C.ModalPlayerHeader>
                                </C.ModalPlayer1>

                                <C.ModalPlayer2>
                                    <C.ModalPlayerHeader player='player2'>
                                        Brenda
                                    </C.ModalPlayerHeader>
                                </C.ModalPlayer2>
                            </C.ModalPlayers>

                        </C.ModalContent>

                    </Modal>
                }
            </AnimatePresence>
        </>
    )
}