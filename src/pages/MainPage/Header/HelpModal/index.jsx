import * as C from '../styles'
import { AnimatePresence } from 'framer-motion'
import Modal from '../../../../components/Modal'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function HelpModal({ openHelpModal, setOpenHelpModal }) {
    const { t } = useTranslation()
    const [selected, setSelected] = useState(null)

    const toggleItem = index => {
        if (selected === index) return setSelected(null)

        setSelected(index)
    }

    const handleClose = () => {
        setOpenHelpModal(false)
        setSelected(null)
    }

    const content = [
        {
            question: t('help.item1.question'),
            answer: t('help.item1.answer')
        },
        {
            question: t('help.item2.question'),
            answer: t('help.item2.answer')
        },
        {
            question: t('help.item3.question'),
            answer: t('help.item3.answer')
        },
        {
            question: t('help.item4.question'),
            answer: t('help.item4.answer')
        },
        {
            question: t('help.item5.question'),
            answer: t('help.item5.answer')
        },
        {
            question: t('help.item6.question'),
            answer: t('help.item6.answer')
        },
    ]


    return (
        <AnimatePresence
            initial={false}
            mode='wait'
            onExitComplete={() => null}
        >
            {openHelpModal &&
                <Modal
                    size='big'
                    handleClose={handleClose}
                    animation='fadeIn'>

                    <C.ModalContent>
                        <C.ModalTitle>
                            {t('help.title')}
                        </C.ModalTitle>

                        <C.HelpWrapper>
                            {content.map((item, index) => (
                                <C.HelpItem key={index}>
                                    <C.HelpQuestion onClick={() => toggleItem(index)}>
                                        <h2>{item.question}</h2>
                                        <span>{selected === index ? '-' : '+'}</span>
                                    </C.HelpQuestion>

                                    <C.HelpAnswer $selected={selected === index}>
                                        {item.answer}
                                    </C.HelpAnswer>
                                </C.HelpItem>
                            ))}
                        </C.HelpWrapper>

                    </C.ModalContent>
                </Modal>
            }
        </AnimatePresence>
    )
}