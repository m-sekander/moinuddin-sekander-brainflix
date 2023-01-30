import './Header.scss'
import logo from '../../assets/images/BrainFlix-logo.svg'
// import SearchIcon from '../../assets/images/search.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import Button from '../Button/Button';
import uploadIcon from '../../assets/images/upload.svg';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img className="header__logo" src={logo} alt="BrainFlix logo" />
            </Link>
            {/* <div className="header__bar">
                <input className="header__search" type="search" name="search" id="search" placeholder="Search" />
                <img className="header__icon" src={SearchIcon} alt="" />
                <img className="header__avatar avatar__mobile" src={avatar} alt="Mohan's avatar" />
            </div> */}
            <Button text="Upload" icon={uploadIcon} isButton={false} link={"/upload"}></Button>
            <img className="header__avatar avatar__others" src={avatar} alt="Mohan's avatar" />
        </header>
    );
}

export default Header