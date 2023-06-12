import * as C from '../styles'
import usePlayer from '../../../../hooks/usePlayer'
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

    const content = [
        {
            question: 'O que é a Roleta do Casal?',
            answer: 'Roleta do Casal é um jogo para se jogar em dupla, no qual ambos vão selecionar atividades que gostariam de fazer juntos e rodar a roleta para sortear uma delas. Um ótimo jogo para casais indecisos!'
        },
        {
            question: 'E se eu não quiser realizar uma atividade?',
            answer: 'Caso a atividade sorteada não for do seu agrado, você pode pagar para rerolar e tentar sortear outra atividade. Cada ponto de rerolagem custa uma moeda e ambos os jogadores podem contribuir para rerolar. Mas tome cuidado: cada vez que uma atividade é rerolada, seu custo aumenta em 1. Para diminuir o custo, basta realizar a atividade e seu custo de rerolagem será reduzido em 2.'
        },
        {
            question: 'O que é o número do lado da atividade?',
            answer: 'Toda atividade tem um peso na roleta, e esse peso é indicado pelo número do lado do nome da atividade. O peso pode ir de 10 a 1 (sendo 10 mais provável de ser sorteado e 1 sendo mais improvável), e cada vez que uma atividade é realizada, o peso diminui em 1, ou seja, fica mais difícil de ser sorteado novamente. Porém, é possível resetar esse peso, basta pagar uma quantidade em moedas ((10 - peso atual) / 2) e o peso voltará para 10!'
        },
        {
            question: 'Como posso ganhar mais moedas?',
            answer: 'Para ganhar mais moedas, é muito simples: basta realizar atividades! Cada atividade realizada dá moedas ao jogador, referente a quem aquele atividade foi criada. Quando realizada, a atividade concederá 0 moedas para a pessoa que a criou e 1 moeda para a outra pessoa.'
        },
        {
            question: 'Eu posso salvar o meu jogo?',
            answer: 'Sim! Os dados do jogo são salvos automaticamente no seu navegador e permanecerão da mesma forma quando reentrar. Porém, se você acessar por outro navegador, seu jogo não estará da mesma forma de quando saiu. Por isso, você tem a opção de exportar o seu jogo em um pequeno arquivo que você pode usar para importá-lo em outro navegador para continuar seu jogo. Dessa forma, também é possível salvar diferentes jogos e abri-los quando quiser!'
        },
        {
            question: 'Deu um bug! O que fazer?',
            answer: 'Caso algum bug prejudicial aconteça, sugiro que exporte o jogo e restaure os dados do jogo. Depois, basta importá-lo para carregar novamente. Para qualquer tipo de problema, a melhor solução é sempre a de restaurar os dados.'
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
                    handleClose={() => setOpenHelpModal(false)}
                    animation='fadeIn'>

                    <C.ModalContent>
                        <C.ModalTitle>
                            How to play
                        </C.ModalTitle>

                        <C.HelpWrapper>
                            {content.map((item, index) => (
                                <C.HelpItem>
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