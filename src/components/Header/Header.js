import './Header.scss'
import logo from '../../assets/images/BrainFlix-logo.svg'
import SearchIcon from '../../assets/images/search.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import Button from '../Button/Button';
import upload from '../../assets/images/upload.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo logo" src={logo} alt="BrainFlix logo" />
            <div className="header__bar">
                <input className="header__search" type="search" name="search" id="search" placeholder="Search" />
                <img className="header__icon" src={SearchIcon} alt="" />
                <img className="header__avatar" src={avatar} alt="Mohan's avatar" />
            </div>
            <Button text="Upload" icon={upload}></Button>
        </header>
    );
}

export default Header