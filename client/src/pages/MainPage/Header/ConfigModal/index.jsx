import * as C from '../styles'
import usePlayer from '../../../../hooks/usePlayer'
import { AnimatePresence } from 'framer-motion'
import Modal from '../../../../components/Modal'
import { useTranslation } from 'react-i18next'

export default function ConfigModal({ openConfigModal, setOpenConfigModal, openConfirmationModal, setOpenConfirmationModal }) {
    const { setPlayerData, defaultData } = usePlayer()
    const { t } = useTranslation()

    const restoreGameData = () => {
        setPlayerData(defaultData)
        setOpenConfirmationModal(false)
    }

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