// ResponsiveNavbar.js
import React, { useState } from 'react';
import './index.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="responsive-navbar-container">
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <div className="logo-container">
                    <img className="logo" src="https://res.cloudinary.com/djszohdjt/image/upload/v1734843414/lc8m2hi3gwrvxz4gty9o.png" alt="logo" />
                    <p>CodeAnt AI</p>
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li> <select> <option>UtkarshDhairyaPanwar</option></select></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/bs7smtvm64zom5xfhxzu.png' alt="repos-icon" /> <p>Repositories</p></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/secevmycbrxpgjpe92fh.png' alt='code-icon' /><p>AI Code Review</p></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/j78cgtjq1tsz6jcr4awg.png' alt="cloud-icon" /> <p>Cloud Security</p></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/icuezwaphfowo0wnsjet.png' alt='book-icon' />  <p>How to Use</p></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/wuyulbjj49lapmfgbemp.png' alt='settings-icon' /> <p>Settings</p></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/pbczp76jmgfbdxq5tuq7.png' alt='support-icon' /> <p>Support</p></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/c8coydxswo9shwbxozlf.png' alt='logout-icon' /> <p>Logout</p></li>
                </ul>
            </nav>
            <aside className="sidebar">
                <div className="logo-container">
                    <img className="logo" src="https://res.cloudinary.com/djszohdjt/image/upload/v1734843414/lc8m2hi3gwrvxz4gty9o.png" alt="logo" />
                    <p>CodeAnt AI</p>
                </div>

                <ul className="nav-links">
                    <li> <select> <option>UtkarshDhairyaPanwar</option></select></li>
                    <li className='active-tab'> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734886644/uplfzj8dbqocdbuhstk4.png' alt="repos-icon" /> <p>Repositories</p></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/secevmycbrxpgjpe92fh.png' alt='code-icon' /><p>AI Code Review</p></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/j78cgtjq1tsz6jcr4awg.png' alt="cloud-icon" /> <p>Cloud Security</p></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/icuezwaphfowo0wnsjet.png' alt='book-icon' />  <p>How to Use</p></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/wuyulbjj49lapmfgbemp.png' alt='settings-icon' /> <p>Settings</p></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/pbczp76jmgfbdxq5tuq7.png' alt='support-icon' /> <p>Support</p></li>
                    <li> <img src='https://res.cloudinary.com/djszohdjt/image/upload/v1734857950/c8coydxswo9shwbxozlf.png' alt='logout-icon' /> <p>Logout</p></li>
                </ul>
            </aside>
        </div>
    );
};

export default Header;
