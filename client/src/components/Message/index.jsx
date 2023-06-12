import * as C from './styles'
import usePlayer from '../../hooks/usePlayer'
import { useEffect } from 'react'

export default function Message() {
    const { setMessage, message } = usePlayer()

    useEffect(() => {
        let timerId

        if (message?.text?.length > 0) {
            timerId = setTimeout(() => {
                setMessage({ message: '', type: '' })
            }, 5000)
        }

        return () => {
            clearTimeout(timerId)
        }
    }, [message, setMessage])


    return (
        <C.Container>
            {
                message?.text?.length > 0 &&
                <C.Message type={message.type} onClick={() => setMessage({ text: '', type: '' })}>
                    {message.text}
                </C.Message>
            }
        </C.Container>
    )
}