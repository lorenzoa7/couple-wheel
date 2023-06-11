import * as C from './styles'
import usePlayer from '../../hooks/usePlayer'

export default function Message() {
    const { setMessage, message } = usePlayer()

    return (
        <>
            {
                message.text.length > 0 &&
                <C.Message type={message.type} onClick={() => setMessage({ text: '', type: '' })}>
                    {message.text}
                </C.Message>
            }
        </>
    )
}