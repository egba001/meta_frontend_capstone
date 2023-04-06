import Logo from '../assets/icons/logo.svg';
import { Routes, Route, NavLink } from 'react-router-dom';
import '../index.css';
import HomePage from './../Pages/HomePage';
import Menu from './../Pages/Menu';
import Order from './../Pages/Order';
import Login from './../Pages/Login';
import Reservations from './../Pages/Reservations';
import About from './About';

const Navbar = () => {
    return(
        <div>
                <nav className='flex justify-between mt-[23px] items-center mx-[280px]'>
                    <img src={Logo} alt="Logo" />
                    <ul className='flex justify-evenly items-center w-[70%]'>
                        <li className='text-green'><NavLink to='/'>Home</NavLink></li>
                        <li className='text-green'><NavLink to='/about'>About</NavLink></li>
                        <li className='text-green'><NavLink to='/menu'>Menu</NavLink></li>
                        <li className='text-green'><NavLink to='/reservations'>Reservations</NavLink></li>
                        <li className='rounded-3xl bg-green text-white p-3 hover:shadow-xlgit '><NavLink to='/order'>Order online</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/menu' element={<Menu />}></Route>
                    <Route path='/reservations' element={<Reservations />}></Route>
                    <Route path='/order' element={<Order />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
        </div>
    )
};

export default Navbar;