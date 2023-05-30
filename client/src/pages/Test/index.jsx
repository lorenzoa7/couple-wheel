import * as C from './styles'
import { useNavigate } from 'react-router-dom'

export default function Test() {
    const navigate = useNavigate()
    return (
        <C.PageContainer>
            <C.PageContent>
                <div className="w-32 cursor-pointer bg-green-400 hover:bg-green-600 rounded text-center p-5 duration-300" 
                    onClick={() => navigate('/')}>
                    <h1>You are in the Test Page!</h1>
                </div>
            </C.PageContent>
        </C.PageContainer>
    )
}