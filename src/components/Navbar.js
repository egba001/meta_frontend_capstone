import Logo from '../assets/icons/logo.svg';
import '../index.css';

const Navbar = () => {
    return(
        <nav className='flex justify-between w-[887px] mt-[23px] items-center mx-auto'>
            <img src={Logo} alt="Logo" />
            <ul className='flex justify-evenly items-center w-[70%]'>
                <li className='text-[#495E57]'><a href="">Home</a></li>
                <li className='text-[#495E57]'><a href="">About</a></li>
                <li className='text-[#495E57]'><a href="">Menu</a></li>
                <li className='text-[#495E57]'><a href="">Reservations</a></li>
                <li className='rounded-3xl bg-[#495E57] text-white p-3 border '><a href="">Order online</a></li>
                <li>Login</li>
            </ul>
        </nav>
    )
};

export default Navbar;