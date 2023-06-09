import * as C from './styles'
import { AiOutlineMenu } from 'react-icons/ai'
import Tooltip from '../../../components/Tooltip'
import { useState, useRef, useEffect } from 'react'
import { GoGear } from 'react-icons/go'
import ConfigModal from './ConfigModal'
import Logo from '../../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openConfigModal, setOpenConfigModal] = useState(false)
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false)

    const navigate = useNavigate()
    const menuRef = useRef()

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
                <C.TitleContainer onClick={() => navigate('/')}>
                    <C.TitleLogo src={Logo} />
                    <C.AppTitle>Couple Wheel</C.AppTitle>
                </C.TitleContainer>
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

            {/* Menu Nav Modals */}

            <ConfigModal
                openConfigModal={openConfigModal}
                setOpenConfigModal={setOpenConfigModal}
                openConfirmationModal={openConfirmationModal}
                setOpenConfirmationModal={setOpenConfirmationModal}
            />

        </>
    )
}