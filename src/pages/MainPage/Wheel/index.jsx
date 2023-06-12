import * as C from './styles'
import usePlayer from '../../../hooks/usePlayer'
import { useState, useEffect, useCallback, useRef } from 'react'
import { Wheel } from 'react-custom-roulette'
import Modal from '../../../components/Modal'
import { AnimatePresence } from 'framer-motion'
import Reroll from './Reroll'
import { VscDebugRestart } from 'react-icons/vsc'
import { useTranslation } from 'react-i18next'

export default function Roulette({ mustSpin, setMustSpin }) {

    const { playerData, findActivityById, themes, setPlayerData, getActivityIndex, clampText } = usePlayer()
    const [wheelData, setWheelData] = useState([{ option: 'Loading' }])
    const [modalOpen, setModalOpen] = useState(false)
    const [hasActivities, setHasActivities] = useState(false)
    const [coins, setCoins] = useState({ player1: 0, player2: 0 })
    const [paidCoins, setPaidCoins] = useState({ player1: 0, player2: 0 })
    const [paidCoinsOrder, setPaidCoinsOrder] = useState([])
    const [isReroll, setIsReroll] = useState(false)
    const { t } = useTranslation()

    const rerollButtonP1Ref = useRef()
    const rerollButtonP2Ref = useRef()

    const [chosenActivity, setChosenActivity] = useState(0)

    const getRandomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newChosenActivity = getRandomInt(0, wheelData.length)
            setChosenActivity(newChosenActivity)
            setMustSpin(true)
        }
    }

    const convertDataForWheel = useCallback(() => {
        const modifiedData = []

        const player1Activities = playerData.player1.activities.map((activity) => {
            return {
                id: activity.id,
                player: 'player1',
                option: clampText(activity.name, 18),
                style: { backgroundColor: themes['hex'][themes['name'].indexOf(playerData.player1.theme)], textColor: 'black' },
                optionSize: activity.weight
            }
        })

        const player2Activities = playerData.player2.activities.map((activity) => {
            return {
                id: activity.id,
                player: 'player2',
                option: clampText(activity.name, 18),
                style: { backgroundColor: themes['hex'][themes['name'].indexOf(playerData.player2.theme)], textColor: 'black' },
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

        if (modifiedData.length === 0) {
            const tempData = [
                {
                    id: 1,
                    player: 'player1',
                    option: clampText(t('wheel.no_activities'), 24),
                    style: { backgroundColor: themes['hex'][themes['name'].indexOf(playerData.player1.theme)], textColor: 'black' },
                    optionSize: 10
                },
                {
                    id: 2,
                    player: 'player2',
                    option: clampText(t('wheel.no_activities'), 24),
                    style: { backgroundColor: themes['hex'][themes['name'].indexOf(playerData.player2.theme)], textColor: 'black' },
                    optionSize: 10
                }
            ]

            setHasActivities(false)
            setWheelData(tempData)
        }

        else {
            setHasActivities(true)
            setWheelData(modifiedData)
        }

    }, [playerData, themes, t, clampText])

    const payCoin = player => {
        if (coins[player] > 0) {
            setCoins({ ...coins, [player]: coins[player] - 1 })
            setPaidCoins({ ...paidCoins, [player]: paidCoins[player] + 1 })
            setPaidCoinsOrder(paidCoinsOrder.concat(player))
        }
    }

    const retrieveCoin = player => {
        setCoins({ ...coins, [player]: coins[player] + 1 })
        setPaidCoins({ ...paidCoins, [player]: paidCoins[player] - 1 })
    }

    const getOtherPlayer = player => {
        const otherPlayer = player === 'player1' ? 'player2' : 'player1'
        return otherPlayer
    }

    const reroll = () => {
        const updatedPlayerData = { ...playerData }
        const player = wheelData[chosenActivity].player
        const { activities } = updatedPlayerData[player]
        const index = getActivityIndex(wheelData[chosenActivity].player, wheelData[chosenActivity].id)

        if (activities[index]) {
            activities[index] = {
                ...activities[index],
                reroll_cost: activities[index].reroll_cost < 9 ? activities[index].reroll_cost + 1 : 9
            }
        }

        updatedPlayerData['player1'] = { ...updatedPlayerData['player1'], coins: coins.player1 }
        updatedPlayerData['player2'] = { ...updatedPlayerData['player2'], coins: coins.player2 }


        setPlayerData(updatedPlayerData)
        setModalOpen(false)
        handleSpinClick()
    }

    const accomplish = () => {
        const updatedPlayerData = { ...playerData }
        const player = wheelData[chosenActivity].player
        const otherPlayer = getOtherPlayer(player)
        const { activities } = updatedPlayerData[player]
        const index = getActivityIndex(wheelData[chosenActivity].player, wheelData[chosenActivity].id)

        if (activities[index]) {
            activities[index] = {
                ...activities[index],
                reroll_cost: activities[index].reroll_cost > 3 ? activities[index].reroll_cost - 2 : 2,
                weight: activities[index].weight > 1 ? activities[index].weight - 1 : 1
            }
        }

        updatedPlayerData[otherPlayer] = { ...updatedPlayerData[otherPlayer], coins: coins[otherPlayer] + 1 }

        setPlayerData(updatedPlayerData)
        setModalOpen(false)
    }

    useEffect(() => {
        convertDataForWheel()
    }, [convertDataForWheel])

    useEffect(() => {
        setCoins({ player1: playerData.player1.coins, player2: playerData.player2.coins })
    }, [playerData])

    useEffect(() => {
        if (modalOpen && hasActivities) {
            if (paidCoinsOrder.length < findActivityById(wheelData[chosenActivity].player, wheelData[chosenActivity].id).reroll_cost) {
                setIsReroll(false)
            }
            else {
                setIsReroll(true)
            }
        }
    }, [modalOpen, paidCoinsOrder, chosenActivity, findActivityById, wheelData, hasActivities])

    return (
        <>
            <C.Main>
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={chosenActivity}
                    data={wheelData}

                    onStopSpinning={() => {
                        setMustSpin(false)
                        setPaidCoins({ player1: 0, player2: 0 })
                        setPaidCoinsOrder([])
                        setModalOpen(hasActivities ? true : false)
                    }}
                    spinDuration={0.3}
                    outerBorderWidth={3}
                    radiusLineWidth={3}
                    radiusLineColor={'white'}
                    pointerProps={{ style: { visibility: 'hidden' } }}
                    fontSize={15}
                    textDistance={60}
                />

                <C.SpinButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSpinClick}
                >
                    {t('wheel.spin_label')}
                </C.SpinButton>
            </C.Main>

            <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => null}
            >
                {modalOpen && hasActivities &&
                    <Modal>
                        <C.ModalContent>

                            <C.ModalPlayerContent player='player1' theme={playerData.player1.theme}>
                                <C.ModalPlayerHeader player='player1'>
                                    {clampText(playerData.player1.name, 17)}
                                </C.ModalPlayerHeader>

                                <C.ModalPlayerStuff player='player1'>
                                    <C.CoinContainer theme={playerData.player1.theme}>
                                        <C.Coin player='player1'>
                                            {coins.player1} ({paidCoins.player1})
                                        </C.Coin>
                                    </C.CoinContainer>

                                    <C.SkillsContainer>
                                        <C.RerollButton
                                            player='player1'
                                            theme={playerData.player1.theme}
                                            onClick={!isReroll ? () => payCoin('player1') : null}
                                            ref={rerollButtonP1Ref}
                                        >

                                            <VscDebugRestart size={'75%'} />

                                        </C.RerollButton>
                                    </C.SkillsContainer>
                                </C.ModalPlayerStuff>


                            </C.ModalPlayerContent>

                            <C.ModalMain>
                                <C.ModalLabel>{t('wheel.wheel_modal.drawn_activity_label')}:</C.ModalLabel>

                                <C.ModalCenter>
                                    <C.ModalActivity theme={playerData[wheelData[chosenActivity].player].theme}>
                                        <p className='break-before-all'>{clampText(findActivityById(wheelData[chosenActivity].player, wheelData[chosenActivity].id).name, 30)}</p>
                                    </C.ModalActivity>

                                    <Reroll
                                        cost={findActivityById(wheelData[chosenActivity].player, wheelData[chosenActivity].id).reroll_cost}
                                        paidCoinsOrder={paidCoinsOrder}
                                        setPaidCoinsOrder={setPaidCoinsOrder}
                                        retrieveCoin={retrieveCoin}
                                        refPlayer1={rerollButtonP1Ref}
                                        refPlayer2={rerollButtonP2Ref}
                                    />

                                    <C.AccomplishButton
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={isReroll ? () => reroll() : () => accomplish()}
                                    >
                                        {
                                            isReroll ? <p className='flex items-center justify-center gap-x-1'>{t('wheel.wheel_modal.reroll_label')} <VscDebugRestart size={'20%'} /></p> : t('wheel.wheel_modal.accomplish_label')
                                        }
                                    </C.AccomplishButton>

                                </C.ModalCenter>
                            </C.ModalMain>

                            <C.ModalPlayerContent player='player2' theme={playerData.player2.theme}>
                                <C.ModalPlayerHeader player='player2'>
                                    {clampText(playerData.player2.name, 17)}
                                </C.ModalPlayerHeader>

                                <C.ModalPlayerStuff player='player2'>
                                    <C.CoinContainer theme={playerData.player2.theme}>
                                        <C.Coin player='player2'>
                                            {coins.player2} ({paidCoins.player2})
                                        </C.Coin>
                                    </C.CoinContainer>

                                    <C.SkillsContainer>
                                        <C.RerollButton
                                            player='player2'
                                            theme={playerData.player2.theme}
                                            onClick={!isReroll ? () => payCoin('player2') : null}
                                            ref={rerollButtonP2Ref}
                                        >
                                            <VscDebugRestart size={'75%'} />
                                        </C.RerollButton>
                                    </C.SkillsContainer>
                                </C.ModalPlayerStuff>
                            </C.ModalPlayerContent>

                        </C.ModalContent>

                    </Modal>
                }
            </AnimatePresence>
        </>
    )
}