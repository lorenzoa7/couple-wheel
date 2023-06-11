import * as C from './styles'
import { AiOutlineMenu } from 'react-icons/ai'
import Tooltip from '../../../components/Tooltip'
import { useState, useRef, useEffect } from 'react'
import { GoGear } from 'react-icons/go'
import ConfigModal from './ConfigModal'
import Logo from '../../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import usePlayer from '../../../hooks/usePlayer'
import { AiOutlineImport, AiOutlineDownload } from 'react-icons/ai'

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openConfigModal, setOpenConfigModal] = useState(false)
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false)


    const { languageOptions, playerData } = usePlayer()
    const [openLanguageMenu, setOpenLanguageMenu] = useState(false)
    const [chosenLanguage, setChosenLanguage] = useState('en')

    const navigate = useNavigate()
    const { t, i18n } = useTranslation()
    const menuRef = useRef()
    const languageMenuRef = useRef()

    const getChosenLanguage = () => {
        return languageOptions.find(language => language.value === chosenLanguage)
    }

    const changeLanguage = language => {
        localStorage.setItem('language', language)
        i18n.changeLanguage(language)
        setChosenLanguage(language)
    }

    const exportData = () => {
        let filename = "couplewheel_data.json";
        let contentType = "application/json;charset=utf-8;";
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            let blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(playerData, null, '\t')))], { type: contentType });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            let a = document.createElement('a');
            a.download = filename;
            a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(playerData, null, '\t'));
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

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
        let handler = e => {
            if (!languageMenuRef.current.contains(e.target))
                setOpenLanguageMenu(false)
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

    useEffect(() => {
        setChosenLanguage(i18n.language)
    }, [i18n])

    return (
        <>
            <C.Header>
                <C.TitleContainer onClick={() => navigate('/')}>
                    <C.TitleLogo src={Logo} />
                    <C.AppTitle>{t('header.app_title')}</C.AppTitle>
                </C.TitleContainer>

                <C.RightContainer>

                    <C.LanguageContainer ref={languageMenuRef}>

                        <C.LanguageIconContainer onClick={() => setOpenLanguageMenu(!openLanguageMenu)}>
                            <Tooltip>{t('header.tooltip_language')}</Tooltip>
                            <C.LanguageIcon src={getChosenLanguage().flag} alt={getChosenLanguage().name} />
                        </C.LanguageIconContainer>

                        <C.LanguageNav $open={openLanguageMenu}>

                            {languageOptions.map((language, index) => (
                                <C.LanguageNavOption
                                    $selected={language.value === chosenLanguage}
                                    onClick={() => changeLanguage(language.value)}
                                    key={index}
                                >
                                    <C.LanguageIcon src={language.flag} alt={language.name} />
                                    <C.LanguageOptionLabel>{language.name}</C.LanguageOptionLabel>
                                </C.LanguageNavOption>
                            ))}

                        </C.LanguageNav>

                    </C.LanguageContainer>

                    <C.MenuContainer ref={menuRef}>
                        <C.MenuIcon onClick={() => setOpenMenu(!openMenu)}>
                            <Tooltip>{t('header.tooltip_menu')}</Tooltip>
                            <AiOutlineMenu size={'100%'} />
                        </C.MenuIcon>

                        <C.MenuNav $open={openMenu}>

                            <C.MenuNavOption onClick={() => setOpenConfigModal(true)}>
                                <GoGear size={'75%'} />
                                <C.MenuOptionLabel>{t('header.nav_menu.nav_config')}</C.MenuOptionLabel>
                            </C.MenuNavOption>

                            <C.MenuNavOption onClick={() => null}>
                                <AiOutlineImport size={'75%'} />
                                <C.MenuOptionLabel>{t('header.nav_menu.nav_import')}</C.MenuOptionLabel>
                            </C.MenuNavOption>

                            <C.MenuNavOption onClick={() => exportData()}>
                                <AiOutlineDownload size={'75%'} />
                                <C.MenuOptionLabel>{t('header.nav_menu.nav_export')}</C.MenuOptionLabel>
                            </C.MenuNavOption>

                        </C.MenuNav>
                    </C.MenuContainer>
                </C.RightContainer>

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