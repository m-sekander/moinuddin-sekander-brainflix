import './Header.scss'
import Logo from '../../assets/images/BrainFlix-logo.svg'
import SearchIcon from '../../assets/images/search.svg'
import Avatar from '../../assets/images/Mohan-muruge.jpg'
import Button from '../Button/Button';
import Upload from '../../assets/images/upload.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo logo" src={Logo} alt="BrainFlix Logo" />
            <div className="header__bar">
                <input className="header__search" type="search" name="search" id="search" placeholder="Search" />
                <img className="header__icon" src={SearchIcon} alt="" />
                <img className="header__avatar" src={Avatar} alt="Mohan's avatar" />
            </div>
            <Button className="button" text="Upload" icon={Upload}></Button>
        </header>
    );
}

export default Header