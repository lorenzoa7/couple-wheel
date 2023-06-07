import * as C from '../styles'
import usePlayer from '../../../../hooks/usePlayer'
import { AiFillDelete } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import Modal from '../../../../components/Modal'
import { AnimatePresence } from 'framer-motion'

export default function ActivitiesList({ player = 'player1' }) {

    const { findHighestId, getActivityIndex, playerData, setPlayerData } = usePlayer()

    const [hover, setHover] = useState(0)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedWeightActivity, setSelectedWeightActivity] = useState(null)
    const [coins, setCoins] = useState(0)

    const handleChange = e => {
        const { id, value } = e.target
        const playerActivities = playerData[player].activities
        const activityIndex = getActivityIndex(player, id)

        if (activityIndex !== -1) {
            const updatedActivities = [...playerActivities]
            updatedActivities[activityIndex] = {
                ...updatedActivities[activityIndex],
                name: value,
            }

            setPlayerData({ ...playerData, [player]: { ...playerData[player], activities: updatedActivities } })
        }
    }


    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            e.target.blur()
        }
    }

    const addActivity = () => {
        const newActivity = { id: findHighestId(player) + 1, name: `Activity ${playerData[player].activities.length + 1}`, reroll_cost: 2, weight: 10 }
        setPlayerData({ ...playerData, [player]: { ...playerData[player], activities: playerData[player].activities.concat(newActivity) } })
    }

    const deleteActivity = (player, activityId) => {
        const playerActivities = playerData[player].activities
        const updatedActivities = playerActivities.filter((activity) => activity.id !== activityId)

        setPlayerData({ ...playerData, [player]: { ...playerData[player], activities: updatedActivities } })
    }

    const openWeightDialog = activity => {
        setSelectedWeightActivity(activity)
        setModalOpen(true)
    }

    const resetWeightCost = weight => {
        const result = Math.ceil((10 - weight) / 2)
        return Math.max(result, 1)
    }

    const resetWeight = (activityWeight, activityId) => {
        const updatedPlayerData = { ...playerData }
        const { activities } = updatedPlayerData[player]
        const index = getActivityIndex(player, activityId)

        if (activities[index]) {
            activities[index] = {
                ...activities[index],
                weight: 10
            }
        }

        console.log(coins)
        updatedPlayerData[player] = { ...updatedPlayerData[player], coins: coins - resetWeightCost(activityWeight) }

        setPlayerData(updatedPlayerData)
        setModalOpen(false)
    }

    useEffect(() => {
        setCoins(playerData[player].coins)
    }, [playerData, player])

    return (
        <>
            <C.AddActivity theme={playerData[player].theme} onClick={addActivity}>+</C.AddActivity>
            {playerData[player].activities.length === 0 ? (
                <C.Label theme={playerData[player].theme}>Click the button below to create a new activity</C.Label>
            ) : (
                playerData[player].activities?.map((activity, index) => (
                    <C.ActivitySection key={index}>

                        <C.WeightBox
                            $is_max={activity.weight === 10}
                            theme={playerData[player].theme}
                            onClick={activity.weight !== 10 ? () => openWeightDialog(activity) : null}>
                            {activity.weight}
                        </C.WeightBox>

                        <C.Activity theme={playerData[player].theme} key={index}
                            onMouseEnter={() => setHover(activity.id)}
                            onMouseLeave={() => setHover(0)}>

                            <C.ActivityInput
                                id={activity.id}
                                value={activity.name}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                onClick={e => e.target.select()}
                            />
                            <C.DeleteActivity theme={playerData[player].theme} $hover={hover === activity.id} onClick={() => deleteActivity(player, activity.id)}>
                                <AiFillDelete size={'75%'} />
                            </C.DeleteActivity>
                        </C.Activity>
                    </C.ActivitySection>
                )))
            }
            <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => null}
            >
                {modalOpen &&
                    <Modal size='small' handleClose={() => setModalOpen(false)}>
                        <C.ModalContent>
                            <C.ModalMain>
                                <C.ModalLabel><C.ModalLabelActivity theme={playerData[player].theme}>{playerData[player].name}</C.ModalLabelActivity>, do you want reset <br /> <C.ModalLabelActivity theme={playerData[player].theme}>{selectedWeightActivity.name}</C.ModalLabelActivity> weight?</C.ModalLabel>

                                <C.PriceContainer>
                                    <C.PriceLabel>You have: </C.PriceLabel>
                                    <C.ModalCoin>
                                        {coins}
                                    </C.ModalCoin>
                                </C.PriceContainer>

                                <C.PriceContainer>
                                    <C.PriceLabel>It costs: </C.PriceLabel>
                                    <C.ModalCoin>
                                        {resetWeightCost(selectedWeightActivity.weight)}
                                    </C.ModalCoin>
                                </C.PriceContainer>

                                <C.ModalCenter>

                                    <C.WeightButton
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setModalOpen(false)}
                                        action='close'
                                    >
                                        Close
                                    </C.WeightButton>

                                    <C.WeightButton
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => resetWeight(selectedWeightActivity.weight, selectedWeightActivity.id)}
                                        action='reset'
                                        $is_disabled={playerData[player].coins < resetWeightCost(selectedWeightActivity.weight) ? true : false}
                                    >
                                        Reset
                                    </C.WeightButton>



                                </C.ModalCenter>
                            </C.ModalMain>
                        </C.ModalContent>
                    </Modal>
                }
            </AnimatePresence>
        </>
    )
}