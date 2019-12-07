import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return(
  <nav className='grey darken-2'>
    <div className='nav-wrapper container'>
      <Link href='/'>
        <a className='brando-logo'>Let's Talk</a>
      </Link>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li><Link href='/devs'>
          <a>Desarrolladores</a>
        </Link></li>
        <li><Link>
          <a href='/bussines'>Let's talk bussines</a>
        </Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Nav
