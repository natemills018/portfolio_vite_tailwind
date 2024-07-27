import React from 'react';

import { Link } from 'react-router-dom';

interface NavBarProps {

}



const NavBar = (props: NavBarProps) => {

    return (
        <div className='px-5 py-2'>
            <Link to='/' className='btn btn-primary'>Home</Link>
            <Link to='/aboutme' className='btn btn-secondary'>About Me</Link>
            <Link to='/skills' className='btn btn-accent'>Skills</Link>
        </div>
    )
}


export default NavBar;