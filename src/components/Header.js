import Food from '../assets/image/restauranfood.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <header className="bg-green  mt-4 w-full flex justify-between px-[280px]">
            <div  className="w-[48%] mt-2">
                <h1 className="text-[40pt] text-yellow">Little Lemon</h1>
                <h2 className='text-[18pt] text-white'>Chicago</h2>
                <p className='text-white'>Little Lemon is a charming neighbourhood bistro
                that serves simple food and classic cocktails in a
                lively but casual environment. The restaurant
                features a locally-sourced menu with daily specials</p>
                <button className='bg-yellow rounded-3xl mt-3 py-3 px-5 font-bold text-green'><NavLink to='/reservations'>Reserve a Table</NavLink></button>
            </div>
            <div className='rounded-lg'>
                <img src={Food} className='object-fit -mb-5 mt-5 rounded-2xl' height='200px' width='200px'  alt='Little lemon meal' />
            </div>
        </header>
        </>
    )
}

export default Header;