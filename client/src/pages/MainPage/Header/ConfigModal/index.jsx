import * as C from '../styles'
import usePlayer from '../../../../hooks/usePlayer'
import { AnimatePresence } from 'framer-motion'
import Modal from '../../../../components/Modal'

export default function ConfigModal({ openConfigModal, setOpenConfigModal, openConfirmationModal, setOpenConfirmationModal }) {
    const { setPlayerData, defaultData } = usePlayer()

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
                                Game Configuration
                            </C.ModalTitle>
                            <C.ModalMain>
                                <C.RestoreDataButton
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setOpenConfirmationModal(true)}
                                >
                                    Restore Game Data
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
                            <p className='font-medium text-center'>Are you sure you want to restore the game to its default data settings?</p>
                            <div className='flex items-center justify-center gap-8 w-full p-5'>
                                <C.ConfirmationButton
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setOpenConfirmationModal(false)}
                                    action='close'
                                >
                                    Close
                                </C.ConfirmationButton>

                                <C.ConfirmationButton
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={restoreGameData}
                                >
                                    Confirm
                                </C.ConfirmationButton>
                            </div>
                        </C.ModalContent>
                    </Modal>
                }
            </AnimatePresence>
        </>
    )
}