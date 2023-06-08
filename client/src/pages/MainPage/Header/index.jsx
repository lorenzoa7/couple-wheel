import * as C from './styles'
import { AiOutlineMenu } from 'react-icons/ai'
import Tooltip from '../../../components/Tooltip'
import { useState, useRef, useEffect } from 'react'
import { GoGear } from 'react-icons/go'
import { AnimatePresence } from 'framer-motion'
import Modal from '../../../components/Modal'
import usePlayer from '../../../hooks/usePlayer'

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openConfigModal, setOpenConfigModal] = useState(false)
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false)
    const { setPlayerData, defaultData }= usePlayer()

    const menuRef = useRef()

    const restoreGameData = () => {
        setPlayerData(defaultData)
        setOpenConfirmationModal(false)
    }

    useEffect(() => {
        let handler = e => {
            if (!menuRef.current.contains(e.target))
                setOpenMenu(false)
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    useEffect(() => {
        if (openConfigModal)
            setOpenMenu(false)
    }, [openConfigModal])

    return (
        <>
            <C.Header>
                <C.AppTitle>Couple Roulette</C.AppTitle>
                <C.MenuContainer ref={menuRef}>
                    <C.MenuIcon onClick={() => setOpenMenu(!openMenu)}>
                        <Tooltip>Menu</Tooltip>
                        <AiOutlineMenu size={'100%'} />
                    </C.MenuIcon>

                    <C.MenuNav $open={openMenu}>

                        <C.MenuNavOption onClick={() => setOpenConfigModal(true)}>
                            <GoGear size={'75%'} />
                            <C.MenuOptionLabel>Config</C.MenuOptionLabel>
                        </C.MenuNavOption>

                    </C.MenuNav>
                </C.MenuContainer>
            </C.Header>

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
                            <C.RestoreDataButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setOpenConfirmationModal(true)}
                            >
                                Restore Game Data
                            </C.RestoreDataButton>
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