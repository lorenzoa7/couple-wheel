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
import { AiOutlineImport, AiOutlineDownload, AiOutlineQuestionCircle } from 'react-icons/ai'
import isValidPlayerJson from '../../../validations/importPlayerData'
import isValidConfigJson from '../../../validations/importConfigData'
import HelpModal from './HelpModal'

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openConfigModal, setOpenConfigModal] = useState(false)
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false)
    const [openHelpModal, setOpenHelpModal] = useState(false)
    const [importKey, setImportKey] = useState(Date.now())

    const { languageOptions, playerData, setPlayerData, setMessage, configData, setConfigData } = usePlayer()
    const [openLanguageMenu, setOpenLanguageMenu] = useState(false)
    const [chosenLanguage, setChosenLanguage] = useState('en')

    const navigate = useNavigate()
    const { t, i18n } = useTranslation()
    const hiddenFileInput = useRef()
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
        let filename = "couplewheel_data.json"
        let contentType = "application/json;charset=utf-8;"
        let data = {playerData: playerData, configData: configData}
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            let blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(data, null, '\t')))], { type: contentType })
            navigator.msSaveOrOpenBlob(blob, filename)
        } else {
            let a = document.createElement('a')
            a.download = filename
            a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(data, null, '\t'))
            a.target = '_blank'
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
        }
        setOpenMenu(false)
    }

    const importData = e => {
        const file = e.target.files[0]

        if (file && file.type === 'application/json') {
            const reader = new FileReader()
            reader.readAsText(file)

            reader.onload = e => {
                try {
                    const contents = e.target.result
                    const jsonData = JSON.parse(contents)
                    const jsonPlayerData = jsonData.playerData
                    const jsonConfigData = jsonData.configData

                    if (!isValidPlayerJson(jsonPlayerData, setMessage, t)) return
                    if (!isValidConfigJson(jsonConfigData, setMessage, t)) return

                    setPlayerData(jsonPlayerData)
                    setConfigData(jsonConfigData)
                    setMessage({ text: t('message.import.success'), type: 'success' })
                } catch {
                    setMessage({ text: t('message.import.error_master'), type: 'error' })
                }
            }


        } else {
            setMessage({ text: t('message.import.invalid_format'), type: 'error' })
        }

        setImportKey(Date.now())
        setOpenMenu(false)
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
        if (openConfigModal || openHelpModal)
            setOpenMenu(false)
    }, [openConfigModal, openHelpModal])

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

                            <C.MenuNavOption onClick={() => hiddenFileInput.current.click()}>
                                <AiOutlineImport size={'75%'} />
                                <C.MenuOptionLabel>{t('header.nav_menu.nav_open')}</C.MenuOptionLabel>
                                <input
                                    key={importKey}
                                    type="file"
                                    accept='.json'
                                    ref={hiddenFileInput}
                                    onChange={importData}
                                    className='hidden'
                                />
                            </C.MenuNavOption>

                            <C.MenuNavOption onClick={() => exportData()}>
                                <AiOutlineDownload size={'75%'} />
                                <C.MenuOptionLabel>{t('header.nav_menu.nav_export')}</C.MenuOptionLabel>
                            </C.MenuNavOption>

                            <C.MenuNavOption onClick={() => setOpenHelpModal(true)}>
                                <AiOutlineQuestionCircle size={'75%'} />
                                <C.MenuOptionLabel>{t('header.nav_menu.nav_help')}</C.MenuOptionLabel>
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

            <HelpModal 
                openHelpModal={openHelpModal}
                setOpenHelpModal={setOpenHelpModal}
            />

        </>
    )
}