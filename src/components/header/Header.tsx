
import './Header.css';
import { BiHelpCircle, BiMessageRoundedDetail } from 'react-icons/bi';

export const Header = () => {
    return (
        <header className="Header">
            <div className='header-logo-box'>
                <h1 className='header-logo'>Logo</h1>
            </div>
            <div className='headers-buttons'>
                <a href="" className='header-link' rel='Ajuda' >
                    <BiHelpCircle className='header-icon help' />
                </a>
                <a href="" className='header-link msg' rel='Mensagem' >
                <BiMessageRoundedDetail className='header-icon msg' />
                </a>
            </div>
        </header>
    )
}