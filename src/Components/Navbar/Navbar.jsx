import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
//import logo from '../../Images/logos.jpg'
import {FiPhone} from 'react-icons/fi';
import {IoLogoSlack} from 'react-icons/io';


export default function Navbar() {

  const[color, setColor] = useState(false);
 
  window.onscroll = function() {
    if(window.scrollY > window.innerHeight){
      setColor(true);
    }else{
      setColor(false);
    }
  }

  return (
    <nav className= {color ? 'scrolled' : "main__header"}>
      <div className="row">
        <div className= {color ? 'scrolled__col' : "col col__logo"}>
            <p className='subject__text'>Seek, Trust and Build.</p>
            <Link to = '/'><IoLogoSlack/>HEllo</Link>
        </div>
        <div className="col col__lists">
            <ul className='list__items'>
                <li className= {color ? 'scrolled__list' :  'list__name' }>
                    <Link to={'/about'}> ABOUT </Link>
                </li>
                <li className={color ? 'scrolled__list' :  'list__name' }>
                    <Link to={'/service'}> OUR SERVICE </Link>
                </li>
                <li className={color ? 'scrolled__list' :  'list__name' }>
                    <Link to={'/flow'}> FLOW </Link>
                </li>
                <li className={color ? 'scrolled__list' :  'list__name' }>
                    <Link to={'/contact'}> CONTACT </Link>
                </li>
                <li className={color ? 'scrolled__list' :  'list__name' }>
                   <p className='icon'> <FiPhone />
                    <span className='number' > 052 456 789</span>
                   </p>
                </li>
                {/* <li className='list__name'></li> */}
            </ul>
        </div>
      </div>
    </nav>
  )
}
