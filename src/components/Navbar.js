import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {FormContext} from '../context/Formcontext';
import LoginButton from './LoginButton';

const Navbar = () => {
    const {formData} = useContext(FormContext);
    console.log('NavBar formData', formData);
    return (
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <LoginButton user={formData.user}/>
        </div>
    )
}

export default Navbar
