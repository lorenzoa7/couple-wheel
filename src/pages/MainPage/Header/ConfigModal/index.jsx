import * as C from '../styles'
import usePlayer from '../../../../hooks/usePlayer'
import { AnimatePresence } from 'framer-motion'
import Modal from '../../../../components/Modal'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

export default function ConfigModal({ openConfigModal, setOpenConfigModal, openConfirmationModal, setOpenConfirmationModal }) {
    const { setPlayerData, defaultData, configData, setConfigData, defaultConfigData } = usePlayer()
    const { t } = useTranslation()

    const restoreGameData = () => {
        setPlayerData(defaultData)
        setConfigData(defaultConfigData)
        setOpenConfirmationModal(false)
    }

    const [onFocusHandler, setOnFocusHandler] = useState({
        drawn_player: false,
        opposite_player: false,
        reroll_skill_cost: false
    })

    const [collectedCoins, setCollectedCoins] = useState({ drawn_player: 0, opposite_player: 0 })
    const [rerollSkillCost, setRerollSkillCost] = useState(1)

    const handleBlur = (configType) => {
        switch (configType) {
            case 'collected_coins':
                setConfigData({ ...configData, collected_coins: collectedCoins })
                break
            case 'reroll_skill_cost':
                setConfigData({...configData, reroll_skill_cost: rerollSkillCost})
                break
            default:
                break
        }
    }

    useEffect(() => {
        setCollectedCoins(configData.collected_coins)
        setRerollSkillCost(configData.reroll_skill_cost)
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
                        size='small'
                        animation='fadeIn'>

                        <C.ModalContent>
                            <C.ModalTitle>
                                {t('config.title')}
                            </C.ModalTitle>
                            <C.ModalMain>
                                <C.ConfigSection>
                                    <C.ConfigSectionLabel>Collected Coins</C.ConfigSectionLabel>
                                    <C.ConfigCollectedCoinsContainer>
                                        <C.ConfigInputGroup>
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
                                                    handleBlur('collected_coins')
                                                }}
                                            />
                                            <C.NumberInputLabel>Drawn Player</C.NumberInputLabel>
                                        </C.ConfigInputGroup>

                                        <C.ConfigInputGroup>
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
                                                    handleBlur('collected_coins')
                                                }}
                                            />
                                            <C.NumberInputLabel>Opposite Player</C.NumberInputLabel>
                                        </C.ConfigInputGroup>
                                    </C.ConfigCollectedCoinsContainer>
                                </C.ConfigSection>

                                <C.ConfigSection>
                                    <C.ConfigSectionLabel>Reroll Skill Cost</C.ConfigSectionLabel>
                                    <C.NumberInput
                                        name="reroll_skill_Cost"
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
                                            handleBlur('reroll_skill_cost')
                                        }}
                                    />
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