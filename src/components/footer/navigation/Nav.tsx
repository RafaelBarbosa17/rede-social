
import {useState} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { AiFillHome, AiOutlineSearch, AiFillFlag, AiFillPlaySquare} from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs'

const textNavLinks = ['Home', 'Search', 'Saves', 'Shorts', 'Profile'];
const iconNavLinks = [ <AiFillHome /> , <AiOutlineSearch /> , <AiFillFlag /> , <AiFillPlaySquare /> , <BsFillPersonFill /> ];
const idNavLinks = [0, 1, 2, 3, 4]


console.log()

const renderLis = () => {
    const [ida, setIda] = useState(0);

    const widthScreen = document.body.clientWidth;
    const posIndicator = ((widthScreen - 20) / 5) / 2 - 10;
    
    const styleIndicator = {
        left: `${posIndicator + ((widthScreen - 20) / 5) * ida}px`
    }

    return (
        <>
        <div className='nav-indicator' style={styleIndicator}></div>
        <ul className='nav-ul'>
            {
                idNavLinks.map(idN => {
                    return (
                        <li className='nav-li' key={'li-k'+idN} onClick={() => setIda(idN)}>
                            <Link to={`/${idN == 0 ? '' : textNavLinks[idN].toLocaleLowerCase()}`} className={'nav-a ' + (idN == ida ? 'active' : 'desactive')}>
                                {iconNavLinks[idN]}
                                <span className="nav-link-text">
                                    {textNavLinks[idN]}
                                </span>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )

}


export const Nav = () => {
    return (
        <div className="nav-box">
            <nav className='Nav'>
                {renderLis()}
            </nav>
        </div>
    )
}