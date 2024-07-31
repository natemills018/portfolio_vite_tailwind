import React from 'react';


interface NavBarProps {

}



const NavBar = (props: NavBarProps) => {

    return (
        <div className="bg-success">
        <div className="nav">
          <a
            className="site-title"
            href="/"
          >
            Portfolio
          </a>
  
          <ul className="">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    )
}


export default NavBar;