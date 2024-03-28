import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import InventoryIcon from '@mui/icons-material/Inventory';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WalletCard from '../components/WalletCard';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';


function Wallet() {
    const location = useLocation();
    const isActive = (pathname) => location.pathname === pathname;
    return (
        <div className='main-container'>
            <div className='sidebar-container'>
                <div className='sidebar-header'>
                    <div>
                        <img src="https://res.cloudinary.com/sangamjone/image/upload/v1711539531/logo2_ycbpk2.png" alt='logo' />
                    </div>
                    <div>
                        <MenuIcon />
                    </div>
                </div>
                <div className='search-box'>
                    <SearchIcon className='search-icon' />
                    <input type='text' placeholder='Search' className='searh-input' />
                </div>
                <div className='sidebar-menu'>
                    <ul>

                        <Link to="/" className={isActive('/') ? 'navbar-link active' : 'navbar-link'}>
                            <li>
                                <HomeIcon fontSize="small" /> Home

                            </li>
                        </Link>


                        <Link to="/org" className={isActive('/org') ? 'navbar-link active' : 'navbar-link'}>
                            <li><CorporateFareIcon fontSize="small" /> Organization</li>
                        </Link>
                        <Link to="/assets" className={isActive('/assets') ? 'navbar-link active' : 'navbar-link'}>
                            <li><SecurityIcon fontSize="small" /> Assets</li>
                        </Link>
                        <Link to="/trade" className={isActive('/trade') ? 'navbar-link active' : 'navbar-link'}>
                            <li><TrendingUpIcon fontSize="small" /> Trade</li>
                        </Link>
                        <Link to="/history" className={isActive('/history') ? 'navbar-link active' : 'navbar-link'}>
                            <li><HourglassBottomIcon fontSize="small" /> History</li>
                        </Link>
                        <Link to="/wallet" className={isActive('/wallet') ? 'navbar-link active' : 'navbar-link'}>
                            <li><InventoryIcon fontSize="small" /> Wallet</li>
                        </Link>




                    </ul>
                </div>
                <div className='sidebar-menu'>
                    <ul>



                        <Link to="/notificatio" className={isActive('/notificatio') ? 'navbar-link active' : 'navbar-link'}>
                            <li ><NotificationsActiveIcon fontSize="small" /> Notifications</li>
                        </Link>
                        <Link to="/suport" className={isActive('/suport') ? 'navbar-link active' : 'navbar-link'}>
                            <li><HelpIcon fontSize="small" /> Suport</li>
                        </Link>
                        <Link to="/setting" className={isActive('/setting') ? 'navbar-link active' : 'navbar-link'}>
                            <li><SettingsIcon fontSize="small" /> Settings</li>
                        </Link>
                    </ul>
                </div>
                <div className='profile-card'>
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Stack>
                    <div>
                        <h4>Brooklyn Simmons</h4>
                        <p>brooklyn@gmail.com</p>
                    </div>
                    <div>
                        <MoreVertIcon fontSize='small' />
                    </div>
                </div>
            </div>



            <div className='container'>
                <div>
                    <div className='container-header'>
                        <div>
                            <h1 className='container-heading'>Hello, <span style={{ color: "#c2b913" }}>Brooklyn Simmons</span>👋</h1>
                            <p>Welcome to <span style={{ color: "#46bd1e" }}>Spot trading!</span></p>
                        </div>

                        <div className='menuicon'>
                            <MenuIcon />
                        </div>
                        <div className='header-button'>
                            <Button variant="contained" style={{ backgroundColor: "#1bbf1e", color: "#fff" }}>Start Trading</Button>
                        </div>
                    </div>
                    <div className='card-container'> 
                        <WalletCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Wallet;