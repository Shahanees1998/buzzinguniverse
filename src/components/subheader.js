import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SubHeader = () => {
    const navigate = useNavigate();
    const [dropdownVisible, setDropdownVisible] = useState(null);
    const [login, setLogin] = useState(false);

    const headerStyle = {
        backgroundColor: '#000',
        padding: '10px 20px',
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    const navListStyle = {
        listStyleType: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    };

    const navItemStyle = {
        position: 'relative',
        padding: '10px 20px',
        color: 'white',
        cursor: 'pointer',
    };

    const dropdownContentStyle = (isVisible) => ({
        display: isVisible ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: '#333',
        minWidth: '150px',
        zIndex: 1,
        marginTop: '10px',
        padding: '10px 0',
    });

    const dropdownItemStyle = {
        padding: '10px 20px',
        color: 'white',
        cursor: 'pointer',
    };

    const lastNavItemStyle = {
        marginLeft: 'auto',
    };

    const handleMouseEnter = (index) => {
        setDropdownVisible(index);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(null);
    };

    const handleNavigateTo = (path) => {
        if (!path.startsWith('/')) {
            path = `/${path}`;
        }
        navigate(path);
    };

    const handleNavigateTo1 = (path) => {
        console.log(path)
        navigate('/jobes', { state: path });
    }

    const handleNavigateTo2 = (path) => {
        console.log(path)
        navigate('/adverts', { state: path });
    }

    // username
    useEffect(() => {
        if (localStorage.getItem("username")) {
            setLogin(true);
        }
    }, []);

    
    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('Logtoken');
        localStorage.removeItem('username');
        sessionStorage.removeItem('login');
        navigate('/');
    };

    return (
        <header style={headerStyle}>
            <nav style={navStyle}>
                <ul style={navListStyle}>
                    <li style={navItemStyle} onClick={() => handleNavigateTo('/')}>Home</li>
                    <li style={navItemStyle} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                        Network
                        <ul className="dropdown-content" style={dropdownContentStyle(dropdownVisible === 0)}>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo('groups')}>Companies</li>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo('members')}>Members</li>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo('videos')}>Videos</li>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo('images')}>Photos</li>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo('forms')}>Forums</li>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo('submitarticle')}>Submit Article</li>
                        </ul>
                    </li>
                    <li style={navItemStyle} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                        Jobs
                        <ul className="dropdown-content" style={dropdownContentStyle(dropdownVisible === 1)}>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo1('Jobs')}>All Jobs</li>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo1('Categories')}>Job Categories</li>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo1('Submit')}>Submit Job</li>
                        </ul>
                    </li>
                    <li style={navItemStyle} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                        Classifieds
                        <ul className="dropdown-content" style={dropdownContentStyle(dropdownVisible === 2)}>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo2('All Adverts')}>All Adverts</li>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo2('Advert Categories')}>Advert Categories</li>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo2('Submit Advert')}>Submit Advert</li>
                        </ul>
                    </li>
                    <li style={navItemStyle} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
                        Pages
                        <ul className="dropdown-content" style={dropdownContentStyle(dropdownVisible === 3)}>
                            <li style={dropdownItemStyle}>Subscriptions</li>
                            <li style={dropdownItemStyle} onClick={() => handleNavigateTo('faq')}>FAQs</li>
                        </ul>
                    </li>
                    <li style={navItemStyle}>Text</li>
                    <li onClick={() => handleNavigateTo('Questions')} style={navItemStyle}>Questions</li>
                    <li style={{
                        marginRight: "10%",
                        position: 'relative',
                        padding: '10px 20px',
                        color: 'white',
                        cursor: 'pointer',
                    }} onClick={() => handleNavigateTo('shop')}>Store</li>
                    {login ?<li style={{ ...navItemStyle, ...lastNavItemStyle }} onClick={() => handleLogout()}>Logout</li> :<><li style={{ ...navItemStyle, ...lastNavItemStyle }} onClick={() => handleNavigateTo('/')}>Login</li>
                        <li style={navItemStyle} onClick={() => handleNavigateTo('/register')}>Register</li></>}
                </ul>
            </nav>
        </header>
    );
};

export default SubHeader;
