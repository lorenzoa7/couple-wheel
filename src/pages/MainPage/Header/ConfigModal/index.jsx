import * as C from '../styles'
import usePlayer from '../../../../hooks/usePlayer'
import { AnimatePresence } from 'framer-motion'
import Modal from '../../../../components/Modal'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

export default function ConfigModal({ openConfigModal, setOpenConfigModal, openConfirmationModal, setOpenConfirmationModal }) {
    const { setPlayerData, defaultData, configData, setConfigData, defaultConfigData, updateRerollCosts } = usePlayer()
    const { t } = useTranslation()

    const range = (start, stop) =>
        Array.from({ length: stop + 1 - start }, (_, i) => start + i)

    const restoreGameData = () => {
        setPlayerData(defaultData)
        setConfigData(defaultConfigData)
        setOpenConfirmationModal(false)
    }

    const [onFocusHandler, setOnFocusHandler] = useState({
        drawn_player: false,
        opposite_player: false,
        reroll_skill_cost: false,
        reset_weight_multiplier: false
    })

    const [collectedCoins, setCollectedCoins] = useState({ drawn_player: 0, opposite_player: 0 })
    const [rerollSkillCost, setRerollSkillCost] = useState(1)
    const [resetWeightMultiplier, setResetWeightMultiplier] = useState(1)
    const [rerollCostIncrease, setRerollCostIncrease] = useState(1)
    const [rerollCostDecrease, setRerollCostDecrease] = useState(2)
    const [weightDecreaseRate, setWeightDecreaseRate] = useState(1)
    const [rerollMinCost, setRerollMinCost] = useState(2)

    const handleUpdateConfig = (configType) => {
        switch (configType) {
            case 'collected_coins':
                setConfigData({ ...configData, collected_coins: collectedCoins })
                break
            case 'reroll_skill_cost':
                setConfigData({ ...configData, reroll_skill_cost: rerollSkillCost })
                break
            case 'reset_weight_multiplier':
                setConfigData({ ...configData, reset_weight_multiplier: resetWeightMultiplier })
                break
            default:
                break
        }
    }

    useEffect(() => {
        setCollectedCoins(configData.collected_coins)
        setRerollSkillCost(configData.reroll_skill_cost)
        setResetWeightMultiplier(configData.reset_weight_multiplier)
        setRerollCostIncrease(configData.reroll_cost_increase)
        setRerollCostDecrease(configData.reroll_cost_decrease)
        setWeightDecreaseRate(configData.weight_decrease_rate)
        setRerollMinCost(configData.reroll_min_cost)
        updateRerollCosts()
    }, [configData, openConfigModal])

    return (
        <>
            <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => null}
            >
                {openConfigModal &&
                    <Modal
                        handleClose={() => setOpenConfigModal(false)}
                        size='big'
                        animation='fadeIn'>

                        <C.ModalContent>
                            <C.ModalTitle>
                                {t('config.title')}
                            </C.ModalTitle>
                            <C.ModalMain>
                                <C.ConfigSection>
                                    <C.ConfigGroup>
                                        <C.ConfigInputGroup>
                                            <C.ConfigSectionLabel>Coins Earned <br/> (Drawn Player)</C.ConfigSectionLabel>
                                            <C.NumberInput
                                                name="drawn_player"
                                                type="number"
                                                value={collectedCoins.drawn_player}
                                                $focus={onFocusHandler.drawn_player}
                                                onChange={e => setCollectedCoins({ ...collectedCoins, drawn_player: parseInt(e.target.value) })}
                                                onFocus={e => {
                                                    setOnFocusHandler({
                                                        ...onFocusHandler,
                                                        [e.target.name]: true,
                                                    });
                                                    e.target.select();
                                                }}
                                                onBlur={e => {
                                                    setOnFocusHandler({
                                                        ...onFocusHandler,
                                                        [e.target.name]: false,
                                                    });
                                                    handleUpdateConfig('collected_coins')
                                                }}
                                            />
                                        </C.ConfigInputGroup>

                                        <C.ConfigInputGroup>
                                            <C.ConfigSectionLabel>Coins Earned <br /> (Opposite Player)</C.ConfigSectionLabel>
                                            <C.NumberInput
                                                name="opposite_player"
                                                type="number"
                                                value={collectedCoins.opposite_player}
                                                $focus={onFocusHandler.opposite_player}
                                                onChange={e => setCollectedCoins({ ...collectedCoins, opposite_player: parseInt(e.target.value) })}
                                                onFocus={e => {
                                                    setOnFocusHandler({
                                                        ...onFocusHandler,
                                                        [e.target.name]: true,
                                                    });
                                                    e.target.select();
                                                }}
                                                onBlur={e => {
                                                    setOnFocusHandler({
                                                        ...onFocusHandler,
                                                        [e.target.name]: false,
                                                    });
                                                    handleUpdateConfig('collected_coins')
                                                }}
                                            />
                                        </C.ConfigInputGroup>
                                    </C.ConfigGroup>
                                </C.ConfigSection>

                                <C.ConfigSection>
                                    <C.ConfigGroup>
                                        <C.ConfigInputGroup>
                                            <C.ConfigSectionLabel>Reroll Skill Cost</C.ConfigSectionLabel>
                                            <C.NumberInput
                                                name="reroll_skill_cost"
                                                type="number"
                                                value={rerollSkillCost}
                                                $focus={onFocusHandler.reroll_skill_cost}
                                                onChange={e => setRerollSkillCost(parseInt(e.target.value))}
                                                onFocus={e => {
                                                    setOnFocusHandler({
                                                        ...onFocusHandler,
                                                        [e.target.name]: true,
                                                    });
                                                    e.target.select();
                                                }}
                                                onBlur={e => {
                                                    setOnFocusHandler({
                                                        ...onFocusHandler,
                                                        [e.target.name]: false,
                                                    });
                                                    handleUpdateConfig('reroll_skill_cost')
                                                }}
                                            />
                                        </C.ConfigInputGroup>

                                        <C.ConfigInputGroup>
                                            <C.ConfigSectionLabel>Reset Weight Multiplier</C.ConfigSectionLabel>
                                            <C.NumberInput
                                                name="reset_weight_multiplier"
                                                type="number"
                                                value={resetWeightMultiplier}
                                                $focus={onFocusHandler.reset_weight_multiplier}
                                                onChange={e => setResetWeightMultiplier(parseInt(e.target.value))}
                                                onFocus={e => {
                                                    setOnFocusHandler({
                                                        ...onFocusHandler,
                                                        [e.target.name]: true,
                                                    });
                                                    e.target.select();
                                                }}
                                                onBlur={e => {
                                                    setOnFocusHandler({
                                                        ...onFocusHandler,
                                                        [e.target.name]: false,
                                                    });
                                                    handleUpdateConfig('reset_weight_multiplier')
                                                }}
                                            />
                                        </C.ConfigInputGroup>

                                    </C.ConfigGroup>

                                </C.ConfigSection>

                                <C.ConfigSection>
                                    <C.ConfigSectionLabel>Reroll Cost Increase (after reroll)</C.ConfigSectionLabel>

                                    <C.SelectionContainer>
                                        {range(1, 7).map(num => (
                                            <C.Option
                                                key={num}
                                                $selected={num === rerollCostIncrease}
                                                onClick={() => {
                                                    setRerollCostIncrease(num)
                                                    setConfigData({ ...configData, reroll_cost_increase: num })
                                                }}
                                            >
                                                {num}
                                            </C.Option>
                                        ))}
                                    </C.SelectionContainer>
                                </C.ConfigSection>

                                <C.ConfigSection>
                                    <C.ConfigSectionLabel>Reroll Cost Decrease (after accomplish)</C.ConfigSectionLabel>

                                    <C.SelectionContainer>
                                        {range(1, 7).map(num => (
                                            <C.Option
                                                key={num}
                                                $selected={num === rerollCostDecrease}
                                                onClick={() => {
                                                    setRerollCostDecrease(num)
                                                    setConfigData({ ...configData, reroll_cost_decrease: num })
                                                }}
                                            >
                                                {num}
                                            </C.Option>
                                        ))}
                                    </C.SelectionContainer>
                                </C.ConfigSection>

                                <C.ConfigSection>
                                    <C.ConfigSectionLabel>Weight Decrease Rate (after accomplish)</C.ConfigSectionLabel>

                                    <C.SelectionContainer>
                                        {range(1, 9).map(num => (
                                            <C.Option
                                                key={num}
                                                $selected={num === weightDecreaseRate}
                                                onClick={() => {
                                                    setWeightDecreaseRate(num)
                                                    setConfigData({ ...configData, weight_decrease_rate: num })
                                                }}
                                            >
                                                {num}
                                            </C.Option>
                                        ))}
                                    </C.SelectionContainer>
                                </C.ConfigSection>

                                <C.ConfigSection>
                                    <C.ConfigSectionLabel>Minimum Reroll Cost</C.ConfigSectionLabel>

                                    <C.SelectionContainer>
                                        {range(1, 9).map(num => (
                                            <C.Option
                                                key={num}
                                                $selected={num === rerollMinCost}
                                                onClick={() => {
                                                    setRerollMinCost(num)
                                                    setConfigData({ ...configData, reroll_min_cost: num })
                                                }}
                                            >
                                                {num}
                                            </C.Option>
                                        ))}
                                    </C.SelectionContainer>
                                </C.ConfigSection>

                                <C.RestoreDataButton
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setOpenConfirmationModal(true)}
                                >
                                    {t('config.restore_game_data_button')}
                                </C.RestoreDataButton>
                            </C.ModalMain>

                        </C.ModalContent>
                    </Modal>
                }
            </AnimatePresence>

            <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => null}
            >
                {openConfigModal && openConfirmationModal &&
                    <Modal
                        handleClose={() => setOpenConfirmationModal(false)}
                        size='tiny'
                        animation='fadeIn'>

                        <C.ModalContent>
                            <C.ModalLabel>{t('config.restore_game_data_modal.question')}</C.ModalLabel>
                            <C.ModalButtons>
                                <C.ConfirmationButton
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setOpenConfirmationModal(false)}
                                    action='close'
                                >
                                    {t('config.restore_game_data_modal.close_button')}
                                </C.ConfirmationButton>

                                <C.ConfirmationButton
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={restoreGameData}
                                >
                                    {t('config.restore_game_data_modal.confirm_button')}
                                </C.ConfirmationButton>
                            </C.ModalButtons>
                        </C.ModalContent>
                    </Modal>
                }
            </AnimatePresence>
        </>
    )
}